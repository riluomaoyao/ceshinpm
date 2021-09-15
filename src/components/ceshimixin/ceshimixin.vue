<template>
  <div>
    <el-button
      @click="handel(item)"
      v-for="(item,index) in BtnGroups" 
      :key="index">{{item}}</el-button>
  </div>
</template>

<script>
  import ceshimixin from './ceshimixin.js'
  // import {ceshimixin} from './ceshimixin'
  // import {mixin} from './ceshimixin.js'
  export default {
    name: 'ceshimixin',
    mixins: [ceshimixin],
    components:{
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
      // console.log('ceshimixin',ceshimixin)
    },
    methods: {
    },
    created(){
      // console.log('ceshimixin',ceshimixin)
    }

  }
</script>

<style scoped>
  

</style>
