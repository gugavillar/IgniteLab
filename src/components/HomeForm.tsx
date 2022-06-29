import { useMutation } from '@apollo/client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { homeFormValidation } from '../validators/homeFormYupValidators'
import { CREATE_NEW_SUBSCRIBER } from '../constants/subscriberQuery'

interface HomeFormValues {
  email: string
  name: string
}

const HomeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<HomeFormValues>({
    defaultValues: {
      email: '',
      name: ''
    },
    resolver: homeFormValidation
  })

  const navigation = useNavigate()

  const [createSubscriber, { data }] = useMutation(CREATE_NEW_SUBSCRIBER)

  const handleSubscribe: SubmitHandler<HomeFormValues> = async (values) => {
    try {
      await createSubscriber({
        variables: {
          email: values?.email,
          name: values?.name
        }
      })
      data?.createSubscriber?.id && navigation('/event')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='bg-gray-700 rounded border border-gray-500 p-8'>
      <strong className='block text-2xl mb-6'>Inscreva-se gratuitamente</strong>
      <form
        className='w-full flex flex-col gap-3'
        onSubmit={handleSubmit(handleSubscribe)}
      >
        <input
          className={`bg-gray-900 rounded px-5 h-14 outline-none focus:outline-green-500 ${
            errors?.name?.message && 'outline-red-600'
          }`}
          type='text'
          placeholder='Seu nome completo'
          {...register('name')}
        />
        <input
          className={`bg-gray-900 rounded px-5 h-14 outline-none focus:outline-green-500 ${
            errors?.email && 'outline-red-600'
          }`}
          type='email'
          placeholder='Digite seu email'
          {...register('email')}
        />
        <button
          type='submit'
          className='px-6 py-4 font-bold rounded text-sm mt-6 bg-green-500 hover:bg-green-700 transition-colors disabled:opacity-50'
          disabled={isSubmitting}
        >
          GARANTIR MINHA VAGA
        </button>
      </form>
    </div>
  )
}

export default HomeForm
