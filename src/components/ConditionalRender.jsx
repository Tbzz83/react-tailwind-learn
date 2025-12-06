import { useState } from "react";

const WidgetOne = () => {
    const [showIcon, setShowIcon ]= useState(false);
    return <div className="bg-green-100 border border-green-300 p-4 rounded-lg m-4 flex flex-col items-center">
        { showIcon ? <i className="fa-solid fa-star text-teal-500 text-3xl mb-4"></i>
 : null}
                <button onClick={() => setShowIcon(!showIcon)} className="cursor-pointer px-4 py-2 bg-teal-500 text-white rounded-full">click me</button>
    </div>
}

const ConditionalRender = () => {

    return <div className="flex flex-col items-center"> 
        <WidgetOne/>
    </div>
}

export default ConditionalRender;
