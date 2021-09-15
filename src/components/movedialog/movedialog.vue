<template>
<!-- v-bind:id="id" -->
  <el-container
      id="dialogId"
      v-if="dialogVisible">
    <el-header>
      <div @mousedown="mousedown" style="cursor:pointer">
        <h2 v-html="title"></h2>
        <div @click.stop="closeDialog()" style="position: absolute;top: 0px; right: 20px;">
          <i type="danger" size="mini"  class="el-icon-close closeBtn"></i>
        </div>
      </div>
    </el-header>
    <el-main>
      <!-- <slot>这里是内容</slot> -->
      <!-- <div>11111111111111111111111111111</div>
      <div>dddddddddddddddddddddddddddddf</div>
      <div>dddddddddddddddddddddddddddddf</div> -->
      <div>
         <audio ref="audio343" controls="controls" src="http://111.231.94.34:10002/filesrv/get?filename=/00/FF/7bfc766f-380d-4a41-9a2a-88558b9c44ff.mp3"></audio>
      </div>
    </el-main>
    <el-footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="closeDialog">确 定</el-button>
      </span>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    name: 'Window',
    props: {
      titlex: String,
      id: [String, Number]
    },
    data() {
      return {
        title: '标题',
        selectElement: '',
        dialogVisible: true,
        audio: {
          currentTime: 0,
          maxTime: 0,
          playing: false,
          muted: false,
          speed: 1,
          waiting: true,
          preload: 'auto'
      },
      }
    },
    mounted(){
      console.log('11111111111this',this)
    },
    computed: {
      
      // dialogVisible: {
      //   get: function () {
      //     return this.$store.state.dialogVisible
      //   },
      //   set: function (newValue) {
      //     this.$store.commit('newDialogVisible', newValue)
      //   }
      // }
    },
    methods: {
      
      closeDialog(e) {
        this.dialogVisible = false
        // this.$store.commit('newDialogVisible', false)
      },
      mousedown(event) {
        // this.selectElement = document.getElementById(this.id)
        this.selectElement = document.getElementById("dialogId")
        var div1 = this.selectElement
        this.selectElement.style.cursor = 'move'
        // this.isDowm = true
        var distanceX = event.clientX - this.selectElement.offsetLeft
        var distanceY = event.clientY - this.selectElement.offsetTop
        // alert(distanceX)
        // alert(distanceY)
        console.log(distanceX)
        console.log(distanceY)
        document.onmousemove = function (ev) {
          var oevent = ev || event
          div1.style.left = oevent.clientX - distanceX + 'px'
          div1.style.top = oevent.clientY - distanceY + 'px'
        }
        document.onmouseup = function () {
          document.onmousemove = null
          document.onmouseup = null
          div1.style.cursor = 'default'
        }
      }
    }
  }
</script>

<style scoped>
  .el-container {
    position: absolute;
    height: 500px;
    width: 500px;
    border: 1px;
    top: 20%;
    left: 35%;
    border-radius: 2px;
    /* background: green; */
    border: 1px solid black;
  }

  .dialog-footer {
    text-align: right;
  }

  .el-main {
    background-color: white;
  }

  .el-footer {
    background-color: white;
  }

  .el-header {
    background-color: red;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>