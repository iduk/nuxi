<template>
  <Head>
    <Title>Luck number: {{ dynamic }}</Title>
    <Meta name="description" :content="`My page's ${dynamic} description`" />
  </Head>
  <div>
    <h1>IndexPage</h1>
  </div>
  <Html :lang="String(dynamic)">
  
  
  </Html>
</template>

<script lang="ts">
export default {
  setup() {
    useHead({
      titleTemplate: '%s - useHead example',
      script: [{src: '/IE.js'}]
    })
    return { dynamic: ref('ko') }
  },
  head: {
    title: 'Another title'
  }
}

definePageMeta({
  layout: "plain",
})

</script>
