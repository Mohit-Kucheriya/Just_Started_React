import React from "react";
import Card from "./Card";

function Cards({ users, handleRemoveUser }) {
  return (
    <div className="flex h-full max-h-96 w-full flex-wrap justify-center gap-5 overflow-y-scroll p-4">
      {users.map((user, index) => {
        return (
          <Card key={index} user={user} handleRemoveUser={handleRemoveUser} idx={index} />
        );
      })}
    </div>
  );
}

export default Cards;
