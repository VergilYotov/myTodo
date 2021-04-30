import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

 

  
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };


      const response = await fetch("/todos", options);
      console.log(response);
      window.location = "/"; 

      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      console.log(response);
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="write something..."
          value={description}
          onChange={handleChange}
        />
        <button className="btn btn-primary" >Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
