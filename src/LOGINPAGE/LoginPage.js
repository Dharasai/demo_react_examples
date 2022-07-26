

import React,{useState} from 'react'

const LoginPage = () => {
    const [form, setState] = useState({
        username: '',
        password: ''
    });

    const submitHandler = e => {
        e.preventDefault();
        console.log(form.username, form.password);
    };

    const updateField = e => {
        setState({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <div>LoginPage</div>
            <form onSubmit={submitHandler}>
                <label>
                    Username:
                    <input
                        value={form.username}
                        name="username"
                        onChange={updateField}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        value={form.password}
                        name="password"
                        type="password"
                        onChange={updateField}
                    />
                </label>
                <br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default LoginPage

