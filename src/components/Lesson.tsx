import { CheckCircle, Lock } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string
  availableAt: Date
  slug: string
  type: 'live' | 'class'
}

const Lesson = ({ title, availableAt, slug, type }: LessonProps) => {
  const isAvailable = isPast(availableAt)
  const availableFormattedDate = format(
    availableAt,
    "EEEE' • 'dd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR
    }
  )
  return (
    <Link to={`/event/lesson/${slug}`} className='group'>
      <span className='text-gray-300'>{availableFormattedDate}</span>
      <div className='rounded border border-gray-600 mt-2 p-4 group-hover:border-green-500'>
        <header className='flex items-center justify-between'>
          {isAvailable ? (
            <span className='font-medium text-blue-500 text-sm flex items-center gap-2'>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='font-medium text-orange-500 text-sm flex items-center gap-2'>
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className='rounded border border-green-300 px-2 py-[0.125rem] text-xs text-white font-bold'>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className='text-gray-200 mt-4 block'>{title}</strong>
      </div>
    </Link>
  )
}

export default Lesson
