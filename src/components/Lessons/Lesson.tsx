import { Link, useParams } from 'react-router-dom'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import ActiveLesson from './ActiveLesson'
import NotActiveLesson from './NotActiveLesson'

interface LessonProps {
  title: string
  availableAt: Date
  slug: string
  type: 'live' | 'class'
}

const Lesson = ({ title, availableAt, slug, type }: LessonProps) => {
  const { slug: slugFromParams } = useParams<{ slug: string }>()
  const isAvailable = isPast(availableAt)
  const availableFormattedDate = format(
    availableAt,
    "EEEE' • 'dd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR
    }
  )
  const isActiveLesson = slugFromParams === slug

  return (
    <Link
      to={`/event/lesson/${slug}`}
      className={`group ${!isAvailable && 'pointer-events-none'}`}
    >
      <span className='text-gray-300'>{availableFormattedDate}</span>
      {isActiveLesson ? (
        <ActiveLesson type={type} title={title} isAvailable={isAvailable} />
      ) : (
        <NotActiveLesson type={type} title={title} isAvailable={isAvailable} />
      )}
    </Link>
  )
}

export default Lesson
