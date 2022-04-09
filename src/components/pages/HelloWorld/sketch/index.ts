import type P5 from 'p5'

export const sineCosine = (p: P5) => {
  p.setup = () => {
    p.createCanvas(720, 400, 'webgl')
  }

  p.draw = () => {
    p.background(250)
    p.rotateY(p.frameCount * 0.01)

    for (let j = 0; j < 5; j += 1) {
      p.push()
      for (let i = 0; i < 80; i += 1) {
        p.translate(
          p.sin(p.frameCount * 0.001 + j) * 100,
          p.sin(p.frameCount * 0.001 + j) * 100,
          i * 0.1,
        )
        p.rotateZ(p.frameCount * 0.002)
        p.push()
        p.sphere(8, 6, 4)
        p.pop()
      }
      p.pop()
    }
  }
}
