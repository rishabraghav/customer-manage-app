import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../slices/customerSlices";

const Customers = ({ setCustomers }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const handleAddCustomers = (event) => {
        event.preventDefault();
        const newCustomer = {
            name: name,
            email: email,
            phone: phone
        }

        console.log(newCustomer);
        dispatch(addCustomer(newCustomer))

        setName("");
        setEmail("");
        setPhone("");
    }

    return (
        <div className="flex flex-wrap h-full w-full justify-center overflow-scroll pt-4 px-20">
            <form onSubmit={handleAddCustomers} className="flex flex-col h-fit bg-white border rounded-3xl w-3/4">
                <div className="flex flex-row m-2 p-1 h-fit">
                    <label className="m-2 p-3 font-bold w-1/2 flex">Name:</label>
                    <input className="border bg-slate-50 w-full text-base font-normal text-slate-700 p-3 rounded-2xl"
                        
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    required
                        />
                </div>
                <div className="flex flex-row m-2 p-1 h-fit">
                    <label className="m-2 p-3 font-bold w-1/2 flex">Email:</label>
                    <input className="border bg-slate-50 w-full text-base font-normal text-slate-700 p-3 rounded-2xl"
                        
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-row m-2 p-1 h-fit">
                    <label className="m-2 p-3 font-bold w-1/2 flex">Phone Number:</label>
                    <input className="border bg-slate-50 w-full text-base font-normal text-slate-700 p-3 rounded-2xl"
                        
                        type="Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <button type="submit" className="font-serif text-white font-semibold w-11/12 place-self-center hover:scale-x-105 cursor-pointer m-4 p-4 bg-primary rounded-2xl">Submit</button>
            </form>
        </div>

    );
}


export default Customers;