import { VFC } from 'react'

import { Processing } from '../../commons/Processing'
import { sineCosine } from './sketch'

export const HelloWorld: VFC =
  () => <Processing sketch={sineCosine} />
