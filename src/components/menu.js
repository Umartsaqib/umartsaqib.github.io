import React from 'react';

const Menu = () => {
  return (
    <div className="h-screen flex flex-col space-y-4 p-5 justify-end">
        <p className='text-white'>konten kiri</p> 
      <button className="text-white bg-[#302F2F] p-2 rounded">Dashboard 🖥</button>
      <button className="text-white bg-[#302F2F] p-2 rounded">Profile 👤</button>
      <button className="text-white bg-[#302F2F] p-2 rounded">Education 🎓</button>
      <button className="text-white bg-[#302F2F] p-2 rounded">Projects 🗂</button>
      <button className="text-white bg-[#302F2F] p-2 rounded">Experience ⏱</button>
    </div>
  );
};

export default Menu;
