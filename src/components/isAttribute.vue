<template>
  <div>
      <!-- <keep-alive> -->
        <component :is="'HelloWorld'" class="tab"></component>
        <!-- <component :is = "HelloWorld" class="tab"></component> -->
      <!-- </keep-alive> -->
      <!-- <HelloWorld></HelloWorld> -->
  </div>
</template>

<script>
import  Hello from './Hello'
import HelloWorld from './HelloWorld'
export default {
  name: 'isAttribute',
  components:{
    HelloWorld,
    Hello
  },
  computed: {
  },
  data () {
    return {
     
    
    }
  },
  watch: {

  },
  mounted () {
  },
  methods: {

  }

}
</script>

<style scoped>
  

</style>
