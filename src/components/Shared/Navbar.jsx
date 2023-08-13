import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .then(error => console.log(error))
    }

    const navItem = <>
        <li><NavLink  className={({ isActive }) => isActive ? "text-black" : ""} to='/'>Home</NavLink></li>
        <li><NavLink  className={({ isActive }) => isActive ? "text-black " : ""} to='/blogs'>Blogs</NavLink></li>
        <li><NavLink  className={({ isActive }) => isActive ? "text-black" : ""} to='/allToys'>All Toys</NavLink></li>
        {
            user && <>
                <li><NavLink to='/myToys'>My Toys</NavLink></li>
                <li><NavLink to="/addAToy">Add A Toy</NavLink></li>
            </>
        }
    </>
    return (
        <div className='bg-orange-50'>
            <div className="navbar text-orange-600 rounded max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2  rounded-box w-52 bg-orange-400 font-bold">
                            {navItem}
                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <a className="normal-case text-xl"><img className='w-14 h-14 rounded-full' src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRveXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" /></a>
                        <h2 className='font-bold text-2xl'>Super Heros</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div>
                        {
                            user ?
                                <button onClick={handleLogout} className='bg-orange-500 px-3 py-2 rounded text-white font-bold'><Link>Log Out</Link></button>
                                :
                                <button className='bg-orange-500 px-3 py-2 rounded text-white font-bold'><Link to='/login'>Login</Link></button>
                        }
                    </div>
                    {
                        user ?
                            <label tabIndex={0} className="btn btn-black btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img title={user?.displayName} src={user?.photoURL} />
                                </div>
                            </label>
                            : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;