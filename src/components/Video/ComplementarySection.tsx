import { memo } from 'react'

import { FileArrowDown, Image } from 'phosphor-react'

import { LinkCard } from '@components/LinkCard'

export const ComplementarySection = memo(() => (
  <section className="mt-20 gap-8 flex">
    <LinkCard
      icon={<FileArrowDown size={40} />}
      text="Material complementar"
      description="Acesse o material complementar para acelerar o seu desenvolvimento"
    />
    <LinkCard
      icon={<Image size={40} />}
      text="Wallpapers exclusivos"
      description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
    />
  </section>
))

ComplementarySection.displayName = 'ComplementarySection'
