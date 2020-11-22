import React from 'react';
import useAuth from '../../hooks/useAuth';

function PostForm() {
  const { user } = useAuth();
  console.log({ user });

  return (
   <div className="flex min-h-full">
        <div className="flex max-w-md flex-col m-auto mt-0">
            <h2 className="text-5xl font-serif text-secondary mb-10 w-full md:text-center">Hello { user.surname }, Welcome Back!</h2>
            <div className="flex flex-row items-center w-full">
                <img alt="" className="flex-shrink-0 h-12 w-12 rounded-full mr-5" src={ user.photoURL } />
                <input
                    type="text" 
                    id="price" 
                    className="outline-none pb-3 flex-1  text-secondary border-b border-solid border-primary hover:border-primaryDark bg-transparent" 
                    placeholder="What on your mind?" 
                />
                <button type="submit" className="ml-5">
                    Post
                </button>
            </div>
        </div>
   </div>
  );
}

export default PostForm;
