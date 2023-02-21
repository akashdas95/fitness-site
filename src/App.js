import { React, useState } from 'react';
import './App.css';



function App() {

  let [navOpen,setNavOpen] = useState(false); 

  
 
  return (
    <div className="App ">
      <div className='mx-auto bg-green-50 relative w-full h-auto'>

         {/* navbar */}

        <div className={!navOpen? "flex justify-between w-full p-2 h-auto bg-green-500 sticky top-0 bg-opacity-95":"hidden"}>
          <h1 className='text-3xl w-fit h-fit text-white p-2 rounded-full hover:font-bold transition-all hover:cursor-pointer duration-300'>ActiveX</h1>
          <ul className='hidden md:flex justify-between text-white p-2 rounded-md w-100 text-2xl '>
            <li className='px-2 hover:text-black cursor-pointer'>Home</li>
            <li className='px-2 hover:text-black cursor-pointer'>About</li>
            <li className='px-2 hover:text-black cursor-pointer'>Workout</li>
            <li className='px-2 hover:text-black cursor-pointer'>Shop</li>
            <li className='px-2 hover:text-black cursor-pointer'>Contact</li>
          </ul>
          <button className='block md:hidden text-white font-bold text-xl' onClick={()=>{setNavOpen(true)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"    stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* menu overlay */}

          <div className = {navOpen ? "fixed flex flex-col place-content-center md:hidden top-0 left-0 right-0 bottom-0 backdrop-blur-2xl z-10": "hidden"}>
            <h1 className='fixed top-2 right-0 left-2 bottom-0 text-3xl w-fit h-fit p-3 rounded-full hover:font-bold transition-all hover:cursor-pointer duration-300 bg-green-500 text-white'>ActiveX</h1>
            <button className="fixed md:hidden top-0 left-0 right-0 bottom-0 p-2 z-10" onClick={()=>{setNavOpen(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute w-7 h-7 m-3 top-1 right-1 bg-green-500 text-white ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>                  
            </button>
            <ul className='m-5 justify-between bg-white rounded-md p-15'>
              <li className=' p-5 underline font-bold text-4xl text-green-500 hover:bg-green-500 transition-all duration-300 rounded-md tracking-widest hover:text-white hover:cursor-pointer'>Home</li>
              <li className=' p-5 underline font-bold text-4xl text-green-500 hover:bg-green-500 transition-all duration-300 rounded-md tracking-widest hover:text-white hover:cursor-pointer'>About</li>
              <li className=' p-5 underline font-bold text-4xl text-green-500 hover:bg-green-500 transition-all duration-300 rounded-md tracking-widest hover:text-white hover:cursor-pointer'>Workout</li>
              <li className=' p-5 underline font-bold text-4xl text-green-500 hover:bg-green-500 transition-all duration-300 rounded-md tracking-widest hover:text-white hover:cursor-pointer'>Shop</li>
              <li className=' p-5 underline font-bold text-4xl text-green-500 hover:bg-green-500 transition-all duration-300 rounded-md tracking-widest hover:text-white hover:cursor-pointer'>Contact</li>
            </ul>
          </div>

          

         {/* hero section*/}

        <div className='flex flex-col-reverse md:flex-row place-content-center w-full h-auto p-2 md:p-8 lg:p-12 mb-12 md:mb-0'>
          <div className='flex flex-col w-full h-auto place-content-center text-center md:text-start'>
            <h1 className='text-xl md:text-4xl lg:text-6xl font-bold'>Lead a happy life with <span className='text-green-500 text-bold'>ActiveX</span></h1>
            <p className='text-sm md:text-lg lg:text-2xl py-1 md:py-3 lg:py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur sit aliquid at rerum neque fuga?</p>
            <button className='p-1 md:p-2 text-sm md:text-lg w-1/2 mx-auto md:mx-0 md:w-fit text-white bg-green-500 shadow-xl hover:text-xl hover:shadow-green-400 rounded-sm transition-all duration-300'>REGISTER NOW</button>
          </div>
          <img src="exercise.png" alt="exercise" className='w-auto h-auto md:w-1/2 md:h-auto mx-auto' />
        </div>

       {/* about section */}

       <div className='grid grid-cols-1 md:grid-cols-2 justify-between place-content-center w-full h-auto p-1 md:p-9 lg:p-24 my-24'>
        <img src="exercise1.png" alt="champ" className='w-auto h-auto mx-auto md:w-9/12 md:h-auto lg:w-full lg:h-auto' />
        <div className='flex flex-col w-full h-auto place-content-center p-1 md:p-4 lg:p-8 lg:ml-8 text-black md:text-start'>
          <h1 className='text-xl md:text-4xl lg:text-6xl font-bold'>Who We Are <span className='text-green-500'>?</span></h1>
          <h2 className='text-md md:text-xl lg:text-5xl py-1 md:py-2 lg:py-3'>What We Do? How We Do?</h2>
          <p className='text-sm md:text-lg lg:text-xl mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat modi magni nostrum porro aut dolore saepe ipsum aliquam?</p>
          <button className='p-2 text-lg md:text-xl lg:text-2xl w-auto mx-auto text-white bg-green-500 shadow-xl hover:shadow-green-600 rounded-sm transition-all duration-300'>Contact Us</button>
        </div>
       </div>

       {/* workout plan and diet */}

      <div className='flex flex-col w-full h-auto mx-auto p-1 md:p-12 lg:p-24 my-12'>
        <h1 className='w-full text-xl md:text-3xl lg:text-5xl font-bold pb-2 md:pb-5 lg:pb-9'>Roll With Our <span className='text-orange-600'>Craziest Workout</span> & <span className='text-green-500'>Diet Plan</span></h1>
        <div className='grid grid-cols-1 md:grid-cols-2 place-content-center w-auto h-auto mt-3 md:mt-9'>
          <div className='flex flex-col place-content-center w-1/2 h-auto mx-auto'>
            <img src="workout plan.png" alt="workout plan" className='w-auto h-auto'/>
            <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-orange-600 my-3'>best workout plan</h2>
            <button className='p-2 bg-green-500 text-white text-md md:text-xl shadow-xl transition-all duration-500 hover:shadow-green-700 hover:bg-opacity-90 hover:tracking-widest'>download here</button>
          </div>
          <div className='flex flex-col place-content-center w-1/2 h-auto mx-auto mt-2 md:mt-0'>
            <img src="diet plan.png" alt="diet plan" className='w-auto h-auto' />
            <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-green-500 my-3'>best diet plan ever</h2>
            <button className='p-2 bg-green-500 text-white text-md md:text-xl shadow-xl transition-all duration-500 hover:shadow-green-700 hover:bg-opacity-90 hover:tracking-widest'>download here</button>
          </div>
        </div>
      </div>

       {/* shop */}

       <div className='p-8 mt-9 md:mt-16 flex flex-col mx-auto'>
        <h1 className='text-3xl md:text-5xl font-bold my-3 md:my-9'>Get Busy <span className='text-green-500'>Shoppin</span></h1>
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center mx-auto w-4/5 h-fit '>
          <div className='flex flex-col rounded-md w-full h-fit mx-auto bg-green-500'>
            <img src="supplement.png" alt="supplement" className='w-full h-1/2 mx-auto p-3'/>
            <div className='flex flex-col p-3 bg-black mt-1 text-white'>
              <h1 className='text-xl font-bold'>Lorem, ipsum dolor.</h1>
              <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <button className='p-1 my-1 bg-green-500 mx-auto text-lg rounded-md transition-all duration-500  hover:bg-white hover:text-green-600 hover:font-bold hover:tracking-widest'>Shop Now</button>
            </div>
          </div>
          <div className='flex flex-col rounded-md w-full h-fit mx-auto bg-green-500'>
            <img src="supplement3.png" alt="supplement" className='w-full h-1/2 mx-auto p-3'/>
            <div className='flex flex-col p-3 bg-black mt-1 text-white'>
              <h1 className='text-xl font-bold'>Lorem, ipsum dolor.</h1>
              <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <button className='p-1 my-1 bg-green-500 mx-auto text-lg rounded-md transition-all duration-500  hover:bg-white hover:text-green-600 hover:font-bold hover:tracking-widest'>Shop Now</button>
            </div>
          </div>
          <div className='flex flex-col rounded-md w-full h-fit mx-auto bg-green-500'>
            <img src="supplement4.png" alt="supplement" className='w-full h-1/2 mx-auto p-3'/>
            <div className='flex flex-col p-3 bg-black mt-1 text-white'>
              <h1 className='text-xl font-bold'>Lorem, ipsum dolor.</h1>
              <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <button className='p-1 my-1 bg-green-500 mx-auto text-lg rounded-md transition-all duration-500  hover:bg-white hover:text-green-600 hover:font-bold hover:tracking-widest'>Shop Now</button>
            </div>
          </div>
          <div className='flex flex-col rounded-md w-full h-fit mx-auto bg-green-500'>
            <img src="supplement5.png" alt="supplement" className='w-full h-1/2 mx-auto p-3'/>
            <div className='flex flex-col p-3 bg-black mt-1 text-white'>
              <h1 className='text-xl font-bold'>Lorem, ipsum dolor.</h1>
              <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <button className='p-1 my-1 bg-green-500 mx-auto text-lg rounded-md transition-all duration-500  hover:bg-white hover:text-green-600 hover:font-bold hover:tracking-widest'>Shop Now</button>
            </div>
          </div>
          <div className='flex flex-col rounded-md w-full h-fit mx-auto bg-green-500'>
            <img src="supplement1.png" alt="supplement" className='w-full h-1/2 mx-auto p-3'/>
            <div className='flex flex-col p-3 bg-black mt-1 text-white'>
              <h1 className='text-xl font-bold'>Lorem, ipsum dolor.</h1>
              <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <button className='p-1 my-1 bg-green-500 mx-auto text-lg rounded-md transition-all duration-500  hover:bg-white hover:text-green-600 hover:font-bold hover:tracking-widest'>Shop Now</button>
            </div>
          </div>
          <div className='flex flex-col rounded-md w-full h-fit mx-auto bg-green-500'>
            <img src="supplement2.png" alt="supplement" className='w-full h-1/2 mx-auto p-3'/>
            <div className='flex flex-col p-3 bg-black mt-1 text-white'>
              <h1 className='text-xl font-bold'>Lorem, ipsum dolor.</h1>
              <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <button className='p-1 my-1 bg-green-500 mx-auto text-lg rounded-md transition-all duration-500  hover:bg-white hover:text-green-600 hover:font-bold hover:tracking-widest'>Shop Now</button>
            </div>
          </div>
        </div>
       </div>

       {/* client review */}

      <div className='flex flex-col w-full h-auto mx-auto p-2 my-24 '>
          <h1 className='text-3xl md:text-5xl font-bold mb-3 md:mb-9'>Here are our <span className='text-green-500'>client's review</span></h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full h-auto mx-auto'>
            <div className='w-full h-auto bg-green-400 flex rounded-md p-1'>
              <img src="pngwing.com.png" alt="person" className='bg-white w-1/3 rounded-full mr-2' />
              <div className='flex flex-col text-start place-content-center pl-2 text-white w-full h-auto'>
                <h1 className='text-lg font-bold'>Akash Das</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className='w-full h-auto bg-green-400 flex rounded-md p-1'>
              <img src="pngwing.com (1).png" alt="person" className='bg-white w-1/3 rounded-full mr-2' />
              <div className='flex flex-col text-start place-content-center pl-2 text-white w-full h-auto'>
                <h1 className='text-lg font-bold'>Mitu Das</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
            <div className='w-full h-auto bg-green-400 flex rounded-md p-1'>
              <img src="pngwing.com (2).png" alt="person" className='bg-white w-1/3 rounded-full mr-2' />
              <div className='flex flex-col text-start place-content-center pl-2 text-white w-full h-auto'>
                <h1 className='text-md font-bold'>Mukta Das</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
      </div>

      {/* contact page */}

      <div className='grid grid-cols-1 md:grid-cols-2 md:w-full lg:w-8/12 mx-auto p-6 md:p-12 m-24 h-auto'>
        <div className='flex flex-col bg-green-200 p-3 rounded-t-xl md:rounded-t-none md:rounded-l-xl'>
          <img src="faq.png" alt="" className='h-full w-full'/>
          <h1 className='text-xl lg:text-2xl font-bold '>Still Confused?</h1>
          <h2 className='text-md'>Check Us Here..</h2>
        </div>
        <form action="" className='flex flex-col p-3 md:p-5 bg-green-500 rounded-b-xl md:rounded-b-none md:rounded-r-xl'>
          <h1 className='text-lg md:text-2xl font-bold text-white m-3'>Enquire Here</h1>        
          <input type="text" placeholder="Enter your FullName" className='p-1 md:p-3 my-1 md:my-2 rounded-sm md:rounded-md' />
          <input type="text" placeholder="Enter your Email" className='p-1 md:p-3 my-1 md:my-2 rounded-sm md:rounded-md' />
          <textarea type="text" rows={8} placeholder="Enter your Queries" className='p-1 md:p-3 my-1 md:my-2 rounded-sm md:rounded-md' />
          <button className='bg-white p-1 md:p-2 mx-auto text-md md:text-xl transition-all duration-300 hover:bg-yellow-400 hover:tracking-widest hover:text-green-500 hover:font-bold rounded-md'>Contact Us</button>
        </form>
      </div>

      {/* footer */}

      <div className='navbar flex justify-between w-full p-2 bg-green-500'>
        <div className='text-white text-start'>
          <h1 className='text-md md:text-xl w-fit h-fit'>©Copyright 2022 ActiveX.</h1>
          <p className='text-sm md:text-lg '>Some Rights Reserved.</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2'>
          <img src="facebook.png" alt="" className='w-6 md:w-12 h-fit bg-blue-600 rounded-full hover:cursor-pointer' />
          <img src="instagram.png" alt="" className='w-6 md:w-12 h-fit bg-gradient-to-tr from-yellow-300 via-pink-400 to-indigo-500 rounded-full hover:cursor-pointer' />
          <img src="youtube.png" alt="" className='w-6 md:w-12 h-fit bg-red-500 rounded-full hover:cursor-pointer' />
          <img src="twitter.png" alt="" className='w-6 md:w-12 h-fit bg-blue-400 rounded-full hover:cursor-pointer' />
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
