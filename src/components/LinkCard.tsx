import { memo, ReactNode } from 'react'
import { CaretRight } from 'phosphor-react'

interface LinkCardProps {
  icon: ReactNode
  text: string
  description: string
}

const LinkCard = ({ icon, text, description }: LinkCardProps) => (
  <a
    href='#'
    className='flex gap-6 bg-gray-700 items-stretch rounded overflow-hidden hover:bg-gray-600 transition-colors'
  >
    <div className='bg-green-500 h-full p-6 flex items-center'>{icon}</div>
    <div className='py-6 leading-relaxed'>
      <strong className='text-2xl'>{text}</strong>
      <p className='text-sm text-gray-200 mt-2'>{description}</p>
    </div>
    <div className='h-full p-6 flex items-center'>
      <CaretRight size={24} />
    </div>
  </a>
)

export default memo(LinkCard)
