import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCustomer, editCustomer } from '../slices/customerSlices';

const Home = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [clickedIndex, setClickedIndex] = useState(null);
    const [show, setShow] = useState(false);

    const handleShow = (index, nameClicked, emailClicked, phoneClicked) => {
        setClickedIndex(index);
        setName(nameClicked);
        setEmail(emailClicked);
        setPhone(phoneClicked);
        setShow(true);
    }

    const customers = useSelector((state) => state.customers);
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(deleteCustomer(index));
        setClickedIndex(null);
        setShow(false);
        setName("");
        setEmail("");
        setPhone("");
    }

    const handleEdit = (index) => {
        dispatch(editCustomer({ index, name, email, phone }));
        setClickedIndex(null);
        setShow(false);
        setName("");
        setEmail("");
        setPhone("");
    };

    return (
        <div className="home flex flex-row flex-wrap h-full overflow-scroll pt-4 px-20">
            {customers.map((element, index) => {
                let currentIndex = index;

                return (
                    <div key={element.id} className="h-fit m-5 w-fit p-4 flex flex-col justify-center items-start border rounded-3xl bg-white  relative">
                        <p className="font-serif m-1 p-1 text-base font-semibold">{element.name}</p>
                        <p className="m-1 p-1 text-base font-thin text-slate-600">{element.email}</p>
                        <p className="m-1 p-1 text-base font-thin text-slate-600">{element.phone}</p>
                        <button onClick={() => handleShow(currentIndex, element.name, element.email, element.phone)} className="absolute -bottom-3 hover:scale-110 cursor-pointer border-b-2 border-t-0 border-x-0 rounded-full place-self-end bg-white h-8 w-8 flex justify-center items-center">
                            <img className="hover:scale-110" width="25" height="25" src="https://img.icons8.com/ios/50/edit--v1.png" alt="edit--v1" />
                        </button>
                        {show && clickedIndex === currentIndex &&
                            <div className="fixed border top-0 left-0 flex justify-center items-center h-screen w-screen bg-transparent">
                                <form className="fixed border bg-slate-100 p-5 rounded-2xl w-1/3" >
                                    <button onClick={() => setClickedIndex(null)} type="button" className="absolute border rounded-full -top-0 -left-0 w-5 h-5 m-2 flex justify-center items-center bg-red-500 hover:scale-105 text-slate-400 font-extralight"></button>
                                    <div className="flex justify-between m-2 h-9 w-full">
                                        <label >Name:</label>
                                        <input className="w-2/3 p-2 rounded-xl"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="flex justify-between m-2 h-9 w-full">
                                        <label >Email:</label>
                                        <input className="w-2/3 p-2 rounded-xl"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex justify-between m-2 h-9 w-full">
                                        <label >Phone Number:</label>
                                        <input className="w-2/3 p-2 rounded-xl"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                    <button onClick={() => handleEdit(currentIndex)}
                                        type="button"
                                        className="font-serif text-white font-semibold w-11/12 place-self-center hover:scale-x-105 cursor-pointer m-4 p-4 bg-primary rounded-2xl">Submit</button>
                                    <button onClick={() => handleDelete(currentIndex)}
                                        type="button"
                                        className="font-serif text-white font-semibold w-11/12 place-self-center hover:scale-x-105 cursor-pointer m-4 p-4 bg-red-500 rounded-2xl">Delete</button>
                                </form>
                            </div>}
                    </div>
                );
            })}
        </div>
    );
}

export default Home;
