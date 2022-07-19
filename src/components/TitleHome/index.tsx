import { memo } from 'react'

import { Logo } from '../Icons/Logo'

export const TitleHome = memo(() => (
  <div className='max-w-[640px]'>
    <Logo />
    <h1 className='text-[2.5rem] mt-8 leading-tight'>
      Construa uma <strong className='text-blue-500'>aplicação completa</strong>, do zero, com{' '}
      <strong className='text-blue-500'>React JS</strong>
    </h1>
    <p className='text-gray-200 mt-6 leading-relaxed'>
      Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda
      para acessar as melhores oportunidades do mercado.
    </p>
  </div>
))
