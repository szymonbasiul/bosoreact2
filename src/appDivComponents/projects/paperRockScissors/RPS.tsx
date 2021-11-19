import React, { useState, useEffect, FC } from 'react';
import RPS_gui from './RPS_gui';
import './RPS.css';

const RPS: FC = () => {
    return (
        <>
        
        <div className="rpsContainer">
        <RPS_gui />
        </div>
        </>
        
    )


}

export default RPS;