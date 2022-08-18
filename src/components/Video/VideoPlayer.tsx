import { memo } from 'react'

import { Youtube, DefaultUi, Player } from '@vime/react'

import '@vime/core/themes/default.css'

interface VideoPlayerProps {
  videoId: string
}

export const VideoPlayer = memo(({ videoId }: VideoPlayerProps) => {
  return (
    <div className="bg-black justify-center flex">
      <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
        <Player controls>
          <Youtube videoId={videoId} />
          <DefaultUi />
        </Player>
      </div>
    </div>
  )
})

VideoPlayer.displayName = 'VideoPlayer'
