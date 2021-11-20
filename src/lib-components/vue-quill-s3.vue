<template>
  <div
    class="quill-editor"
    ref="quillEditorBox"
    :class="{
      'quill-fullscreen': isFullscreen,
      'quill-no-border': !hasBorder,
      disabled: disabled,
    }"
    :style="{
      width: isFullscreen ? '' : width + 'px',
      height: isFullscreen ? '' : height + 'px',
      zIndex: zIndex,
    }"
  >
    <div ref="quillEditor"></div>
    <input
      type="file"
      :accept="imgAccept"
      ref="img-input"
      style="display: none"
    />
  </div>
</template>
<script type="text/javascript">
import Quill from 'quill';
import toolbar from './toolbar';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.snow.css';
import ICON_SVGS from './icons';
import './quill-editor.css';
import forEach from 'lodash/forEach';
import axios from 'axios';

import ImageUploader from './modules/image-uploader/index.js';
Quill.register('modules/imageUploader', ImageUploader);

import ImageResize from 'quill-image-resize-module-withfix';
Quill.register('modules/imageResize', ImageResize);

import QuillHtmlSourceButton from './modules/view-source/index.js';
Quill.register('modules/htmlSource', QuillHtmlSourceButton);

export default {
  name: 'VueQuillS3',
  props: {
    value: String,
    width: Number,
    height: Number,
    placeholder: String,
    toolbar: [Object, Array],
    zIndex: [String, Number],
    fullscreen: {
      type: Boolean,
      default: false,
    },
    signedParams: {
      type: Object,
      default: () => ({
        path: 'news/tepm',
        url: 'https://api.boholight.co/upload/publish',
      }),
    },
    syncOutput: {
      type: Boolean,
      default: true,
    },
    theme: {
      type: String,
      default: 'snow',
    },
    hasBorder: Boolean,
    disabled: Boolean,
    imgAccept: String,
    showFullButton: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      content: '',
      isFullscreen: this.fullscreen,
      quill: null,
      Quill: Quill,
      icons: null,
    };
  },

  watch: {
    fullscreen(val) {
      this.isFullscreen = val;
    },

    content(newVal) {
      if (this.quill) {
        let newValHtml = this.quill.clipboard.convert({
          html: newVal,
        });
        if (newValHtml && newValHtml !== this._content) {
          this._content = newValHtml;

          this.quill.setContents(newValHtml);
        } else if (!newVal) {
          this.quill.setText('');
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
          this.quill.setText('');
        }
      }
    },
    disabled(newVal, oldVal) {
      this.setDisabled(newVal);
    },
  },
  methods: {
    initCustomToolbarIcon() {
      this.icons = Quill.import('ui/icons');

      forEach(ICON_SVGS, (iconValue, iconName) => {
        this.icons[iconName] = iconValue;
      });
    },

    initialize() {
      const quillEditor = this.$refs.quillEditor;
      const quill = new Quill(quillEditor, {
        debug: 'warn',
        modules: {
          table: true,
          imageResize: {},
          imageUploader: {
            upload: (file) => this.actImageUploadHandler(file),
          },
          htmlSource: {},
          toolbar: {
            container: this.toolbar || toolbar,
            handlers: {
              table: this.actTableHandler,
              'table-insert-row': this.actTableInsertRowHandler,
              'table-insert-column': this.actTableInsertColumnHandler,
              'table-delete-row': this.actTableDeleteRowHandler,
              'table-delete-column': this.actTableDeleteColumnHandler,
            },
          },
        },
        placeholder: this.placeholder || 'Insert text here ...',
        theme: this.theme,
      });
      this.quill = quill;

      this.quill.enable(false);

      if (this.value || this.content) {
        const delta = this.value || this.content;
        if (Array.isArray(delta)) {
          this.quill.setContents(delta, 'silent');
        } else {
          const htmlData = this.quill.clipboard.convert({
            html: delta,
          });
          this.quill.setContents(htmlData, 'silent');
        }
      }

      if (this.theme === 'snow' && this.showFullButton) {
        this.initFullBtn();
      }

      if (!this.disabled) {
        this.quill.enable(true);
      }

      quill.on('text-change', (delta, oldDelta, source) => {
        let html = this.$refs.quillEditor.children[0].innerHTML;
        const quill = this.quill;
        const text = this.quill.getText();
        if (html === '<p><br></p>') html = '';
        this._content = html;
        this.$emit('change', { html, text, quill });
      });

      quill.on('selection-change', (range) => {
        if (!range) {
          this.$emit('blur', this.quill);
        } else {
          this.$emit('focus', this.quill);
        }
      });

      this.$emit('init', quill, this);
    },

    initFullBtn() {
      const childs = this.$refs.quillEditorBox.children;
      const fullBtn = document.createElement('SPAN');
      fullBtn.className = 'ql-formats ql-resize';
      fullBtn.style = 'float: right;margin-right: 0;';
      const that = this;
      function setSizeBtn() {
        let icon = '';
        if (that.isFullscreen) {
          icon = that.icons.minsize;
        } else {
          icon = that.icons.maxsize;
        }
        fullBtn.innerHTML =
          '<button type="button" class="ql-fullscreen">' + icon + '</button>';
      }

      setSizeBtn();

      fullBtn.addEventListener(
        'click',
        () => {
          this.isFullscreen = !this.isFullscreen;
          setSizeBtn();
        },
        false
      );
      for (let i in childs) {
        if (childs[i].className.indexOf('ql-toolbar') > -1) {
          childs[i].append(fullBtn);
          break;
        }
      }
    },

    setDisabled(val) {
      this.quill.enable(!val);
    },

    getContent(val) {
      return this.quill.container.firstChild.innerHTML;
    },

    actTableHandler() {
      this.quill.getModule('table').insertTable(2, 3);
    },

    actTableInsertRowHandler() {
      this.quill.getModule('table').insertRowBelow();
    },

    actTableInsertColumnHandler() {
      this.quill.getModule('table').insertColumnRight();
    },

    actTableDeleteRowHandler() {
      this.quill.getModule('table').deleteRow();
    },

    actTableDeleteColumnHandler() {
      this.quill.getModule('table').deleteColumn();
    },

    actImageUploadHandler(file) {
      return new Promise((resolve, reject) => {
        const { type, name } = file;
        const { path, url } = this.signedParams;
        const filePath = path + '/' + name;
        const fileType = type;
        const signedUrl = url;

        try {
          return axios({
            method: 'POST',
            url: signedUrl,
            headers: {
              'Content-Type': 'application/json',
            },
            data: { filePath, fileType },
          }).then((res) => {
            const { status: statusHeader, data } = res;
            if (statusHeader !== 200) reject('Upload failed');
            const { signedRequest, url, status } = data;
            if (!status) reject('Upload failed');
            axios
              .put(signedRequest, file, {
                headers: {
                  'Content-Type': fileType,
                },
              })
              .then((res) => {
                if (!res.status) reject('Upload failed');
                resolve(url);
              })
              .catch(function (error) {
                console.error('Error:', error);
                reject('Upload failed');
              });
          });
        } catch (err) {
          console.error('Error:', error);
          reject('Upload failed');
        }
      });
    },
  },

  mounted() {
    this.initCustomToolbarIcon();
    this.initialize();
  },
};
</script>
