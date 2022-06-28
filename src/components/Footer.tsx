import { memo } from 'react'

import RocketLogo from './RocketLogo'

const Footer = () => (
  <footer className='px-6'>
    <div className='border-t border-gray-600 flex items-end justify-between py-6'>
      <div className='flex items-center gap-6'>
        <RocketLogo />
        <p>Rocketseat - Todos os direitos reservados</p>
      </div>
      <p>Políticas de privacidade</p>
    </div>
  </footer>
)

export default memo(Footer)
