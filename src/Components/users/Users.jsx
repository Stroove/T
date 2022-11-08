import React from 'react';
import UsersElement from './UsersElement';
import usersClass from './usersClass.module.css';
import Paginator from '../../utils/paginator';


const Users = (props) => {
    let usersList = props.users.map(u => <UsersElement key={u.id} isFollowingInProgress={props.isFollowingInProgress} follow={props.follow} unFollow={props.unFollow} id={u.id} photos={u.photos} followed={u.followed} name={u.name} /* country={u.location.country} */ /* city={u.location.city} */ status={u.status}/>)
    return ( 
        <div className={usersClass.users}>
            <div className={usersClass.users__title}>Users</div>
            <div className={usersClass.users__usersPage}>
                <Paginator onCurrentPageChange={props.onCurrentPageChange} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} portionSize={10}/>
            </div>
            <div className="users__body">
                {usersList}
            </div>
        </div>
    )
}

export default Users;