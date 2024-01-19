import React from "react";
import photo from '../../assets/icons/photo.svg';
import responsivePhoto from '../../assets/icons/responsive-photo.svg';
import responsivePhotoShadow from '../../assets/icons/responsive-photo-shadow.svg';
import { IconBox }  from '../../assets/icons/box';
import { IconLines } from '../../assets/icons/lines';
import './index.css';


export const LeftLayout = () => {
    return (
        <div className="left-layout">
            <div  className="photo"><img src={photo}/></div>
            <div  className="responsive-photo"><img src={responsivePhoto}/></div>
            <div  className="responsive-photo-shadow"><img src={responsivePhotoShadow}/></div>
            <div className="box"><IconBox /></div>
            <div className="lines"><IconLines /></div>
        </div>


    
    )
}