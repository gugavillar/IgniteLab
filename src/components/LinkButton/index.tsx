import { memo, ReactNode } from 'react'

interface LinkButtonProps {
  text: string
  icon: ReactNode
  variant: 'ghost' | 'default'
}

export const LinkButton = memo(({ text, icon, variant }: LinkButtonProps) => {
  const isDefaultButton = variant === 'default'
  return (
    <a
      href="#"
      className={
        isDefaultButton
          ? 'flex p-4 gap-2 rounded bg-green-500 text-sm items-center justify-center font-bold hover:bg-green-700 transition-colors'
          : 'flex p-4 gap-2 rounded border border-blue-500 text-sm items-center justify-center font-bold text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors'
      }
    >
      {icon}
      {text}
    </a>
  )
})

LinkButton.displayName = 'LinkButton'
