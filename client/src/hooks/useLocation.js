import { useLocation as useLocationRRD } from 'react-router-dom'
import * as routes from '../routes';

function useLocation() {
    let { pathname } = useLocationRRD();

    return {
        isLogin: pathname === routes.login
    };
};

export default useLocation;
