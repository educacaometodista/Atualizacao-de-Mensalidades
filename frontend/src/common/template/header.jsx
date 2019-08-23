import React from 'react'

export default props =>(
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><i className='fa fa-money'></i></span>
            <span className='logo-lg'>
                <b> Educação</b> Metodista
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
        </nav>
    </header>
)