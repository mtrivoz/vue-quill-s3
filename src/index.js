import VueQuillS3 from './quill-editor'

VueQuillS3.install = function (Vue) {
  Vue.component(VueQuillS3.name, VueQuillS3)
}

export {
  VueQuillS3 as default,
  VueQuillS3
}
