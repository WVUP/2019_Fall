import React from 'react';

function Header(){
    return(
        <header style={headerStyle}>
            <h1>My Todo List:</h1>
        </header>
    )
}

const headerStyle = {
    background: '#fff994',
    color: '#000',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Courier'
}

export default Header;