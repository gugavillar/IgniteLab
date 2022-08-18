import { memo } from 'react'

import { AvailableLesson } from './AvailableLesson'
import { ActiveLessonInterface } from './interfaces'

export const ActiveLesson = memo(
  ({ type, title, isAvailable }: ActiveLessonInterface) => {
    const isLiveLesson = type === 'live'

    return (
      <div className="rounded border border-gray-600 mt-2 p-4 group-hover:border-green-500 bg-green-500">
        <header className="flex items-center justify-between">
          <AvailableLesson isAvailable={isAvailable} />
          <span className="rounded border border-white px-2 py-[0.125rem] text-xs text-white font-bold">
            {isLiveLesson ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className="mt-4 block text-white">{title}</strong>
      </div>
    )
  }
)

ActiveLesson.displayName = 'ActiveLesson'
