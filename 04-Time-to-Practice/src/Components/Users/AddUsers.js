import React, {useState} from 'react';
import Card from '../UI/Card';
import Classes from './AddUsers.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUsers = props => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        if(userName.trim().length===0 || userAge.trim().length===0){
            setError({
                title: 'Invalid Input',
                message : 'Please Enter valid name and age (not empty)'
            })
            return;
        }
        if(+userAge<1){
            setError({
                title: 'Invalid Age',
                message : 'Please Enter valid age (>0)'
            })
            return;
        }
        props.onAddUsers(userName,userAge)
        setUserName('');
        setUserAge('');
    }

    const nameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setUserAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}    
        <Card className = {Classes.input}>
        <form onSubmit={submitHandler}>
            <label htmlFor="user">User Name</label>
            <input id="user" type="text" value={userName} onChange={nameChangeHandler}/>
            <label htmlFor="age">Age</label>
            <input id="age" type="text" value={userAge} onChange={ageChangeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    )


}

export default AddUsers;