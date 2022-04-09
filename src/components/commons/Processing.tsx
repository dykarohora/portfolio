import P5 from 'p5'
import { useEffect, useRef, useState, VFC } from 'react'

type Props = {
  sketch: (p: P5) => void
}

export const Processing: VFC<Props> =
  ({ sketch }) => {
    const [, setInstance] = useState<P5>()
    const refDiv = useRef(null)

    useEffect(
      () => {
        if (refDiv.current === null) {
          return
        }

        setInstance(new P5(sketch, refDiv.current))
      },
      [sketch],
    )

    return <div ref={refDiv} />
  }
