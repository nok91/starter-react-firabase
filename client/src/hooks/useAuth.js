import { useSelector } from 'react-redux';
import { logout } from '../firebase/index';

function useAuth() {
    const { 
        firebase: { 
            auth
        } 
    } = useSelector(state => state);

    const isAuthenticated = auth.isEmpty === false;

    function getSurname(fullName = '') {
        if (fullName) {
            return fullName.split(' ')[1] || fullName
        }
    }

    return {
        auth,
        isAuthenticated,
        isLoaded: auth.isLoaded,
        user: {
            displayName: auth.displayName,
            surname: getSurname(auth.displayName),
            photoURL: auth.photoURL,
        },
        logout
    }
}

export default useAuth;