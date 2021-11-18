export class BaseModule {
  constructor(resizer) {
    this.quill = resizer.quill;
    this.overlay = resizer.overlay;
    this.img = resizer.img;
    this.options = resizer.options;
    this.requestUpdate = resizer.onUpdate;
  }
  onCreate = () => {};
  onDestroy = () => {};

  onUpdate = () => {};
}
