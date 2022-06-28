import { useQuery } from '@apollo/client'

import { GET_LESSON_BY_SLUG } from '../../constants/lessonsQuery'

import Footer from '../Footer'
import VideoPlayer from './VideoPlayer'
import VideoDescription from './VideoDescription'
import ComplementarySection from './ComplementarySection'
import Loading from '../Loading'

interface VideoProps {
  slug: string
}

interface GetLessonBySlug {
  lesson: {
    slug: string
    title: string
    description: string
    videoId: string
    teacher: {
      avatarURL: string
      bio: string
      name: string
    }
  }
}

const Video = ({ slug }: VideoProps) => {
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
      <div className='flex-1'>
        <Loading />
      </div>
    )
  if (error) return <p>Erro!</p>
  return (
    <div className='flex-1'>
      <VideoPlayer video_id={data?.lesson?.videoId as string} />
      <div className='p-8 max-w-[1100px] mx-auto'>
        <VideoDescription
          title={data?.lesson?.title}
          description={data?.lesson?.description}
          teacher={data?.lesson?.teacher}
        />
        <ComplementarySection />
      </div>
      <Footer />
    </div>
  )
}

export default Video
