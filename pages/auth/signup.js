import { useState } from "react";
import userRequest from "../hooks/user-request";
import Router from "next/dist/server/router";

export default () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { doRequest, errors } = userRequest({
        url: 'http://localhost:4000/api/users/signup',
        method: 'post',
        body: {
            email, password
        },
        onSuccess: () => Router.push('/')
    })

    const onSubmit = async (event) => {
        event.preventDefault();
        await doRequest()
    }

    return (
        <form onSubmit={onSubmit} >
            <h1>Sign Up</h1>
            <div className="form-group">
                <label> Email Address</label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label> Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="form-control"
                />
            </div>
            {errors}
            <button className="btn btn-primary">Sign Up</button>
        </form>
    )
}