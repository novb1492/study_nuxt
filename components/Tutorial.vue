<!-- Please remove this file from your project -->
<template>
   <nuxt-link to="/login">로그인</nuxt-link>
</template>

<script>
export default {
  name: 'NuxtTutorial',
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
