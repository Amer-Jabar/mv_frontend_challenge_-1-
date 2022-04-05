import { Fragment, useRef } from "react";

const login = (loginButtonRef, setViewState) => {
    loginButtonRef.current.style.backgroundColor = '#93c5fd';
    loginButtonRef.current.innerText = 'LOGGING IN...';

    setTimeout(() => setViewState('account'), 500);
}

const Login = ({ setViewState }) => {
    const loginButtonRef = useRef();

    return (
        <Fragment>
            <h1
            class='mb-10 text-4xl font-bold text-blue-500'
            >Access Your Bank Account!</h1>
            <button
            class='w-max bg-blue-500 px-16 py-5 text-white duration-300 hover:bg-blue-700 rounded'
            id="login-button"
            ref={loginButtonRef}
            onClick={() => login(loginButtonRef, setViewState)}
            >LOGIN</button>
        </Fragment>
    )
}

export default Login;