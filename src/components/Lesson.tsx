import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string
  availableAt: Date
  slug: string
  type: 'live' | 'class'
}

interface AvailableLesson {
  isAvailable: boolean
}

interface ActiveAndNotActiveLesson {
  type: 'live' | 'class'
  title: string
  isAvailable: boolean
}

interface ActiveLesson extends ActiveAndNotActiveLesson {}
interface NotActiveLesson extends ActiveAndNotActiveLesson {}

const AvailableLesson = ({ isAvailable }: AvailableLesson) =>
  isAvailable ? (
    <span className='font-medium text-white text-sm flex items-center gap-2'>
      <CheckCircle size={20} />
      Conteúdo liberado
    </span>
  ) : (
    <span className='font-medium text-orange-500 text-sm flex items-center gap-2'>
      <Lock size={20} />
      Em breve
    </span>
  )

const ActiveLesson = ({ type, title, isAvailable }: ActiveLesson) => (
  <div className='rounded border border-gray-600 mt-2 p-4 group-hover:border-green-500 bg-green-500'>
    <header className='flex items-center justify-between'>
      <AvailableLesson isAvailable={isAvailable} />
      <span className='rounded border border-white px-2 py-[0.125rem] text-xs text-white font-bold'>
        {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
      </span>
    </header>
    <strong className='mt-4 block text-white'>{title}</strong>
  </div>
)

const NotActiveLesson = ({ type, title, isAvailable }: NotActiveLesson) => (
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
