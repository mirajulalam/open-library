import React from 'react';
import title from '../assets/ia-logo.svg';

const TopNavbar = () => {
    return (
        <div className="navbar bg-black text-white lg:px-28">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl"><img className='w-40' src={title}/></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><button className="btn btn-outline btn-black gap-2">
  Button
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
</button></li>
    </ul>
  </div>
</div>
    );
};

export default TopNavbar;