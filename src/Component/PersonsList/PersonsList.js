import React from 'react';
import "./StylePersonsList.css";

function PersonsList(props) {
    const {users} = props;

    console.log(users);


    return (
        <div>
            {users.map((item, index) => (
                <div className="user-list__container" key={index}>
                    <div className="user-list__info-block">
                        <img src={item.picture.large} alt=""/>
                        <div>
                            <p className="users__items-name">{item.name.first} {item.name.last}</p>
                            <p className="users__items-date">{new Date(item.dob.date).toLocaleDateString()}</p>
                            <p className="users__items">{item.location.city}, {item.location.street.name} {item.location.street.number}</p>
                            <p className="users__items">{item.email}</p>
                        </div>

                    </div>
                    <div className="user-list__info-block-button">
                        <button className="user-list__btn">Edit</button>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default PersonsList;