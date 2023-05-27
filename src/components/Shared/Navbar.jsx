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
        <li><NavLink  to='/'>Home</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li><NavLink to='/allToys'>All Toys</NavLink></li>
        {
            user && <>
                <li><NavLink to='/myToys'>My Toys</NavLink></li>
                <li><NavLink to="/addAToy">Add A Toy</NavLink></li>
            </>
        }
    </>
    return (
        <div>
            <div className="navbar text-white rounded mb-14 bg-blue-900">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2  rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <a className="normal-case text-xl"><img className='w-20 h-14 rounded-full' src="https://i.ibb.co/WpBWv4Q/hero.png" alt="" /></a>
                        <h2 className='font-bold text-2xl'>Super Heros</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div>
                        {
                            user ?
                                <button onClick={handleLogout} className='btn btn-black text-white'><Link>Log Out</Link></button>
                                :
                                <button className='btn btn-black text-white'><Link to='/login'>Login</Link></button>
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