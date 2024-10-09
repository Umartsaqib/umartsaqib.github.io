import React from 'react';
import Sertif from '../assets/sertif-1.jpg'; 


const Content = () => {
  return (
    <div className="w-2/3 p-5 pl-0 pr-20">
          <p className="text-2xl font-bold text-white">Konten tengah</p>
        <div className="space-y-4 p-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="relative flex flex-row my-6 bg-[#302F2F] shadow-sm border border-[#302F2F] rounded-lg w-auto space-y-4 p-4">
            <div className="w-1/3 pr-4 relative">
              <img 
                className="rounded-md object-cover h-full w-full absolute top-[-25px] left-[-20px] z-10 transform scale-105" 
                src={Sertif} 
                alt="card-image" 
              /> 
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <p className="text-white text-xl font-bold mb-2">
                  Full Stack Software Engineering (Revou)
                </p>
                <p className="text-[#8C8B8B] leading-normal font-light">
                  The place is close to Barceloneta Beach and bus stop just 2 min by walk
                  and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                </p>
              </div>
              <div className="mt-4 self-end">
                <button className="rounded-md bg-[#8C8B8B] py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-[#8C8B8B] focus:shadow-none active:bg-[#8C8B8B] hover:bg-[#8C8B8B] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
