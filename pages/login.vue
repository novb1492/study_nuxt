<template lang="">
    <div>
        login
        <nuxt-link to="/">main</nuxt-link>
        <nuxt-link to="/mypage">mypage</nuxt-link>
        <div id="test"></div>
        <input type="email" id="email">
        <button @click="cookietest">cookietest</button>
    </div>
</template>
<script>
import { markRaw } from 'vue';
import {test} from "../middleware/authenticated.js";
import { instance,setInterceptors } from '../api/reuqest'; 
export default {
    async asyncData(context) {
      // const data = await context.$axios.$get(...)
      // `todos` 는 data() 안에 선언되어 있지 않아도 됩니다.
      return { todos: {title:'login'} };
      // `todos` 는 local data에 병합(merge)됩니다.
    },
    middleware: test('ㅡㄴ'),
    /*
      받은 정보 동적으로 title변경
    */ 
    head () {
      return {
          title: this.todos.title,
          meta: [
            {
              hid: 'description',
              name: 'og:description',
              content: 'Users Pages1234',
            },
          ],
      }
    },
  mounted(){
    console.log(this.todos);
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
  },
  methods:{
    async cookietest(){
      try {
        setInterceptors(instance);
        let reponse =await instance.get('/test');
        console.log(reponse);
      } catch (error) {
          alert('av');
      }

    }
  }
}
</script>
<style lang="">
    
</style>