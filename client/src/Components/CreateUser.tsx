import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../Graphql/Mutation";
import "./components.css";
function CreateUser() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER);
  return (
    <>
      <h2 className="heading">
        CURD Operations Using Node-React,TypeScript,Express,Node,GraphQL and
        MySql by JAMAL ASHRAF
      </h2>

      <div className="createUser">
        <b>FOR CREATING USERS</b>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter your password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button
          className="button"
          onClick={() => {
            createUser({
              variables: { name: name, username: userName, password: password },
            });
          }}
        >
          Create User
        </button>
      </div>
    </>
  );
}

export default CreateUser;
