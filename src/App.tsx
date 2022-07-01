import React, { useState } from 'react';
import Header from './components/Header.tsx'
import Main from './components/Main.tsx';
import Footer from './components/Footer.tsx';

interface Props {
    // Typing practice
}

const App: React.FunctionComponent<Props> = (props) => {
   return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default App;
