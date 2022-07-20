import React from 'react'


import { useState, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'
import { addUser, DELETEUSER, EDITUSER } from './UserSlice'
import { Card, Button } from 'react-bootstrap';



const TodoList = (props) => {


    const dispatch = useDispatch();
    const [userName, setUsername] = useState("");
    const [manipulateButton, setManipulateButton] = useState(false)
    const [id, setId] = useState("");



    const addHandler = () => {
        dispatch(addUser({
            id: props.message.length === 0 ? 1 : props.message[props.message.length - 1].id + 1,
            name: userName
        }))
        setUsername("")
    }

    const editHandler = (data) => {
        const { id, name } = data;
        setId(id)
        setUsername(name)
        setManipulateButton(true)

    }
    function editData() {
        const datas = props.message.filter((item) => item.id != id)
        const editedRecord = { id, name: userName }
        const newData = [...datas, editedRecord].sort((a, b) => a.id - b.id)
        dispatch(EDITUSER(newData))
        setManipulateButton(false)
        setUsername("");
    }

    const deleteHandler = (id) => {
        const updatedData = props.message.filter(item => item.id !== id)
        dispatch(DELETEUSER(updatedData))

    }

    useEffect(() => {
        const sample = ["sai", "shiva", "vinay", "karan"]
        console.log("messagedata", props.message);
        console.log("Objects.keys data", Object.keys(sample));

    }, []);



    return (
        <div>
            <input type="text" placeholder='user name' value={userName} onChange={(e) => {
                setUsername(e.target.value)
            }} />
            <br />
            {!manipulateButton ?
                <button
                    onClick={() => addHandler()}
                >
                    ADD
                </button>
                :
                <button
                    onClick={() => editData()}
                >
                    EDIT
                </button>
            }
            <div >
                {Object.keys(props.message).length > 0 &&
                    props.message.map((item) =>
                        <div >
                            <Card style={{ backgroundColor: "#949fb0", width: '18rem', color: "black", marginTop: "10px" }}>
                                <Card.Body key={item.id}>
                                    <Card.Title><b style={{ color: "pink" }}>{item.name}</b></Card.Title>
                                    <Button variant="primary"
                                        onClick={
                                            () => editHandler(item)}>
                                        <i class="bi bi-pencil-square"></i>
                                    </Button>
                                    <Button variant="danger"
                                        onClick={() => deleteHandler(item.id)}
                                    >
                                        <i class="bi bi-trash3"></i>
                                    </Button>

                                </Card.Body>
                            </Card>

                        </div>

                    ).reverse()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        message: state.userSlice.value
    }
}

export default connect(mapStateToProps)(TodoList)


