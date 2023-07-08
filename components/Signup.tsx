"use client";
import supabase from "../supabase";


const Signup:Function = () => {

    console.log(supabase)

  return (
    <form className=" w-full space-y-10 flex flex-col items-center my-20">
      <div className="space-x-2">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" className="border border-black text-center py-px rounded-sm" />
      </div>
      <div className="space-x-2">
        <label htmlFor="email">Email:</label>
        <input type="text" name="name" className="border border-black text-center py-px rounded-sm" />
      </div>
      <div className="space-x-2">
        <label htmlFor="phone">Phone:</label>
        <input type="text" name="name" className="border border-black text-center py-px rounded-sm" />
      </div>
      <div className="space-x-2">
        <label htmlFor="password">Create password:</label>
        <input type="password" name="name" className="border border-black text-center py-px rounded-sm" />
      </div>
      <div className="space-x-2">
        <label htmlFor="password">Confirm password:</label>
        <input type="password" name="name" className="border border-black text-center py-px rounded-sm" />
      </div>
      <button className="px-10 mx-auto text-white font-bold  py-2 bg-green-400 rounded-lg">Sign up</button>
    </form>
  );
};

export default Signup;
