import { memo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { LessonInterface } from '../../types/data'

import { ActiveLesson } from './ActiveLesson'
import { NotActiveLesson } from './NotActiveLesson'

interface LessonProps {
  lesson: LessonInterface
}

export const Lesson = memo(({ lesson: { title, availableAt, slug, lessonType } }: LessonProps) => {
  const { slug: slugFromParams } = useParams<{ slug: string }>()

  const availableAtLikeDateObject = new Date(availableAt)
  const isActiveLesson = slugFromParams === slug

  const isAvailableLesson = isPast(availableAtLikeDateObject)
  const availableFormattedDate = format(availableAtLikeDateObject, "EEEE' • 'dd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  return (
    <Link to={`/event/lesson/${slug}`} className={`group ${!isAvailableLesson && 'pointer-events-none'}`}>
      <span className='text-gray-300'>{availableFormattedDate}</span>
      {isActiveLesson ? (
        <ActiveLesson type={lessonType} title={title} isAvailable={isAvailableLesson} />
      ) : (
        <NotActiveLesson type={lessonType} title={title} isAvailable={isAvailableLesson} />
      )}
    </Link>
  )
})
