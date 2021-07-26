import React from 'react'
import {
    // eslint-disable-next-line no-unused-vars
    Link
} from "react-router-dom";

function notfound() {
    return (
        <div className="flex-center">
            <h1>404</h1>
            <div>
                Sorry The Page You Are Looking For Is Not Avalable In The Website
            </div>
            <Link to='/'>Go Back To Home</Link>
        </div>
    )
}

export default notfound
