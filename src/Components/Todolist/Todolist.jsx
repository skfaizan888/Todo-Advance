import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { TodoItem } from "./TodoItem";

export const Todolist = ({ todoitem, handleDelete }) => {
  return (
    <div>
      <Card className="todolist">
        {todoitem.map((item) => (
          <TodoItem item={item} handleDelete={handleDelete} />
        ))}
      </Card>
    </div>
  );
};
