import { memo } from 'react'

import Logo from './Logo'

const Header = () => (
  <header className='w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600'>
    <Logo />
  </header>
)

export default memo(Header)
