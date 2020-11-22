import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage(props) {
    return (
        <div className="flex flex-col items-center h-screen justify-center">
            <h2 className="text-7xl font-serif">404 - Not Found!</h2>
            <Link className="text-5xl" to="/"> Go Home </Link>
        </div>
    );
};

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;