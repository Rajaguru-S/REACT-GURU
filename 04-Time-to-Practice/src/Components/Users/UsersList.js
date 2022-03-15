import React from 'react';
import Card from '../UI/Card';
import Classes from './UsersList.module.css';
const UsersList = props => {
    return (
        <Card className = {Classes.users}>
        <ul>
            {props.users.map(user => {
                return (<li key={user.key}>{user.name} ({user.age} Year's Old)</li>)
            })}
        </ul>
        </Card>
    )

}
export default UsersList;