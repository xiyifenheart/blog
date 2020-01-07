import React from 'react';
import { useParams, useHistory, Router } from 'react-router-dom';

function Home(props) {
    let history = useHistory();
    let loginObj = props.loginObj;

    return (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    loginObj.signout(() => history.push("/login"));
                }}
            >
                Sign out
            </button>
        </p>
    );
}

export default Home;