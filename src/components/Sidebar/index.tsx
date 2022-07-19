import { useQuery } from '@apollo/client'

import { GET_LESSONS_QUERY } from '@constants/lessonsQuery'

import { LessonInterface } from '../../types/data'

import { Lesson } from '../Lessons'
import { Loading } from '../Loading'

interface GetLessonsQueryResponse {
  lessons: Array<LessonInterface>
}

export const Sidebar = () => {
  const { data, loading } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>Cronograma de aulas</span>
      <div className='flex flex-col gap-8'>
        {loading && <Loading />}
        {data?.lessons?.map((lesson) => (
          <Lesson key={lesson?.id} lesson={lesson} />
        ))}
      </div>
    </aside>
  )
}
