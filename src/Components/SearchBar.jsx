import React from "react";

const SearchBar = () => {
    return (
        <div className="flex w-full h-14 p-2 border bg-white" >
            <div className="flex items-center w-3/4 border rounded p-2 h-fit">
                <button><img className="mr-2" width="25" height="25" src="https://img.icons8.com/tapes/40/experimental-search-tapes.png" alt="experimental-search-tapes" /></button>
                <input className="font-light text-sm h-full items-center flex w-full border-white placeholder:text-xs focus:outline-none" placeholder="Type to search..." />
            </div>

            <div className="w-1/4 flex">
                <div className="flex items-center w-1/2 h-fit">
                    <button className="m-2 hover:bg-gray-100 outline-none active:opacity-75 h-full w-full flex justify-center items-center rounded-full">
                        <img className="m-1" width="20" height="20" src="https://img.icons8.com/ios/50/settings--v1.png" alt="settings--v1" />
                    </button>

                    <button className="m-2 hover:bg-gray-100 outline-none active:opacity-75 h-full w-full flex justify-center items-center rounded-full">
                        <img className="m-1" width="20" height="20" src="https://img.icons8.com/ios/50/comments--v1.png" alt="comments--v1" />
                    </button>

                    <button className="m-2 hover:bg-gray-100 outline-none active:opacity-75 h-full w-full flex justify-center items-center rounded-full">
                        <img className="m-1" width="20" height="20" src="https://img.icons8.com/ios/50/appointment-reminders--v1.png" alt="appointment-reminders--v1" />
                    </button>
                </div>
                <div className="w-1/2 flex flex-row">
                    <div className="flex flex-col mx-px">
                        <div className="flex flex-row">
                            <p className="text-xs font-light mx-px">Rishabh</p>
                            <p className="text-xs font-light mx-px">Raghav</p>
                        </div>
                        <p className="text-xs font-thin mt-1 text-gray-950">Developer</p>
                    </div>
                    <img className="rounded-full mx-px" src="https://avatars.githubusercontent.com/u/47117397?s=400&u=7001a5d955d7c2584b2f5d0acf049e53e3ea996f&v=4" alt="dp" />
                </div>
            </div>

        </div>
    );
}

export default SearchBar;