import ReferenceWindow from './EgWindow.vue'

export default {
  extends: ReferenceWindow,
  computed: {
    wh () {
      // 宽高都是百分比的情况
      let left = '0px'
      let top = '0px'
      let width = 500
      let height = 500
      // 全屏操作
      if (this.fullScreen) {
        left = '0px'
        top = '0px'
        width = this.windowWidth
        height = this.windowHeight
      } else if (String(this.width).includes('%') && String(this.height).includes('%')) {
        width = this.windowWidth * Number.parseInt(this.width, 10) / 100
        height = this.windowHeight * Number.parseInt(this.height, 10) / 100
        left = (this.windowWidth - width) / 2 + 'px'
        top = (this.windowHeight - height) / 2 + 'px'
      } else { // 宽高设置的数字或者是px
        width = Number.parseInt(this.width, 10)
        height = Number.parseInt(this.height, 10)
        left = (this.windowWidth - width) / 2 + 'px'
        top = (this.windowHeight - height) / 2 + 'px'
      }
      width = `${width}px`
      height = `${height}px`

      if (this.left) {
        left = `${this.left}px`
      }
      if (this.top) {
        top = `${this.top < 0 ? 0 : this.top}px`
      }
      return {position: 'fixed', width, height, left, top}
    }
  },
  mounted () {
    window.addEventListener('resize', this.resizeHandle, false)
  },
  methods: {
    afterEnter () {
      // 后面继续
    },
    resizeHandle () {
      // 每次触发resize的时候，先清除定时器，再开定时器，给100毫秒的延时，避免频繁触发resize，从而改变弹层的位置
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.left = null
        this.top = null
        this.windowWidth = window.innerWidth
        this.windowHeight = window.innerHeight
      }, 50)
    },
    mousedownHandle (e) {
      debugger
      let target = e.target.parentNode
      let disX = Number.parseInt(e.clientX - target.offsetLeft)
      let disY = Number.parseInt(e.clientY - target.offsetTop)
      // console.log('当前鼠标点击的位置', disX + '@' + disY)
      document.onmousemove = (e) => {
        this.left = Number.parseInt(e.clientX - disX)
        this.top = Number.parseInt(e.clientY - disY)
      }
      document.onmouseup = () => {
        // debugger
        document.onmousemove = null
        document.onmouseup = null
      }
      return false
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeHandle)
  },
  data () {
    return {
      visible: false,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      left: null,
      top: null
    }
  }
}
