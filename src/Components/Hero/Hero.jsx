import React from 'react';
import herobg from '../../assets/Rectangle2.png';

const Hero = () => {
  return (
    <div
      className="w-full h-[700px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className='w-1/2'>

      </div>
      <div className='w-1/2 flex flex-col space-y-6 '>
        <h1 className='text-5xl'>Would you like a Cup of Delicious Coffee?</h1>
        <p className='Raleway'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
      <button className="btn btn-soft font-normal btn-warning w-32 text-[#242222] bg-[#E3B577] hover:text-white hover:bg-[#E3B577]/80 text-2xl">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
