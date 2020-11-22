import React, { useEffect } from 'react';
import * as routes from '../routes';
import { useHistory } from 'react-router-dom';
// Hooks
import useAuth from '../hooks/useAuth';

/**
 * The HOC withRedirectOnNotAuth will check
 * IF the user is NOT authenticated
 * THEN it renders the Wrapped Component
 * ELSE it will redirect to login page
 * @param {*} WrappedComponent 
 */
function withRedirectOnAuth(WrappedComponent) {
    function Component ({ ...rest }) {
        const { auth, isAuthenticated, isLoaded } = useAuth();
        const { push } = useHistory();
        
        useEffect(() => {
            if(!isLoaded) {
                return null
            }
            
            if (isAuthenticated) {
              push(routes.home)
            }
        }, [auth, isAuthenticated, isLoaded, push])
    
        if (isAuthenticated) {
            return null
        }

        return <WrappedComponent {...rest} />
    }

    return Component;
}

export default withRedirectOnAuth;
