import { useQuery } from '@apollo/client'

import { GET_LESSONS_QUERY } from '../constants/lessonsQuery'
import Lesson from './Lesson'
import Loading from './Loading'

declare type ISODateString = string

interface GetLessonsQueryResponse {
  lessons: Array<{
    id: string
    title: string
    slug: string
    lessonType: 'live' | 'class'
    availableAt: ISODateString
  }>
}

const Sidebar = () => {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Cronograma de aulas
      </span>
      <div className='flex flex-col gap-8'>
        {!data?.lessons?.length && <Loading />}
        {data?.lessons?.map((lesson) => (
          <Lesson
            key={lesson?.id}
            availableAt={new Date(lesson?.availableAt)}
            slug={lesson?.slug}
            title={lesson?.title}
            type={lesson?.lessonType}
          />
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
