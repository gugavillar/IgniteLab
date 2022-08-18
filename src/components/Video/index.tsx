import { useQuery } from '@apollo/client'

import { Footer } from '@components/Footer'
import { Loading } from '@components/Loading'
import { GET_LESSON_BY_SLUG } from '@constants/lessonsQuery'

import { LessonInterface } from '../../types/data'
import { ComplementarySection } from './ComplementarySection'
import { VideoDescription } from './VideoDescription'
import { VideoPlayer } from './VideoPlayer'

interface VideoProps {
  slug: string
}

interface GetLessonBySlug {
  lesson: LessonInterface
}

export const Video = ({ slug }: VideoProps) => {
  const { loading, error, data } = useQuery<GetLessonBySlug>(
    GET_LESSON_BY_SLUG,
    {
      variables: {
        slug
      }
    }
  )

  if (loading)
    return (
      <div className="flex-1">
        <Loading />
      </div>
    )

  if (error) return <p>Erro!</p>

  return (
    <div className="flex-1">
      <VideoPlayer videoId={data?.lesson?.videoId as string} />
      <div className="p-8 max-w-[1100px] mx-auto">
        <VideoDescription lesson={data?.lesson as LessonInterface} />
        <ComplementarySection />
      </div>
      <Footer />
    </div>
  )
}
