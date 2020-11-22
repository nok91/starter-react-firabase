import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    label: PropTypes.string
};

const defaultProps = {
    label: 'Open menu'
};

function BurgerMenu({ label }) {
    return (
            <>
              <button
                type='button'
                className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              >
                <span className='sr-only'>Open menu</span>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </>
    );
};

BurgerMenu.displayName = 'BurgerMenu';
BurgerMenu.propTypes = propTypes;
BurgerMenu.defaultProps = defaultProps;

export default BurgerMenu;
