// import { useState } from 'react';
import Greeting from './Greeting.jsx';
import Animals from './Animals.jsx';

import './App.css';

function App() {
    const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];

    return (
        <>
            <Greeting name='User' />
            <Animals animals={animals} />
        </>
    );
}

export default App;
