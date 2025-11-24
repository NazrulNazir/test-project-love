import { Link } from "react-router"

const ModuleTwo = () => {
  return (
    <div className='flex justify-center flex-col items-center h-[90vh] px-6' id='love-shado'>
      <div className="text-3xl text-indigo-200 animate-bounce"><p className="text-center">Wishing you a </p> <p className="text-center">Birthday that's as</p> <p className="text-center">wonderful and amazing</p> <p className="text-center">as you are.🎉</p></div>
        <div className="">
          <h1 className='text-accent text-3xl font-bold md:text-6xl mt-10'>🎈🎂Happy Birthday,</h1>
          <h1 className='text-accent text-3xl font-bold md:text-6xl mt-4'>Sharmin..💕🎉</h1>
        </div>
        <img src="" alt="" />
        <Link to={'/'}>
          <button className='absolute top-5 left-5 bg-indigo-400 text-base-300  font-bold px-5 py-1 rounded-lg cursor-poiter'>Back</button>
        </Link>
    </div>
  )
}

export default ModuleTwo