<template>
  <div class="quill-editor">
    <slot name="toolbar"></slot>
    <div ref="editor"></div>
  </div>
</template>
<script>
import _Quill from "quill";
import forEach from "lodash/forEach";
import { ICON_SVGS } from "./icons.js";
import axios from "axios";

// import ImageUploader from 'quill-image-uploader';
import ImageUploader from "../image-uploader/quill.imageUploader.js";
_Quill.register("modules/imageUploader", ImageUploader);
// import ImageResize from '../image-size/ImageResize';
import ImageResize from "quill-image-resize-module-withfix";
_Quill.register("modules/imageResize", ImageResize);

import QuillHtmlSourceButton from "../view-source/index";
_Quill.register("modules/htmlSource", QuillHtmlSourceButton);

const Quill = window.Quill || _Quill;

// pollfill
if (typeof Object.assign != "function") {
  Object.defineProperty(Object, "assign", {
    value(target) {
      if (target == null) {
        throw new TypeError("Cannot convert undefined or null to object");
      }
      const to = Object(target);
      for (let index = 1; index < arguments.length; index++) {
        const nextSource = arguments[index];
        if (nextSource != null) {
          for (const nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true,
  });
}

export default {
  name: "quill-editor",
  data() {
    return {
      _options: {},
      _content: "",
      defaultOptions: {
        theme: "snow",
        modules: {
          table: true,
          imageResize: {},
          imageUploader: {
            upload: (file) => this.actImageUploadHandler(file),
          },
          htmlSource: {},
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"],
              ["blockquote", "code-block"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "super" }],
              [{ indent: "-1" }, { indent: "+1" }],
              [{ size: ["small", false, "large", "huge"] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              ["link", "image"],
              [
                { table: "TD" },
                { "table-insert-row": "TIR" },
                { "table-insert-column": "TIC" },
                { "table-delete-row": "TDR" },
                { "table-delete-column": "TDC" },
              ],
              ["showHtml"],
            ],
            handlers: {
              table: this.actTableHandler,
              "table-insert-row": this.actTableInsertRowHandler,
              "table-insert-column": this.actTableInsertColumnHandler,
              "table-delete-row": this.actTableDeleteRowHandler,
              "table-delete-column": this.actTableDeleteColumnHandler,
            },
          },
        },
        placeholder: this.placeholder || "Insert text here ...",
        readOnly: false,
      },
      quill: _Quill,
    };
  },
  props: {
    content: String,
    value: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    globalOptions: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    signedParams: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  mounted() {
    this.initCustomToolbarIcon();
    this.initialize();
  },
  beforeDestroy() {
    this.quill = null;
    delete this.quill;
  },
  methods: {
    initCustomToolbarIcon() {
      let icons = Quill.import("ui/icons");

      forEach(ICON_SVGS, (iconValue, iconName) => {
        icons[iconName] = iconValue;
      });
    },

    initialize() {
      if (this.$el) {
        this._options = Object.assign(
          {},
          this.defaultOptions,
          this.globalOptions,
          this.options
        );
        // Instance
        this.quill = new Quill(this.$refs.editor, this._options);

        this.quill.enable(false);

        if (this.value || this.content) {
          const delta = this.value || this.content;
          if (Array.isArray(delta)) {
            this.quill.setContents(delta, "silent");
          } else {
            const htmlData = this.quill.clipboard.convert({
              html: delta,
            });
            this.quill.setContents(htmlData, "silent");
          }
        }

        if (!this.disabled) {
          this.quill.enable(true);
        }

        this.quill.on("selection-change", (range) => {
          if (!range) {
            this.$emit("blur", this.quill);
          } else {
            this.$emit("focus", this.quill);
          }
        });

        this.quill.on("text-change", (delta, oldDelta, source) => {
          let html = this.$refs.editor.children[0].innerHTML;
          const quill = this.quill;
          const text = this.quill.getText();
          if (html === "<p><br></p>") html = "";
          this._content = html;
          // this.$emit('input', this._content);
          this.$emit("change", { html, text, quill });
        });

        this.$emit("ready", this.quill);
      }
    },

    actTableHandler() {
      this.quill.getModule("table").insertTable(2, 3);
    },

    actTableInsertRowHandler() {
      this.quill.getModule("table").insertRowBelow();
    },

    actTableInsertColumnHandler() {
      this.quill.getModule("table").insertColumnRight();
    },

    actTableDeleteRowHandler() {
      this.quill.getModule("table").deleteRow();
    },

    actTableDeleteColumnHandler() {
      this.quill.getModule("table").deleteColumn();
    },

    actImageUploadHandler(file) {
      return new Promise((resolve, reject) => {
        const { type, name } = file;
        const { path, url } = signedParams;
        const filePath = path + "/" + name;
        const fileType = type;
        const signedUrl = url;

        try {
          return axios({
            method: "POST",
            url: signedUrl,
            headers: {
              "Content-Type": "application/json",
            },
            data: { filePath, fileType },
          }).then((res) => {
            const { status: statusHeader, data } = res;
            if (statusHeader !== 200) reject("Upload failed");
            const { signedRequest, url, status } = data;
            if (!status) reject("Upload failed");
            axios
              .put(signedRequest, file, {
                headers: {
                  "Content-Type": fileType,
                },
              })
              .then((res) => {
                if (!res.status) reject("Upload failed");
                resolve(url);
              })
              .catch(function (error) {
                console.error("Error:", error);
                reject("Upload failed");
              });
          });
        } catch (err) {
          console.error("Error:", error);
          reject("Upload failed");
        }
      });
    },
  },

  watch: {
    content(newVal) {
      if (this.quill) {
        let newValHtml = this.quill.clipboard.convert({
          html: newVal,
        });
        if (newValHtml && newValHtml !== this._content) {
          this._content = newValHtml;

          this.quill.setContents(newValHtml);
        } else if (!newVal) {
          this.quill.setText("");
        }
      }
    },

    value(newVal) {
      if (this.quill) {
        let newValHtml = this.quill.clipboard.convert({
          html: newVal,
        });
        if (newValHtml && newValHtml !== this._content) {
          this._content = newValHtml;
          this.quill.setContents(newValHtml);
        } else if (!newValHtml) {
          this.quill.setText("");
        }
      }
    },

    disabled(newVal) {
      if (this.quill) {
        this.quill.enable(!newVal);
      }
    },
  },
};
</script>
