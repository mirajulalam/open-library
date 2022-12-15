import React from 'react';
import library from '../assets/openlibrary-logo-tighter.svg';
import { AiOutlineSearch } from 'react-icons/ai';


const Navbar = () => {
  const Items =<>
    <li><a>My Books</a></li>
    <li tabIndex={0}>
        <a>
          Browse
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a href='https://openlibrary.org/subjects'>Subject</a></li>
          <li><a href='https://openlibrary.org/trending'>Trending</a></li>
          <li><a href='https://openlibrary.org/explore'>Library Explorer</a></li>
          <li><a href='https://openlibrary.org/treding'>Trending</a></li>
          <li><a href='https://openlibrary.org/lists'>Lists</a></li>
          <li><a href='https://openlibrary.org/collections'>Collections</a></li>
          <li><a href='https://openlibrary.org/k-12'>k-12 student Library</a></li>
          <li><a href='https://openlibrary.org/random'>Random Book</a></li>
          <li><a href='https://openlibrary.org/advancedsearch'>Advanced Search</a></li>
        </ul>
      </li>
      
            <div className="relative flex items-center">
              <AiOutlineSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
              <input
                type="search"
                list="mylist"
                placeholder="UX design"
                className="input input-bordered w-full max-w-xs pl-10 pr-2"
              />
            </div>
            <datalist id='mylist'>
                <option value="one"></option>
            </datalist>
        <li><a  href="https://openlibrary.org/account/login">Log In</a></li>
        <li><a href='https://openlibrary.org/account/create' className='btn-secondary text-white font-semibold'>Sign Up</a></li>
  </>
    return (
        <div className="navbar lg:px-28">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {Items}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img className='w-40' src={library}/></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {Items}
    </ul>
  </div>
</div>
    );
};

export default Navbar;