<template>
  <quill-editor
    ref="myQuillEditor"
    v-model="content"
    :style="`height:${height}px;`"
    :options="settings"
    :disabled="!editable"
    :signed-params="signedParams"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @change="onEditorChange($event)"
    @ready="onEditorReady($event)"
  />
</template>

<script>
import { quillEditor } from "../vue-quill";

export default {
  components: {
    quillEditor,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    settings: {
      type: Object,
      default: () => {},
    },
    signedParams: {
      type: Object,
      default: () => {},
    },
    height: {
      type: Number,
      default: 500,
    },
    editable: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      content: "",
      tableModule: null,
    };
  },

  watch: {
    content(val) {
      console.log(val);
    },
  },

  created() {},

  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },

    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },

    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },

    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.$emit("input", { quill, html, text });
    },
  },
  computed: {
    useSettings: function () {
      const _this = this;
      return {
        ...defSettings,
        ..._this.settings,
      };
    },

    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  mounted() {},
};
</script>

<style scoped>
@import "./quill.core.css";
@import "./quill.snow.css";
@import "./quill.bubble.css";

::v-deep .ql-container {
  font-size: inherit;
  font-family: inherit;
}
</style>
<style>
.ql-editor {
  font-size: 16px;
}

.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
  stroke-width: 1px !important;
}
.quillWrapper .ql-snow.ql-toolbar {
  padding-top: 8px;
  padding-bottom: 4px;
}
.quillWrapper .ql-snow.ql-toolbar button {
  margin: 1px;
}
.quillWrapper .ql-snow.ql-toolbar .ql-formats {
  margin-bottom: 10px;
}
.quillWrapper .ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
  width: 22px;
  height: 22px;
}
.quillWrapper .ql-editor ul[data-checked="true"] > li::before,
.quillWrapper .ql-editor ul[data-checked="false"] > li::before {
  font-size: 1.35em;
  vertical-align: baseline;
  bottom: -0.065em;
  font-weight: 900;
  color: #222;
}
.quillWrapper .ql-snow .ql-stroke {
  stroke: rgba(63, 63, 63, 0.95);
  stroke-linecap: square;
  stroke-linejoin: initial;
  stroke-width: 1.7px;
}
.quillWrapper .ql-picker-label {
  font-size: 15px;
}
.quillWrapper .ql-snow .ql-active .ql-stroke {
  stroke-width: 2.25px;
}
.quillWrapper .ql-toolbar.ql-snow .ql-formats {
  vertical-align: top;
}

/* quill.imageUploader.css */
.image-uploading {
  position: relative;
  display: inline-block;
}

.image-uploading img {
  max-width: 98% !important;
  filter: blur(5px);
  opacity: 0.3;
}

.image-uploading::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  margin-left: -15px;
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: #1e986c;
  z-index: 1;
  animation: spinner 0.6s linear infinite;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
