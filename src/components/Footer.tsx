import React from 'react';
import GITHUBLOGO from '../img/github.png';

interface Props {
    // Functionally unnecessary, but good typing practice
}

const Footer: React.FunctionComponent<Props> = (props) => {
    return (
        <footer>
            <p>Profesionally crafted by Cho Industries</p>
            <a href='https://www.github.com/jeromecho'
                style={{
                }}>
                    <div style= {{                        
                        backgroundImage: `url(${GITHUBLOGO})`,
                        backgroundSize: 'contain',
                        height: '1.8rem',
                        width: '1.8rem',
                    }}>
                    </div>
            </a>
       </footer>
    );
}


export default Footer;
