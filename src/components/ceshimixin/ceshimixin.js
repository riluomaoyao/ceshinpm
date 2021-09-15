// export const mixin = {
//   data() {
//     return {
//       BtnGroups: ['测试', '新增']
//     }
//   },
//   created: function(){
//     this.hello()
//   },
//   mounted() {

//   },
//   methods: {
//     hello () {
//       console.log('hello from mixin!')
//     }
//   }
// }


export default {
  data() {
    return {
      BtnGroups: ['测试', '新增']
    }
  },
  created: function(){
    this.hello()
  },
  mounted() {

  },
  methods: {
    hello () {
      console.log('hello from mixin!')
    },
    handel(data){
      console.log('data',data)
    }
  }
}