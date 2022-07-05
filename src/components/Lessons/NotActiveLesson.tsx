import { memo } from 'react'

import { NotActiveLessonInterface } from './interfaces'

import AvailableLesson from './AvailableLesson'

const NotActiveLesson = ({
  type,
  title,
  isAvailable
}: NotActiveLessonInterface) => (
  <div className='rounded border border-gray-600 mt-2 p-4 group-hover:border-green-500'>
    <header className='flex items-center justify-between'>
      <AvailableLesson isAvailable={isAvailable} />
      <span className='rounded border border-green-300 px-2 py-[0.125rem] text-xs text-white font-bold'>
        {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
      </span>
    </header>
    <strong className='mt-4 block text-gray-200'>{title}</strong>
  </div>
)

export default memo(NotActiveLesson)
