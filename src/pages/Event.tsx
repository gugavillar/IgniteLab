import { useParams } from 'react-router-dom'

import { Header } from '@components/Header'
import { Info } from '@components/Info'
import { Sidebar } from '@components/Sidebar'
import { Video } from '@components/Video'

export const Event = () => {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video slug={slug} /> : <Info />}
        <Sidebar />
      </main>
    </div>
  )
}
