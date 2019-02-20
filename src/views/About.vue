<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{content}}
  </div>
</template>
<script>
  export default {
    name: 'about',
    props: {
      content: {
        type: String,
        default: 'about_content'
      }
    }
  }
</script>
