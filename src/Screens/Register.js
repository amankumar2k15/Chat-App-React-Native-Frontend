import Auth from "../Components/Auth"


const Register = () => {
    return (
        <Auth forgetPassword={false} headingText="Sign Up" register={true} buttonText="Sign Up" bottomText="Login here" />
    )
}

export default Register
