import { Link } from "react-router"

const ModuleOne = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
      <h1 className='text-info text-4xl md:text-6xl text-center font-bold' id='text-shadow'>Will you be my life <br />Partner ?</h1>
      <div className='flex justify-center gap-6 md:gap-10 mt-20'>
        <Link to={'/love'}>
          <button className='bg-warning  px-12 md:px-18 py-1.5 rounded-xl font-bold text-xs md:text-xl text-black hover:text-black hover:bg-amber-400 cursor-pointer'>Yes</button>
        </Link>
        <Link to={'/love'}>
          <button className='bg-warning px-3 py-1.5 rounded-xl font-bold text-xs md:text-xl text-black shadow-red hover:bg-amber-400 hover:text-black cursor-pointer'>Of course Yes!!!</button>
        </Link>
      </div>
    </div>
  )
}

export default ModuleOne