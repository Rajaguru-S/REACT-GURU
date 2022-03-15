import React, {useState} from 'react';
import AddUsers from './Components/Users/AddUsers';
import UsersList from './Components/Users/UsersList';

function App() {
  const [usersLists, setUsersLists] = useState([]);
  const addUsersHandler = (uName, uAge) => {
    setUsersLists(prevUsersList => {
      return ([...prevUsersList, {name: uName, age: uAge, key: Math.random().toString()}])
    });
  }

  return (
    <div>
      <AddUsers onAddUsers = {addUsersHandler}/>
      {usersLists.length>0 && <UsersList users={usersLists}/>}
    </div>
  );
}

export default App;
