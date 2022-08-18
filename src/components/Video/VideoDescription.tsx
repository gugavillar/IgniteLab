import { DiscordLogo, Lightning } from 'phosphor-react'

import { LinkButton } from '@components/LinkButton'
import { Teacher } from '@components/Teacher'
import { LessonInterface, TeacherInterface } from '@types'

interface VideoDescriptionProps {
  lesson: LessonInterface
}

export const VideoDescription = ({
  lesson: { title, description, teacher }
}: VideoDescriptionProps) => (
  <section className="flex items-start gap-16">
    <div className="flex-1 flex-col">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-200 mt-4 leading-relaxed">{description}</p>
      <Teacher teacher={teacher as TeacherInterface} />
    </div>
    <div className="flex flex-col gap-4">
      <LinkButton
        text="COMUNIDADE NO DISCORD"
        icon={<DiscordLogo size={24} />}
        variant="default"
      />
      <LinkButton
        text="ACESSE O DESAFIO"
        icon={<Lightning size={24} />}
        variant="ghost"
      />
    </div>
  </section>
)
