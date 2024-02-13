import React, { useState } from "react";

function LoginForm() {
  const [username, setUserName] = useState("");
  const [password, setPass] = useState("");

  function handleUserName(e) {
    setUserName(e.target.value);
  }
  function handlePass(e) {
    setPass(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
      console.log(`Username: ${username}, Password: ${password}`);
    } else {
      console.log("wrong username and password");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center h-screen bg-indigo-600">
          <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 className="text-3xl block text-center font-semibold">
              <i class="fa-solid fa-user"></i>Login
            </h1>
            <hr className="mt-3" />
            <div className="mt-3">
              <label for="username" className="block text-base mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                onChange={handleUserName}
                value={username}
                required
                className="border w-full text-base p1-2 px-2 focus:outline-none focus-ring-0 focus:border-gray-600"
                placeholder="Enter username..."
              ></input>
            </div>
            <div className="mt-3">
              <label for="password" className="block text-base mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={handlePass}
                value={password}
                className="border w-full text-base p1-2 px-2 focus:outline-none focus-ring-0 focus:border-gray-600"
                placeholder="Enter Password..."
              ></input>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <div>
                <input type="checkbox" id="rememberMe" />
                <label>Remember me</label>
              </div>
              <div>
                <a href="#" className="text-indigo-800 font-semibold">
                  {" "}
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full hover:bg-transparent"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
