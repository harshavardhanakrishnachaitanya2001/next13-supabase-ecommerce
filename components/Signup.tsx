"use client";
import { Component, useState } from "react";
import supabase from "../supabase";

const Signup = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    phone:"",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [success, setSuccess] = useState(false);

  const readName = (e: any) => {
    setNewUser({ ...newUser, name: e.target.value });
  }

  const readEmail = (e: any) => {
    setNewUser({ ...newUser, email: e.target.value });
  };
  const readPassword = (e: any) => {
    setNewUser({ ...newUser, password: e.target.value });
  };
  const readPhone = (e: any) => {
    setNewUser({ ...newUser, phone: e.target.value });
  };
  const storeNewUser = async (e: any) => {
    e.preventDefault();
    try {
      let { data, error } = await supabase.auth.signUp({
        email: newUser.email,
        password: newUser.password,
      });
      console.log(data);
      console.log(error);
      if(error) throw error;
      const userId = data?.user?.id;
      console.log(userId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form method="POST" className=" w-full space-y-10 flex flex-col items-center my-20">
      <div className="space-x-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={newUser.name}
          name="name"
          onChange={readName}
          required
          className="border border-black text-center py-px rounded-sm"
        />
      </div>
      <div className="space-x-2">
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          value={newUser.phone}
          name="phone"
          onChange={readPhone}
          required
          className="border border-black text-center py-px rounded-sm"
        />
      </div>
      <div className="space-x-2">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={newUser.email}
          name="email"
          onChange={readEmail}
          required
          className="border border-black text-center py-px rounded-sm"
        />
      </div>

      <div className="space-x-2">
        <label htmlFor="password">password:</label>
        <input
          type="password"
          value={newUser.password}
          onChange={readPassword}
          name="password"
           required
          className="border border-black text-center py-px rounded-sm"
        />
      </div>
      
      <button
        onClick={storeNewUser}
        className="px-10 mx-auto text-white font-bold  py-2 bg-green-400 rounded-lg"
      >
        Sign up
      </button>
      <h1>{newUser.password}</h1>
    </form>
  );
};

export default Signup;
