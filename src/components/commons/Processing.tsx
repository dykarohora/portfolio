import P5 from 'p5'
import { createRef, useEffect, useState, VFC } from 'react'

type Props = {
  sketch: (p: P5) => void
}

export const Processing: VFC<Props> =
  ({ sketch }) => {
    const [, setInstance] = useState<P5>()
    const wrapper = createRef<HTMLDivElement>()

    useEffect(
      () => {
        if (wrapper.current === null) return
        setInstance(new P5(sketch, wrapper.current))
      },
      [sketch],
    )

    return <div ref={wrapper} />
  }
