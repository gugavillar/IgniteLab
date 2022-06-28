interface TeacherProps {
  avatarURL?: string
  name?: string
  bio?: string
}

const Teacher = ({ avatarURL, name, bio }: TeacherProps) => (
  <div className='flex mt-6 gap-4 items-center'>
    <img
      className='rounded-full w-16 h-16 border-2 border-blue-500'
      src={avatarURL}
      alt={name}
    />
    <div className='leading-relaxed'>
      <strong className='text-2xl'>{name}</strong>
      <p className='text-gray-200 text-sm'>{bio}</p>
    </div>
  </div>
)

export default Teacher
