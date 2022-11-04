<template lang="">
    <div>
        login
        <div id="test"></div>
        <input type="email" id="email">
    </div>
</template>
<script>
import { markRaw } from 'vue';
import {test} from "../middleware/authenticated.js";
export default {
    middleware: test,
    head: () => ({
    title: 'login',
    meta: [
      {
        hid: 'description',
        name: 'og:description',
        content: 'Users Pages',
      },
    ],
  }),
  mounted(){
    window.ClassicEditor
          .create(document.querySelector('#test'), {
            extraPlugins: [],
            toolbar: [],
          })
          .then(newEditor => {
            this.editor = markRaw(newEditor);
            // this.editor.setData('test');
            this.editor.enableReadOnlyMode( 'test2');
    
          })
          .catch(error => {
            console.log(error);
            alert('에디터생성에 실패했습니다');
          })
  }
}
</script>
<style lang="">
    
</style>