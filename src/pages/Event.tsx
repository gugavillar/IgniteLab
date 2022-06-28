import { useParams } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Video from '../components/Video/Video'

const Event = () => {
  const { slug } = useParams<{ slug: string }>()
  return (
    <main className='flex flex-1'>
      {slug ? <Video slug={slug} /> : <div className='flex flex-1'></div>}
      <Sidebar />
    </main>
  )
}

export default Event
