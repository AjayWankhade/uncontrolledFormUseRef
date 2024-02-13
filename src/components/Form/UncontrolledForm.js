import React, { useRef, useState } from "react";

function UncontrolledForm() {
  const [show, setShow] = useState(false);

  const luckyName = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    const name = luckyName.current.value;
    name === "" ? alert("please enter your lucky name") : setShow(true);
  }
  return (
    <div className="p-4">
      <div className="max-w-md mx-auto">
        <form>
          <div className="mb-4 ">
            <label htmlFor="luckyName" className="block text-gray-700">
              Enter Your Lucky Name
            </label>
            <input
              className="border rounded-md px-4 py-2 w-full"
              ref={luckyName}
              type="text"
              id="luckyName"
            ></input>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <p
            className={`mt-4 ${
              show ? "text-green-700 font-semibold" : "hidden"
            }`}
          >
            {show ? `Your lucky name is ${luckyName.current.value}` : ""}
          </p>
        </form>
      </div>
    </div>
  );
}

export default UncontrolledForm;
