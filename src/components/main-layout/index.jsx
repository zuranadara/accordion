import React from "react";
import { RightLayout } from '../right-layout';
import { LeftLayout } from '../left-layout';
import './index.css';


export const MainLayout = () => {
    return (
        <div className="main-box">
            <LeftLayout />
            <RightLayout />
        </div>
    )
}