declare type ISODateString = string

export interface TeacherInterface {
  avatarURL: string
  bio: string
  name: string
}

export interface LessonInterface {
  id: string
  slug: string
  title: string
  description: string
  videoId: string
  teacher: TeacherInterface
  lessonType: 'live' | 'class'
  availableAt: ISODateString
}
