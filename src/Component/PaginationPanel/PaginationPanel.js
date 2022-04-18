import React from 'react';
import "./StylePaginationPanel.css";

function PaginationPanel(props) {
    const {usersPerPage, totalStates, onChangePage, currentPage} = props;

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalStates / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (

        <div className="pagination">
            {pageNumbers.map((number) => (
                <button className={currentPage === number ? "active__btn" :"current-page__btn"} key={number + "pgn"} onClick={() => onChangePage(number)}>{number}</button>
            ))}
            <button className="current-page__btn current-page__btn-next">Next page ></button>
        </div>

    );
}

export default PaginationPanel;

