import { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
    const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
    const [count, setCount] = useState(0)

    const onButtonClick = color => () => {
        setBackgroundColor(color);
        setCount(count + 1)
    };

    return (
        <div
            className='App'
            style={{
                backgroundColor,
            }}
        >
            <h1>Background color has been changed on the page {count} times</h1>
            {COLORS.map(color => (
                <button
                    type='button'
                    key={color}
                    onClick={onButtonClick(color)}
                    className={backgroundColor === color ? 'selected' : ''}
                >
                    {color}
                </button>
            ))}
        </div>
    );
}

export default App;

// // import { useState } from 'react';
// import Greeting from './Greeting.jsx';
// import Animals from './Animals.jsx';

// import './App.css';

// function App() {
//     const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];

//     return (
//         <>
//             <Greeting name='User' />
//             <Animals animals={animals} />
//         </>
//     );
// }

// export default App;
