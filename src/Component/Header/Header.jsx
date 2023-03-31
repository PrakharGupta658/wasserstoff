import React from 'react';

import Logo from "./logo.png";
import "./Header.css";
import {UserOutlined , UnorderedListOutlined} from '@ant-design/icons';
import SearchInput from '../AntComponents/SearchInput';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='container'>
            <div className='left-section'>
                <div className='logo'>
                   <img src={Logo} alt='logo' style={{width:"45px" ,fontFamily: "Roboto,sansSerif" }}/>
                </div>
                <div className='company-name'>
                    WASSERSTOFF
                </div>
            </div>
            <div className='search-section'>
                <SearchInput/>
            </div>
            <div className='navigation'>
                <NavLink className="navigation__link" to='/statics'>Statistics</NavLink>
                <NavLink className="navigation__link" to="/">Overview</NavLink>
                <NavLink className="navigation__link" to="dashboard">Dashboard</NavLink>
                <NavLink className="navigation__link" to='#'>Analytics</NavLink>
            </div>
            <div className='right-section'>
                <div className='user'>
                <UserOutlined />
                </div>
                <div className='option'>
                <UnorderedListOutlined />
                </div>
            </div>
        </div>
    );
}

export default Header;