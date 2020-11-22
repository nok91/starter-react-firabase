import React from 'react';

function PostForm() {
  return (
   <div className="flex min-h-full">
        <div className="flex max-w-md flex-col m-auto mt-0">
            <h2 class="text-5xl font-serif text-secondary mb-10 w-full md:text-center">Hello James, Welcome Back!</h2>
            <div className="flex flex-row items-center w-full">
                <img className="flex-shrink-0 h-12 w-12 rounded-full mr-5" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Image Profile" />
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
