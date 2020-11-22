import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import BurgerMenu from './components/BurgerMenu';
import classnames from './styles/header.classnames';
import { If, Then, Else, Unless } from 'react-if';
import useLocation from '../../hooks/useLocation';

function Header() {
  const { isAuthenticated, logout } = useAuth();
  const { isLogin } = useLocation();

  return (
    <div className={classnames.header}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className={classnames['header-wrapper']}>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='/'>
              <span className='sr-only'>Workflow</span>
              <svg
                className='w-10 h-10'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5'
                ></path>
              </svg>
            </a>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <BurgerMenu label='Open menu' />
          </div>
          <nav className='hidden md:flex space-x-10'>
            <Link to='/' className={classnames['header__link']}>
              Home
            </Link>
            <Link to='/redux-demo' className={classnames['header__link']}>
              Redux Demo
            </Link>
          </nav>
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
          
            <If condition={isAuthenticated}>
              <Then>
                <button onClick={logout} className='btn-primary ml-8'>
                  Logout
                </button>
              </Then>
              <Else>
                <If condition={!isLogin}>
                    <a
                      href='/'
                      className={classnames['header__link']}
                    >
                      Sign in
                    </a>
                    {/* <a href='/' className='btn-primary ml-8'>
                      Sign up
                    </a> */}
                </If>
              </Else>
            </If>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
