import React from 'react';
import { signInWithGoogle } from '../../firebase';
// Hooks
import withRedirectOnAuth from '../../hocs/withRedirectOnAuth';

function Login() {
  return (
    <div>
      <h2 className="text-5xl font-serif text-secondary mb-10 w-full md:text-center">Login</h2>

      <div className="flex justify-center ">
        <button
          className='btn-primary hover:text-primaryLight'
          onClick={signInWithGoogle}
        >
            Sign in with Google
        </button>
      </div>

      <hr className="border-primaryDark my-5" />

      <div className='bg-white shadow-md  px-8 pt-6 pb-8 mb-4 flex flex-col'>
        <div className='mb-4'>
          <label className='block text-grey-darker text-sm font-bold mb-2' htmlFor='username'>
            Username
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
            id='username'
            type='text'
            placeholder='Username'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-grey-darker text-sm font-bold mb-2' htmlFor='password'>
            Password
          </label>
          <input
            className='shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3'
            id='password'
            type='password'
            placeholder='******************'
          />
          <p className='text-red text-xs italic'>Please choose a password.</p>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'
            type='button'
          >
            Sign In
          </button>
          <a
            className='inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker'
            href='/'
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

Login.displayName = 'LoginPage';

export default withRedirectOnAuth(Login);
