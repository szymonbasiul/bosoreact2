import React from "react";
import RegisterLogin from "./memoryComponents/RegisterLogin";
import './MemoryParent.css'

export default function MemoryParent(){



    return(<>
    <div className="gameContainerCurrent">
        <RegisterLogin/>
    </div>
    </>)
}
