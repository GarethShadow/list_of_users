import React, {useState} from "react";
import "./StyleDropDown.css";

function DropDown(props) {
    const {usersPerPage,
        setUsersPerPage} = props;
    const [isOpen, toggleOpen] = useState(false);

    const currentNumber = [10, 50, 100, 500];

    return (
        <div className="drop-down__container">
            <button className="drop-down__button" onClick={() => toggleOpen(!isOpen)}>{usersPerPage}</button>
            {isOpen &&
                <div className="drop-down__items-container">
                    {currentNumber.map(number => (
                        <div className="drop-down__items" onClick={() => {
                            setUsersPerPage(number)
                            toggleOpen(false)
                        }} key={number + "dd"}>{number}</div>
                    ))}
                </div>
            }
        </div>
    );
}

export default DropDown;