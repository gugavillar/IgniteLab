import { Youtube, DefaultUi, Player } from '@vime/react'

import '@vime/core/themes/default.css'

interface VideoPlayerProps {
  video_id: string
}

const VideoPlayer = ({ video_id }: VideoPlayerProps) => {
  return (
    <div className='bg-black justify-center flex'>
      <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
        <Player>
          <Youtube videoId={video_id} />
          <DefaultUi />
        </Player>
      </div>
    </div>
  )
}

export default VideoPlayer
