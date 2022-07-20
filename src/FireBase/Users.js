import React, { useEffect, useState } from 'react'
import { db } from '../FireBase/fireBase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [newuserName, setUserName] = useState('');
    const [newuserAge, setUserAge] = useState('');

    const userCollectionRef = collection(db, "testresults");


    useEffect(() => {

        const postRequest = async () => {

            const data = await getDocs(userCollectionRef);
            console.log(data);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        postRequest();
    }, [])

    const addUsers = async (newuserAge, newuserName) => {
        await addDoc(userCollectionRef, { name: newuserName, age: Number(newuserAge) });

    }

    const updateUserAge = async (id, age) => {

        const Userdoc = doc(db, "testresults", id)
        const userage = { age: age + 1 };

        await updateDoc(Userdoc, userage);
    }

    const deleteUser = async (id) => {
        const userdoc = doc(db, "testresults", id);
        await deleteDoc(userdoc);
    }

    console.log(users, "response in axios")

    const submitHandler = e => {
        e.preventDefault();
        console.log(newuserAge, newuserName, "newdata");
        addUsers(newuserAge, newuserName);
    };

    return (
        <>
            <div>
                <h1>Users Fire Base CRUD functionalities</h1>
                <form onSubmit={submitHandler}>

                    <input
                        type="text"
                        name="users"
                        placeholder="new users Name"
                        onChange={(e) => { setUserName(e.target.value); }} />
                    <br />
                    <input
                        type="text"
                        name="users"
                        placeholder="new users Age"
                        onChange={(e) => { setUserAge(e.target.value); }} />

                    <button type='submit'>Submit</button>
                </form>
                {users.map((user) => {
                    return (
                        <>
                            <p>Name :  {user.name}</p>
                            <p> Age : {user.age}</p>
                            <button onClick={() => { updateUserAge(user.id, user.age) }}>Increase Age</button>
                            <button onClick={() => { deleteUser(user.id) }}>Delete User</button>
                        </>
                    )
                })}

            </div>
        </>
    )
}

export default Users