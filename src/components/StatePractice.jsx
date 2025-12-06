import { useState } from 'react';

const StatePractice = () => {
    const [message, setMessage] = useState("press a button");

    return <div className='flex flex-col m-2 justify-around items-center'>
        {message}
        <div className='flex justify-around p-4 '>
            <button className='m-2 p-2 bg-cyan-200 rounded-md' onClick={() => setMessage("hello")} >click me</button>
            <button className='m-2 p-2 bg-cyan-200 rounded-md' onClick={() => setMessage("bye")} >click me</button>
        </div>
    </div>
}

export default StatePractice;
