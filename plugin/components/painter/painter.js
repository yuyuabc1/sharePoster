import Pen from './lib/pen'
import Card from './lib/card'

// plugin/components/painter/painter.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    template: {
      type: Object,
      observer: function (newVal, oldVal) {
        console.log(newVal)
        this.start()
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    painterStyle: 'width:680rpx;height:900rpx'
  },

  created() {
    setStringPrototype()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    start () {
      var ctx = wx.createCanvasContext('k-canvas', this)
      let card = new Card().platette()
      let template = Object.assign(this.properties.template, card)
      console.log(template)
      const pen = new Pen(ctx, this.properties.template)
      pen.paint(() => {
        console.log('start')
      })
    }
  }
})

let screenK = 0.5;

function setStringPrototype() {
  /* eslint-disable no-extend-native */
  /**
   * 是否支持负数
   * @param {Boolean} minus 是否支持负数
   */
  console.log('1')
  String.prototype.toPx = function toPx(minus) {
    let reg;
    if (minus) {
      reg = /^-?[0-9]+([.]{1}[0-9]+){0,1}(rpx|px)$/g;
    } else {
      reg = /^[0-9]+([.]{1}[0-9]+){0,1}(rpx|px)$/g;
    }
    const results = reg.exec(this);
    if (!this || !results) {
      console.error(`The size: ${this} is illegal`);
      return 0;
    }
    const unit = results[2];
    const value = parseFloat(this);

    let res = 0;
    if (unit === 'rpx') {
      res = Math.round(value * screenK);
    } else if (unit === 'px') {
      res = value;
    }
    return res;
  };
}
