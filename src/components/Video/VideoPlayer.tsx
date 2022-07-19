import { memo } from 'react'
import { Youtube, DefaultUi, Player } from '@vime/react'

import '@vime/core/themes/default.css'

interface VideoPlayerProps {
  video_id: string
}

export const VideoPlayer = memo(({ video_id }: VideoPlayerProps) => {
  return (
    <div className='bg-black justify-center flex'>
      <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
        <Player controls>
          <Youtube videoId={video_id} />
          <DefaultUi />
        </Player>
      </div>
    </div>
  )
})
