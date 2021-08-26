import React, { useState } from 'react';
import caseIcon from '../../common/assets/icons/case.png';
import clockIcon from '../../common/assets/icons/clock.png';
import mapPointerIcon from '../../common/assets/icons/mapPointer.png';
import zoomIcon from '../../common/assets/icons/zoom.png';
// fake user pictures
import user1 from '../../common/assets/images/user1.jpg';
import user2 from '../../common/assets/images/user2.png';
import user3 from '../../common/assets/images/user3.jpg';
import './cardStyles.css';

const Card = () => {
    const [ isCardClicked, setIsCardClicked ] = useState(false);
    const fakeUsers = [
        {id: 1,name: "person name 1", img: user1},
        {id: 12,name: "person name 2", img: user2},
        {id: 51,name: "person name 3", img: user3},
        {id: 21,name: "person name 4", img: user3},
        {id: 31,name: "person name 5", img: user3},
        {id: 41,name: "person name 6", img: user3},
    ]

    const handleCardClick = () => setIsCardClicked(true);

    const renderInvitedUsers = () => (
        <>
        {/*  render first 3 users */}
        {fakeUsers.slice(0 , 3).map((user) => (
            <div key={user.id} className="card__avatar"><img src={user.img} alt="user avatar"/></div>  
        ))}

        {/* rest of the users number */}
        {console.log(fakeUsers.length)}
        {fakeUsers.length > 3 && <div className="card__avatar_blank">+{fakeUsers.length - 3}</div>}
        </>
    )

    return ( 
        <div className={isCardClicked ? "card__focused" : "card"} onClick={handleCardClick}>
                <div className="card__details">
                    <h3 className="card__title">Meeting Title</h3>
                    <div>
                        <img className="card__icon" src={clockIcon} alt="meeting date"/> Monday Feb 16, 11:00 AM - 2:00 PM (2hrs)
                    </div>
                    <div>
                        <img className="card__icon" src={caseIcon} alt="meeting type" /> Project
                    </div>
                    <div>
                        <img className="card__icon" src={mapPointerIcon} alt="meeting location" /> Location
                    </div>
                </div>

                <div className="card__controls">
                    <a className="card__joinBTN" href="#">
                        <img className="card__icon" src={zoomIcon} alt="join meeting"/> Join Call
                    </a>
                
                    <div className="card__invtedUsers">
                        {renderInvitedUsers()}
                    </div>
                </div>
            <div className="card__state">Scheduled</div>
        </div>
     );
}
 
export default Card;