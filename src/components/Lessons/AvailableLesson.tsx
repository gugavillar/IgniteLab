import { memo } from 'react'

import { CheckCircle, Lock } from 'phosphor-react'

import { AvailableLessonInterface } from './interfaces'

export const AvailableLesson = memo(
  ({ isAvailable }: AvailableLessonInterface) =>
    isAvailable ? (
      <span className="font-medium text-white text-sm flex items-center gap-2">
        <CheckCircle size={20} />
        Conteúdo liberado
      </span>
    ) : (
      <span className="font-medium text-orange-500 text-sm flex items-center gap-2">
        <Lock size={20} />
        Em breve
      </span>
    )
)

AvailableLesson.displayName = 'AvailableLesson'
