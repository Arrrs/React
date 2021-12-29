import React, {useState} from 'react';

function App() {
    let [clicks, updateClicks] = useState(0);

    return (
        <div>
            <span onClick={() => updateClicks(clicks + 1)}> {clicks} </span>
        </div>
    )
}
export default App;