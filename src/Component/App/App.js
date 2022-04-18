import React, {useEffect, useState} from "react";
import {useHistory, useLocation, withRouter} from 'react-router-dom';
import {api} from "../../services/swapi-service";
import "./StyleApp.css";
import PersonsList from "../PersonsList";
import PaginationPanel from "../PaginationPanel";
import DropDown from "../DropDown";

function App() {
    const history = useHistory();
    const location = useLocation();
    const search = useLocation().search;
    const page = new URLSearchParams(search).get('page') || 1;
    const [users, setUsers] = useState({users: [], loader: true});
    const [currentPage, setCurrentPage] = useState(page);
    const [usersPerPage, setUsersPerPage] = useState(10);

    useEffect(() => {
        api.getAllPeaple(location.search).then((respons) => {
            setUsers({
                users: respons,
                loader: false
            });
        }).catch(() => {
            setUsers({
                users: [],
                loader: false
            });
        })
    }, []);

    const onChangePage = (number) => {
        history.push({
            pathname: location.pathname,
            search: `?page=${number}`
        })
        setCurrentPage(number);
    }

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.users.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <div className="full__container">
            <div className="user-list__title--container">
                <p className="users__info-title--items">List of users</p>
            </div>
            <PersonsList users={currentUsers} />
            <div className="pagination__container">
                <PaginationPanel
                    onChangePage={onChangePage}
                    usersPerPage={usersPerPage}
                    totalStates={users.users.length}
                    currentPage={currentPage}
                />
                <DropDown usersPerPage={usersPerPage} setUsersPerPage={setUsersPerPage}/>
            </div>
        </div>
    );

}

export default withRouter(App);
