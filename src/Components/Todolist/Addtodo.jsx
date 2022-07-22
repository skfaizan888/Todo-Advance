import React, { useState } from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";

export const Addtodo = ({ handleAdd }) => {
  const [todoText, setTodoText] = useState("");
  console.log(todoText);
  return (
    <div>
      <Card>
        <Row>
          <Col md={10}>
            <Form.Control
              type="text"
              onChange={(e) => setTodoText(e.target.value)}
            ></Form.Control>
          </Col>
          <Col>
            <Button
              onClick={() => {
                setTodoText("");
                handleAdd(todoText);
              }}
            >
              Add TO DO
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
