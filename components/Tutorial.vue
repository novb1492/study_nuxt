<!-- Please remove this file from your project -->
<template>
  <div>
   <nuxt-link to="/login">로그인2</nuxt-link>
   
            <ul v-for="item in items">
                <li>NO : {{ item.id }}</li>
                <li>제목 : {{ item.title }}</li>
                <li>내용 : {{ item.body }}</li>
            </ul>
    </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      items:[{id:'1',title:'2',body:'fff'},{id:'2',title:'3',body:'456'}]
    }
  },
  head: () => ({
    title: 'users',
    meta: [
      {
        hid: 'description',
        name: 'og:description',
        content: 'Users Pages',
      },
    ],
  }),
}
</script>
