import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../../redux/balanceSlice";

const Account = () => {

    const balance = useSelector(state => state.balance);
    const [form, setForm] = useState({
        deposit: false,
        withdraw: false
    })
    const [userId, setUserId] = useState(null);
    const [balanceValueChange, setBalanceValueChange] = useState(0);
    
    const dispatch = useDispatch();

    useEffect(() => setUserId(crypto.randomUUID()), [])
    useEffect(() => {}, [form])

    return (
        <div class='w-full h-full p-20 flex flex-col justify-center items-center'>
            {
                (form.deposit || form.withdraw)
                ? <div class={'z-20 duration-300 w-full h-full absolute backdrop-blur-sm'}></div>
                : <></>
            }
            <img
            class='w-40 border-2 border-slate-200 rounded-full'
            src="https://media.istockphoto.com/vectors/profile-picture-vector-illustration-vector-id587805156?k=20&m=587805156&s=612x612&w=0&h=Ok_jDFC5J1NgH20plEgbQZ46XheiAF8sVUKPvocne6Y="
            alt="User Profile"
            />
            <h1 class='my-10 text-xl'>User ID: { userId }</h1>
            <h4 class='my-5 text-xl bg-orange-100 p-4 rounded-lg font-bold'>User Balance: { balance }.00$</h4>
            <section class='z-10'>
                <button class='mx-2 py-3 px-8 bg-green-500 duration-300 rounded-lg text-white hover:bg-green-700'
                onClick={() => {
                    setBalanceValueChange(0);
                    if ( !form.deposit && !form.withdraw )
                        setForm({
                        ...form,
                        deposit: true
                    })
                }}
                >Deposit</button>
                <button class='mx-2 py-3 px-8 bg-yellow-500 duration-300 rounded-lg text-white hover:bg-yellow-700'
                onClick={() => {
                    setBalanceValueChange(0);
                    if ( !form.deposit && !form.withdraw )
                        setForm({
                        ...form,
                        withdraw: true
                    })
                }}
                >Withdraw</button>
            </section>
            <section class='fixed z-20 rounded-lg overflow-hidden'>
                {
                    form.deposit ? (
                        <div class='p-5 bg-gray-300 flex flex-col items-center'>
                            <label class='m-2'>Deposit:</label>
                            <input
                            class='p-2 m-1'
                            type="text"
                            placeholder="20$"
                            onChange={e => setBalanceValueChange(e.target.value)}
                            />
                            <button
                            class='m-5 bg-cyan-50 px-8 py-3 rounded-lg'
                            onClick={() => {
                                dispatch(deposit(Number(balanceValueChange)))
                                setForm({
                                    ...form,
                                    deposit: false
                                })
                            }}
                            >Deposit Balance</button>
                            <button
                            class='bg-red-100 px-5 py-2 rounded-lg'
                            onClick={() => setForm({
                                ...form,
                                deposit: false
                            })}
                            >Close deposit</button>
                        </div>
                    ) : <></>
                }
                {
                    form.withdraw ? (
                        <div class='p-5 bg-gray-300 flex flex-col items-center'>
                            <label class='m-2'>Withdraw:</label>
                            <input
                            class='p-2 m-1'
                            type="text"
                            placeholder="20$"
                            onChange={e => setBalanceValueChange(e.target.value)}
                            />
                            <button
                            class='m-5 bg-cyan-50 px-8 py-3 rounded-lg'
                            onClick={() => {
                                dispatch(withdraw(Number(balanceValueChange)))
                                setForm({
                                    ...form,
                                    withdraw: false
                                })
                            }}
                            >Withdraw Balance</button>
                            <button
                            class='bg-red-100 px-5 py-2 rounded-lg'
                            onClick={() => setForm({
                                ...form,
                                withdraw: false
                            })}
                            >Close withdraw</button>
                        </div>
                    ) : <></>                    
                }
            </section>
        </div>
    )
}

export default Account;