'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var QuillHtmlSourceModule = /** @class */ (function () {
  function QuillHtmlSourceModule(quill, options) {
    if (options === void 0) {
      options = {};
    }
    this.classToolbarButton = 'ql-html';
    this.classEditor = 'ql-html-editor';
    this.showingHtml = false;
    this.quill = quill;
    this.options = options;
    this.container = this.quill.root.parentElement;
    this.toolbar = this.quill.getModule('toolbar');
    this.initToolbar();
    this.initHtmlTextArea();
  }
  QuillHtmlSourceModule.prototype.initToolbar = function () {
    var _this = this;
    // create toolbar button
    var toolbarEl = this.toolbar.container;
    var buttonContainer = document.createElement('span');
    buttonContainer.setAttribute('class', 'ql-formats');
    buttonContainer.style = 'float: right;margin-right: 0;';
    var button = document.createElement('button');
    button.innerHTML =
      '<svg version="1.1" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g><path d="m12.309 3.4883v2.207l3.3047 3.3047-3.3047 3.3086v2.2031l5.5117-5.5117z"/><path d="m5.6953 5.6953v-2.207l-5.5156 5.5117 5.5156 5.5117v-2.2031l-3.3086-3.3086z"/><path d="m10.102 6.7969-4.4062 4.4062h2.2031l4.4102-4.4062z"/></g></svg>';
    button.type = 'button';
    button.classList.add(this.classToolbarButton);
    // event binding
    button.onclick = function (e) {
      e.preventDefault();
      var htmlEditor = _this.container.querySelector('.' + _this.classEditor);
      var htmlTextArea = htmlEditor.querySelector('textarea');
      htmlEditor.style.display = _this.showingHtml ? 'none' : '';
      var textEditor = _this.container.querySelector('.ql-editor');
      textEditor.style.display = _this.showingHtml ? '' : 'none';
      if (_this.showingHtml) {
        textEditor.innerHTML = htmlTextArea.value;
      } else {
        htmlTextArea.value = textEditor.innerHTML;
      }
      _this.showingHtml = !_this.showingHtml;
    };
    // append button
    buttonContainer.appendChild(button);
    toolbarEl.appendChild(buttonContainer);
  };
  /**
   * <div class="ql-html-editor">
   *   <textarea class="ql-html-editor-textarea"></textarea>
   * </div>
   */
  QuillHtmlSourceModule.prototype.initHtmlTextArea = function () {
    var htmlTextAreaEditor = this.container.querySelector(
      '.' + this.classEditor
    );
    if (htmlTextAreaEditor == null) {
      // Textarea
      var txtArea = document.createElement('textarea');
      txtArea.style.cssText =
        'width: 100%;margin: 0px;background: rgb(29, 29, 29);box-sizing: border-box;color: rgb(204, 204, 204);font-size: 15px;outline: none;padding: 20px;line-height: 24px;font-family: Consolas, Menlo, Monaco, &quot;Courier New&quot;, monospace;position: absolute;top: 0;bottom: 0;border: none;resize: none;';
      txtArea.classList.add('ql-html');
      // Textarea Wrapper (Html Editor)
      var htmlEditor = document.createElement('div');
      htmlEditor.classList.add(this.classEditor);
      htmlEditor.style.cssText =
        'position: absolute; height: 100%; width: 100%; display: none;';
      htmlEditor.appendChild(txtArea);
      this.container.appendChild(htmlEditor);
    }
  };
  return QuillHtmlSourceModule;
})();
exports.default = QuillHtmlSourceModule;
