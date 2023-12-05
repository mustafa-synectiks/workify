const Signin = (props) => {
    const { btnName } = props;
    return (
        <>

            <a href="#"><button className=" bg-blue-500 w-28 h-10 border rounded-sm text-white">{btnName}</button></a>
        </>
    );
};

export default Signin;