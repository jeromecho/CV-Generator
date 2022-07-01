import React from 'react';

interface Props {
    // Functionally unnecessary, but good typing practice
}

const Header: React.FunctionComponent<Props> = (props) => {
    return (
        <header>
            <div id='title-info-container'>
                <h1>CV</h1>
                <div className='bar'></div>
                <p>Performant resumes, on demand</p>
            </div>
       </header>
    );
}

export default Header;
