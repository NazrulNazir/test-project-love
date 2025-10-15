import { Link } from "react-router"

const ModuleTwo = () => {
  return (
    <div className='flex justify-center items-center h-[90vh]' id='love-shado'>
        <h1 className='text-accent text-5xl font-bold md:text-6xl'>I love you..💕</h1>
        <Link to={'/'}>
          <button className='absolute top-5 left-5 bg-indigo-400 text-base-300  font-bold px-5 py-1 rounded-lg cursor-poiter'>Back</button>
        </Link>
    </div>
  )
}

export default ModuleTwo