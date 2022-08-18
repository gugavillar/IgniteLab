import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const homeFormValidation = yupResolver(
  yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required()
  })
)
