import { memo, ReactNode } from 'react'

interface LinkButtonProps {
  text: string
  icon: ReactNode
  variant: 'ghost' | 'default'
}

const LinkButton = ({ text, icon, variant }: LinkButtonProps) => (
  <a
    href='#'
    className={
      variant === 'default'
        ? 'flex p-4 gap-2 rounded bg-green-500 text-sm items-center justify-center font-bold hover:bg-green-700 transition-colors'
        : 'flex p-4 gap-2 rounded border border-blue-500 text-sm items-center justify-center font-bold text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors'
    }
  >
    {icon}
    {text}
  </a>
)

export default memo(LinkButton)
