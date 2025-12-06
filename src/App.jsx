import ConditionalRender from "./components/ConditionalRender";
import Dragons from "./components/Dragon";
import StatePractice from "./components/StatePractice";

const PaddingAndMargin = (props) => { 
    const {children} = props;
    const borderType = "border-2";
    const someText = "first";

    return <div>
        <button className={`${borderType} border-green-600 text-green-400 px-8 m-4 rounded-md py-2
            cursor-pointer`}>
            {children}
        </button>
        <button className="rounded-lg bg-sky-400 text-white px-10 py-4 text-3xl m-4">
            second
        </button>
        <div className="border-2 p-2 m-2 border-red-500">
            hello
        </div>
        <div className="border-2 px-2 m-2 border-blue-500">
            goodbye
        </div>
    </div>
};

const Tailwind = (props) => {
    return <div>
        <div className="text-rose-300 bg-red-500">
            one
        </div>
        <div className="text-slate-400 border-2 border-black">
            two
        </div>
    </div>
}

const Box = (props) => {
    const {label, textColor, bgColor} = props;

    console.log(label);

    return <div style={{
        color: textColor,
        background: bgColor,
    }}
    >
        I am a box
    </div>
}

const Message = (props) => {
    const {text, color} = props;
    console.log(text);
    console.log(color);

    return <div>
        i am a message
    </div>
};

const App = () => {
    return <div>
        <PaddingAndMargin>hello</PaddingAndMargin>
        <Tailwind />
        <Box label="some label" textColor="White" bgColor="CornflowerBlue"/> 
        <Message 
            text="this is my first prop" 
            key="value"/>
        <Dragons />
        <StatePractice />
        <ConditionalRender />
    </div>
};

export default App
