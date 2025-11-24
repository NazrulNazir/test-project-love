import { Link } from "react-router"

const ModuleOne = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] px-7'>
      <h1 className='text-info text-4xl md:text-6xl text-center font-bold' id='text-shadow'>Truly, today is a special day.🎈</h1>
      <div className='flex justify-center gap-6 md:gap-10 mt-20'>
        <Link to={'/love'}>
          <button className='bg-warning  px-6 md:px-18 py-1.5 rounded-xl font-bold text-xs md:text-xl text-black hover:text-black hover:bg-amber-400 cursor-pointer'>Unlock Today</button>
        </Link>
      </div>
    </div>
  )
}

export default ModuleOne