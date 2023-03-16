import React from 'react';
import '../styles/header.css';

const Header = () =>{

    const toggleDarkMode = () =>{
        document.body.classList.toggle('dark');
        localStorage.setItem('dark-mode', document.body.classList.contains('dark') ? 'true' : 'false');
    }
    if(localStorage.getItem('dark-mode') === 'true') document.body.classList.add('dark');
    else document.body.classList.remove('dark');

    return(
        <header className='header'>
            <h1 className='header__title'>Traductor de sistemas numéricos</h1>
            <div className='header__switch-dark' id='switch-dm' onClick={toggleDarkMode}>
                <i className="fa-regular fa-moon"></i>
                <i className="fa-regular fa-sun"></i>
                <div className='header__switch-circle'></div>
            </div>
        </header>
    );
}

export default Header;