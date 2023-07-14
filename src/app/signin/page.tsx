import React from 'react'

const SignIn = () => {
  return (
    <>
      <form method="POST" className=" w-full space-y-10 flex flex-col items-center my-20">
      <div className="space-x-2">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          
          required
          className="border border-black text-center py-px rounded-sm"
        />
      </div>

      <div className="space-x-2">
        <label htmlFor="password">password:</label>
        <input
          type="password"
          
           required
          className="border border-black text-center py-px rounded-sm"
        />
      </div>
      <button
       
        className="px-10 mx-auto text-white font-bold  py-2 bg-green-400 rounded-lg"
      >
        Sign in
      </button>

    </form>
    </>
  )
}

export default SignIn
