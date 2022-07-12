import logo from '../assets/icons/logo.svg';
import couch from '../assets/images/couch.png';
import phone from '../assets/images/app.svg';
import dots from '../assets/icons/dots.svg';
import { anytime, close, hamburger, key, payment } from '../assets/svg/svg';
import spotify from '../assets/icons/spotify.svg';
import dell from '../assets/icons/dell.svg';
import cisco from '../assets/icons/cisco.svg';
import disney from '../assets/icons/disney.svg';
import deezer from '../assets/icons/deezer.svg';
import verizon from '../assets/icons/verizon.svg';
import texas from '../assets/icons/texas.svg';
import table from '../assets/images/table.png';
import lamp from '../assets/icons/lamp.png';
import { useState } from 'react';

function App() {
  const images = [spotify, dell, cisco, disney, deezer, verizon, texas]
  const [openNavBar, setOpenNavBar] = useState(false);

  return (
    <body>
      <header className='bg-yellow'>
        {/* Large screen nav bar */}
          {!openNavBar && (
            <div className='justify-between items-center mb-10 flex p-8 lg:hidden'>
              <img className='w-1/3' src={logo} alt="logo" />
              <div className={!openNavBar ? "flex" : "hidden"} onClick={() => setOpenNavBar(!openNavBar)} >{hamburger}</div>
            </div>
          )}
        <nav className="items-center justify-between p-8 hidden lg:flex">
          <div className='flex ml-8'>
            <p className='cursor-pointer text-lg font-medium'>Home</p>
            <p className='ml-14 cursor-pointer text-lg font-medium'>Contact</p>
          </div>
          <img src={logo} alt="logo" />
          <div className='flex mr-8'>
            <button className='bg-red text-white py-5 px-7 rounded-md hover:bg-white hover:text-dark'>LOGIN</button>
            <button className='ml-14 bg-dark text-white py-2 px-7 rounded-md p-4 hover:bg-white hover:text-dark'>SIGN UP</button>
          </div>
        </nav>

        {/* Small screen nav bar */}
        {openNavBar && 
          <nav className="block items-center justify-between text-center p-8 h-screen relative z-10 bg-yellow px-10 overflow-hidden">
            <div className='flex justify-between items-center mb-10'>
              <img className='w-1/3' src={logo} alt="logo" />
              <div className={openNavBar ? "flex" : "hidden"} onClick={() => setOpenNavBar(!openNavBar)}>{close}</div>
            </div>
            <div className='block'>
              <p className='cursor-pointer text-lg font-normal'>HOME</p>
              <p className='cursor-pointer text-lg font-normal mt-6'>CONTACT</p>
            </div>
            <div className='block mt-6'>
              <button className='bg-red text-white py-5 px-7 w-full rounded-md hover:bg-white hover:text-dark'>LOGIN</button>
              <button className='bg-dark text-white py-5 px-7 w-full rounded-md mt-6 hover:bg-white hover:text-dark'>SIGN UP</button>
            </div>
          </nav>
        }

        <main className='mt-56 flex justify-center'>
          <div className='relative flex'>
            <img src={couch} alt="couch" />
          </div>
          <div className='absolute mt-40 lg:-mt-10 w-full lg:w-fit top-0 lg:top-auto'>
            <img className='w-2/4 mx-auto lg:w-full' src={phone} alt="phone" />
            <button className='py-2 px-8 bg-yellow mt-10 bottom-0 rounded-md font-medium ml-24 lg:ml-14'>Download The App</button>
          </div>
        </main>
      </header>
      <section className='mt-52'>
        <section className='flex justify-between'>
          <div className='mt-12 hidden md:block'>
            <img src={dots} alt="dots" />
          </div>

          <div className='justify-around p-20 -mt-20 block sm:flex sm:mt-4 md:mt-40 lg:mt-4'>
            <div className='flex flex-col justify-center text-center p-4'>
              <div className='mx-auto border-yellow border-8 rounded-full p-4'>
                {key}
              </div>
              <p className='font-bold mt-2 text-lg lg:text-xi'>Safe</p>
              <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facilis?</p>
            </div>

            <div className='flex flex-col justify-center text-center p-4'>
              <div className='mx-auto border-yellow border-8 rounded-full p-4'>
                {payment}
              </div>
              <p className='font-bold mt-2 text-lg lg:text-xi'>Easy Payments</p>
              <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facilis?</p>
            </div>

            <div className='flex flex-col justify-center text-center p-4'>
              <div className='mx-auto border-yellow border-8 rounded-full p-4'>
                {anytime}
              </div>
              <p className='font-bold mt-2 text-lg lg:text-xi'>Anytime</p>
              <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facilis?</p>
            </div>

          </div>

          <div className='mt-12 hidden md:block'>
            <img src={dots} alt="dots" />
          </div>
        </section>

        <section className='bg-dark text-center'>
          <div className='px-6 py-10 lg:px-96 lg:py-8'>
            <h2 className='text-yellow font-bold text-xi pt-5'>Our Partners</h2>
            <p className='text-white mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam atque iusto accusamus consequuntur nulla? Dolores quasi nobis aut temporibus ipsum?</p>
            <div className='flex mt-4 justify-evenly flex-wrap'>
              {images.map((res) => (
                <div className='bg-white rounded-md p-6 flex justify-center items-center mt-10 mx-4'>
                  <img src={res} width="82px" alt="spotify" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='block items-center mx-8 justify-center mt-4 lg:flex'>
          <div className='w-full px-16 mx-auto mt-14 text-center lg:text-left lg:mt-0 lg:mx-0 lg:w-2/4 lg:p-32'>
            <h2 className='font-bold text-xi'>Relax, You're Home!</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolore voluptatem dolores optio sed ut rem, libero expedita quam ex.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id similique tempora minima eaque cum libero voluptatibus ex! Voluptates, corrupti ducimus.
            </p>
            <button className='bg-yellow text-dark font-medium px-6 py-2 rounded-md mt-4'>Sign Up</button>
          </div>
          <div className='border-8 mt-80 rounded-full border-yellow w-1/4 h-2/5 absolute right-0 hidden lg:block'></div>
          <div className='w-full mt-20 flex relative lg:mt-0 lg:w-2/4'>
            <img className='mx-auto' src={table} alt="table" />
          </div>
        </section>

        <section className='block w-full justify-between items-center my-44 lg:flex'>
          <div className='w-full ml-0 text-center lg:text-left justify-center lg:ml-64 lg:w-2/4'>
            <img className='mx-auto lg:mx-0' src={lamp} alt="lamp" />
            <button className='py-2 px-8 bg-yellow mt-10 bottom-0 rounded-md font-medium'>Download The App</button>
          </div>
          <div className='w-full mt-10 lg:mt-0 lg:w-2/4'>
            <form className='border-4 mx-auto lg:mx-0 border-dark p-8 w-4/5 rounded-md'>
              <div className='flex flex-col w-full'>
                <label>Enter Name</label>
                <input className='border-2 border-yellow p-3 rounded-md' type="text" />
              </div>
              <div className='flex flex-col mt-8 w-full'>
                <label>Enter Email</label>
                <input className='border-2 border-yellow p-3 rounded-md' type="email" />
              </div>
              <div className='flex flex-col mt-8 w-full'>
                <label>Enter Message</label>
                <textarea className='border-2 border-yellow p-3 rounded-md' type="text" />
              </div>
              <button className='bg-yellow text-dark font-medium px-6 py-2 rounded-md mt-6'>Sign Up</button>
            </form>
          </div>
        </section>
      </section>
    </body>
  );
}

export default App;
