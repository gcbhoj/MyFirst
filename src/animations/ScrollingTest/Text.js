export class Text {
  constructor(canvas, text) {
    this.canvas = canvas;
    this.c = this.canvas.getContext("2d");
    this.x = this.canvas.width;
    this.y = this.canvas.height / 2;
    this._text = text;
    this.speed = 1;
    this.fontSize = "20";
    this.fontFamily = "Bona Nova SC";
  }

  set text(value) {
    this._text = value;
    this.x = this.canvas.width; // reset position when text changes
  }

  get text() {
    return this._text;
  }

  update() {
    this.x -= this.speed;
    if (this.x < -this.calculateTextWidth()) {
      this.x = this.canvas.width;
    }
  }

  calculateTextWidth() {
    this.c.font = `${this.fontSize}px ${this.fontFamily}`;
    return this.c.measureText(this._text).width;
  }

  draw(context) {
    context.font = `${this.fontSize}px ${this.fontFamily}`;
    context.fillStyle = "rgba(49,30,16,.3)";
    context.textBaseline = "middle";
    context.fillText(this._text, this.x, this.y);
  }
}
