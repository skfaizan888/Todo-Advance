import React, { useState } from "react";
import { Form, Button, Col, Row, Card } from "react-bootstrap";

export const TodoItem = ({ item, handleDelete }) => {
  const [checkbox, setcheckbox] = useState(false);
  return (
    <div>
      <Card>
        <Row>
          <Col>
            <Form.Check onClick={() => setcheckbox(!checkbox)}></Form.Check>
          </Col>
          <Col>
            <Form.Label>{checkbox ? <del>{item}</del> : item}</Form.Label>
          </Col>
          <Col>
            <Button onClick={() => handleDelete(item)}>Delete</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
