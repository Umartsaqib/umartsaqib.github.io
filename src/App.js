import React from 'react';
import Menu from './components/menu'; 
import MidContent from './components/content'; 
import Umarphoto from './assets/Umar-img.jpg'; 
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <div className="flex h-screen"> 
      <div className="flex flex-col justify-end">
        <Menu />
      </div>
      <div className="flex-grow p-5 overflow-y-auto">
        <div className="w-1/3 p-5 absolute right-0 top-1/2 transform -translate-y-1/2 h-auto z-50">
          <p className="text-2xl font-bold text-white">Konten kanan</p>
          <div className='flex justify-center'><img className="w-full h-52 object-cover rounded-lg" src={Umarphoto} alt="Umar Tsaqib" /></div>
          <p className="text-[#8C8B8B] font-bold text-2xl py-4">Welcome To My Portfolio Website</p>
          <p className="text-[#8C8B8B] pb-4">
          Active Information Systems student with internship experience at Global Loyalty Indonesia, contributing to the development of the Alfagift app. Recently graduated from a full-stack software engineering bootcamp. Open to collaboration opportunities and continuously learning to enhance technical and soft skills.
          </p>
          <div className="space-x-4 justify-end">
            <button className="text-white bg-[#302F2F] p-5 rounded"><FaLinkedin/></button>
            <button className="text-white bg-[#302F2F] p-5 rounded"><FaInstagramSquare /></button>
            <button className="text-white bg-[#302F2F] p-5 rounded"><MdEmail /></button>
            <button className="text-white bg-[#302F2F] p-5 rounded"><FaGithubSquare/></button>
          </div>
        </div>
          <MidContent/>
            <div className="absolute right-0 top-0">
              <iframe 
                src="https://giphy.com/embed/J4DjJPo55t77lTQX5G" 
                width="280" 
                height="280" 
              ></iframe>
            </div>
      </div>
    </div>
  );
}

export default App;
