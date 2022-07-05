interface ActiveAndNotActiveLessonInterface {
  type: 'live' | 'class'
  title: string
  isAvailable: boolean
}

export interface AvailableLessonInterface {
  isAvailable: boolean
}

export interface ActiveLessonInterface extends ActiveAndNotActiveLessonInterface {}
export interface NotActiveLessonInterface extends ActiveAndNotActiveLessonInterface {}
