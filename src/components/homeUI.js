import React from 'react';
import '../components/styles/style.css';

const MainHomePage = props => {
    return (
        <>
            <div className="circle-shape">
                <img src={props.imgsrc} className="profile-pic"
                />
            </div>
        </>
    );
}
export default MainHomePage;