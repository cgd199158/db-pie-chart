import Konva from 'konva'

interface Options {
  container: string
  width?: number
  height?: number
  radius?: number
  strokeWidth?: number
  themeColor?: string
  centerX?: number
  centerY?: number
}

const defaultOptions: Options = {
  container: 'container',
  height: 400,
  width: 400,
  radius: 120,
  strokeWidth: 18,
  themeColor: '#22B9FF'
}

export default class ArcFigure {
  private layer: Konva.Layer
  private stage: Konva.Stage
  private arc: Konva.Arc
  private circle1: Konva.Circle
  private circle2: Konva.Circle
  private centerX: number
  private centerY: number
  private options: Options

  constructor(options: Options) {
    this.options = { ...defaultOptions, ...options }
    this.stage = new Konva.Stage({
      container: this.options.container,
      width: this.options.width,
      height: this.options.height
    })
    this.centerX = this.options.centerX || this.options.width / 2
    this.centerY = this.options.centerY || this.options.height / 2 + this.options.radius
    this.layer = new Konva.Layer()
    this.initBg()
    this.arc = this.initArc()
    this.layer.add(this.arc)
    this.initCircle()
    this.stage.add(this.layer)
  }

  setCircle1(circle: Konva.Circle): void {
    this.layer.add(circle)
    this.circle1 = circle
  }

  setCircle2(circle: Konva.Circle): void {
    this.layer.add(circle)
    this.circle2 = circle
  }

  // 设置背景色
  initBg(): void {
    const arc: Konva.Arc = new Konva.Arc({
      x: this.centerX,
      y: this.centerY,
      innerRadius: 0,
      outerRadius: (85 / 120) * this.options.radius,
      stroke: '#fff',
      strokeWidth: this.options.strokeWidth,
      fill: '#fff',
      clockwise: true,
      lineJoin: 'round',
      angle: 180,
      shadowColor: this.options.themeColor,
      shadowOpacity: 0.2,
      shadowBlur: 0.25 * this.options.radius
    })

    const rect: Konva.Rect = new Konva.Rect({
      x: this.centerX,
      y: this.centerY,
      offsetX: this.options.radius + this.options.strokeWidth,
      width: (this.options.radius + this.options.strokeWidth) * 2,
      height: 0.25 * this.options.radius,
      fill: '#fff'
    })
    this.layer.add(arc)
    this.layer.add(rect)
  }

  initArc(): Konva.Arc {
    const arc: Konva.Arc = new Konva.Arc({
      x: this.centerX,
      y: this.centerY,
      innerRadius: this.options.radius,
      outerRadius: this.options.radius,
      angle: 0,
      stroke: this.options.themeColor,
      strokeWidth: this.options.strokeWidth,
      clockwise: false,
      lineJoin: 'round',
      rotation: 180
    })

    return arc
  }

  initCircle(): void {
    const circle1: Konva.Circle = new Konva.Circle({
      x: this.centerX,
      y: this.centerY,
      offsetX: this.options.radius,
      radius: this.options.strokeWidth / 2 + 8,
      fill: '#FFFFFF',
      shadowColor: this.options.themeColor,
      shadowOpacity: 0.3,
      shadowBlur: 10
    })
    const circle2: Konva.Circle = new Konva.Circle({
      x: this.centerX,
      y: this.centerY,
      offsetX: this.options.radius,
      radius: this.options.strokeWidth / 2 + 2,
      fill: this.options.themeColor,
      shadowColor: this.options.themeColor,
      shadowOpacity: 0.3,
      shadowBlur: 10
    })
    this.setCircle1(circle1)
    this.setCircle2(circle2)
  }

  resetArc(angle: number): void {
    new Konva.Tween({
      node: this.arc,
      duration: 0.3,
      angle: angle
    }).play()
    new Konva.Tween({
      node: this.circle1,
      duration: 0.3,
      rotation: angle
    }).play()
    new Konva.Tween({
      node: this.circle2,
      duration: 0.3,
      rotation: angle
    }).play()
  }
}
