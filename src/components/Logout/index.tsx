'use client'

import { LogOutProp } from "@/utils/types"


const LogOut = ({click}:LogOutProp) => {

    return (   
        <button className="m-4 p-2 rounded-2xl cursor-pointer bg-blue-600 text-white font-bold  text-xl md:text-2xl" onClick={click}>Logout</button>
    )
}

export default LogOut