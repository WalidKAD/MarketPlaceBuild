import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <header className='bg-state-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Vald</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        <form className='bg-state-100 p-3 rounded-lg flex items-center'>
          <input 
          type='text'
          placeholder='search... '
          className='bg-transparent focus:outline-none w-4 sm:w-64 '
          /> 
          <FaSearch className='text-state-600' />
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
          <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
          </Link>

          <Link to='/about'>
          <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
          </Link>


          <Link to='/profile'>

          {currentUser ? (
            <img className='rouded-full h-7 w-7 object-cover' src={currentUser.avatar} alt="profile" />
          ): (
          <li className=' text-slate-700 hover:underline'>Sign in</li> 
          )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
