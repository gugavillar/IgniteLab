import { memo } from 'react'

export const Loading = memo(() => (
  <div className="flex justify-center items-center h-full">
    <div
      className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-b-green-300"
      role="status"
    ></div>
    <span className="visually-hidden ml-4 text-green-300">Loading...</span>
  </div>
))

Loading.displayName = 'Loading'
