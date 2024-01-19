import React from "react";
import {RightLayoutItem}   from '../right-layout/right-layout-item.jsx'
import './index.css';


export const RightLayout = () => {
    return (
        <div className="container">
                <p className="header">FAQ</p>
            <div className="container-item-1">
                <RightLayoutItem 
                title='How many team members can I invite?'
                description={'No more than 2GB. All files in your account must fit your allotted storage space.'}/>
                <RightLayoutItem 
                title='How many team members can I invite?'
                description={'No more than 2GB. All files in your account must fi'}/>
                <RightLayoutItem 
                title='How many team members can I invite?'
                description={'No more than 2GB. All files in your account must fi'}/>
                <RightLayoutItem 
                title='How many team members can I invite?'
                description={'No more than 2GB. All files in your account must fi'}/>
                <RightLayoutItem 
                title='How many team members can I invite?'
                description={'No more than 2GB. All files in your account must fi'}/>
            </div>
        </div>
    )
}