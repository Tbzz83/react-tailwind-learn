import img from '../assets/Westdragn.webp'

const Dragons = (props) => {
    const count = 3;
    const dragonsArray = Array.from({ length: count});
    console.log(dragonsArray);

    return (
        <div className='flex h-120 p-8 m-2 border-2 justify-center items-center'>
            <DragonImg />
            <DragonImg />
            <DragonImg />
        </div>
    );
}

const DragonImg = (props) => {
    return <div >
        <img src={img} style={{ height: 200 }} />
    </div>
};

export default Dragons;
