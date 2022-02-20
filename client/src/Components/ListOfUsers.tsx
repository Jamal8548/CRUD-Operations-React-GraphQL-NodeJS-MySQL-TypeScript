import React from "react";
import { GET_ALL_USERS } from "../Graphql/Queries";
import { DELETE_USER } from "../Graphql/Mutation";
import { useQuery, useMutation } from "@apollo/client";

function ListOfUsers() {
  const { data } = useQuery(GET_ALL_USERS);

  const [deleteUser, { error }] = useMutation(DELETE_USER);

  return (
    <div>
      <b>
        LIST OF USERS WITH DELETE BUTTON WOULD SHOW BELOW AFTER DATABASE
        CREATION
      </b>
      <br></br>
      {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <div>
              <b>
                {user.name} / {user.username}
              </b>

              <button
                className="mini-button"
                onClick={() => {
                  deleteUser({ variables: { id: user.id } });
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default ListOfUsers;
