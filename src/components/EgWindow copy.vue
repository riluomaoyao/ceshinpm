<template>
   <transition name='fade' @after-leave='afterLeave' @after-enter='afterEnter'>
    <div v-show="visible">
      <div class="mask"></div>
      <div class="eg-window" v-show="visible" :style="wh">
        <div class="header" @mousedown="mousedownHandle">
          <span class="title">新增</span>
        </div>
        <!-- <button type="button" class="closeBtn" @click="closeHandle">
          <i class="el-icon el-icon-close"></i>
        </button> -->
        <el-button type="danger"  class="closeBtn" icon="el-icon-close" @click="closeHandle"></el-button>
        <!-- <div>1111111111111</div> -->
        
        <div class="content">
          <div>11111111111111111111111111111111
            1111111111111111111111111111111
            111111111111111111111111111
          </div>
          <!-- <component
            :is="slotComponent"
            :componentParams="componentParams"
            :noticeId="noticeId"
            @submitData="submitDataHandle"
            @close="closeHandle"
            @toggle="toggleBtnHandle"
          > -->
          <!-- </component> -->
        </div>
        <!-- <div class="footer">
          <el-button @click="closeHandle">{{$t('operation.cancel')}}</el-button>
          <el-button
            v-for="btn in btnGroups"
            v-if="hasButton(btn)"
            :key="setBtnKey(btn)"
            :type="setBtnType(btn)"
            @click="sureHandle(btn)">{{btn.name}}
          </el-button>
        </div> -->
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'EgWindow',
  // mixins: [ButtonMixin],
  computed: {
    // 动态计算宽高
    wh () {
      return {}
    }
   
  },
  data () {
    return {
       // 是否全屏
      fullScreen: false,
      // 给子组件的参数
      componentParams: {
      },
      // 组件作为插槽，潜入到页面中（子组件对象）
      slotComponent: null,
      visible: true,
      title: '',
      width: '80%',
      height: '90%',
      bodyScroll: ''
    
    }
  },
  watch: {
    visible (newVal, oldVal) {
      if (newVal) {
        this.bodyScroll = document.body.style.overflow
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = this.bodyScroll
      }
    }
  },
  mounted () {
  },
  methods: {
    afterLeave () {
      this.$emit('closed')
    },
    afterEnter () {
    },
    closeHandle () {
      this.$emit('closeHandle')
    },
    // 提交数据给父组件
    submitDataHandle (data) {
      this.$emit('sure', data)
    },
    mousedownHandle (e) {
      // 子组件中去继承
    },
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  }

}
</script>

<style scoped>
  .eg-window{
    position: fixed;
    display: block;
    margin: 0 auto;
    z-index:5001;
    background:#fff;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .header{
    padding: 4px 20px;
    cursor: move;
    background: yellow;
  }
  .title{
    line-height: 24px;
    font-size: 14px;
    font-weight: bold;
  }
  .closeBtn{
    position: absolute;
    top: 10px;
    right: 20px;
    padding: 0;
    background: 0 0;
    border: none;
    outline: 0;
    cursor: pointer;
    font-size: 18px;
    color: red;
  }
  .el-icon-close{
    font-size: 30px;
    color: #000;
  }
  .footer{
    padding: 15px;
    text-align: right;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .content{
    padding: 15px;
    color: #606266;
    font-size: 14px;
    overflow: auto;
    height:calc(100% - 42px - 30px - 60px);
    position: relative;
  }
  .mask{
    position: fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background:rgba(0, 0, 0, 0.5);
    z-index:5000
  }
  .fade-enter-active, .fade-leave-active{
    transition: opacity 0s
  }

  .fade-enter, .fade-leave-to{
    opacity: 0
  }

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

</style>
