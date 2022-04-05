import { useState } from "react";

import Login from '../login/Login';
import Account from '../account/Account';

const Main = () => {

    const [viewState, setViewState] = useState('login');

    return (
        <div class='w-full h-screen p-3'>
        <div class='w-full h-full flex flex-col justify-center items-center bg-sky-50 rounded'>
        {
            viewState === 'login'
            ? (
                <Login
                setViewState={setViewState}
                ></Login>
            ) : (
                <Account></Account>
            )
        }
        </div>
        </div>
    )
}

export default Main;