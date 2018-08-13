export default class Painter {
  constructor(ctx, data) {
    this.ctx = ctx
    this.data = data
  }

  paint(callback) {
    
    if (!this.data.width || !this.data.height) {
      return
    }

    this.style = {
      width: this.data.width.toPx(),
      height: this.data.height.toPx(),
    };

    this._background();

    this.ctx.draw(false, () => {
      callback
    })
  }

  _background() {
    this.ctx.save()
    const {
      width,
      height,
    } = this.style;
    const bg = this.data.background;
    this.ctx.translate(width / 2, height / 2);
    this.ctx.setFillStyle(bg)
    this.ctx.fillRect(-width / 2, -height / 2, width, height)
  }
}