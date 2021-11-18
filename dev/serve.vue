<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import { VueQuillS3 } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  components: {
   VueQuillS3,
  }
});
</script>

<template>
  <div id="app">
    <vue-quill-s3/>
  </div>
</template>
