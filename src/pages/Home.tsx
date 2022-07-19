import { Footer } from '@components/Footer'
import { HomeForm } from '@components/HomeForm'
import { TitleHome } from '@components/TitleHome'

export const Home = () => {
  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
      <div className='w-full max-w-[1200px] flex items-center justify-between mt-20 mx-auto'>
        <TitleHome />
        <HomeForm />
      </div>
      <img src='/assets/code-mock.png' className='mt-10' alt='' />
      <Footer />
    </div>
  )
}
