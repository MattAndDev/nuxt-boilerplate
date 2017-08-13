<template>
  <div ref='home' class="home">
    <div class="u-cw">
      <icon icon-name="unicorn" classes="my_unicorn_icon"></icon>
      <heading type="h1" fake="span" content="Nuxt <3" classes="my_title"></heading>
    </div>
  </div>
</template>
<script>

import Vue from 'vue'
import Icon from '~/components/atoms/icon.vue'
import Heading from '~/components/atoms/heading.vue'
export default {
  name: 'home',
  components: {
    Icon,
    Heading
  },
  mounted () {

  }
}
</script>


<style lang="sass">

</style>
