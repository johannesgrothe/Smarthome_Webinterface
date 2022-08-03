import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useBridgeInfoQuery } from "../../services/bridgeApiSlice";
import { BuildQueryArgs } from "../../utils/buildQueryArgs";
import { setAuthorizedState, setCredentials } from "../../services/authSlice";
import { useDispatch } from "react-redux";

export function LogInPage(props: {
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();
  // const [show, setShow] = useState(false); TODO: give user option to view password
  const [skip, setSkip] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isSuccess, isError, error } = useBridgeInfoQuery(BuildQueryArgs(), {
    skip,
  });

  const handleOnClick = () => {
    let isAuthorized = false;
    if (
      // TODO: this is retarded...
      !(username === "" || username == null) &&
      !(password === "" || password == null)
    ) {
      dispatch(setCredentials({ username, password, isAuthorized }));
      setSkip(!skip);
      if (isSuccess) {
        console.log("credentials are valid");
        isAuthorized = isSuccess;
        dispatch(setAuthorizedState({ isAuthorized }));
        props.setIsAuthorized(isAuthorized);
      }
      if (isError) {
        console.log("error ocurred: ", error);
      }
    } else {
      alert("please provide credentials");
    }
  };

  const handleUsernameInput = (username: string) => {
    setUsername(username);
  };
  const handlePasswordInput = (password: string) => {
    // TODO: encrypt password
    setPassword(password);
  };

  return (
    <Container>
      <Card>
        <Card.Title>Log in</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                as="input"
                placeholder="spongobob"
                id="username"
                // TODO: rethink this
                onChange={(event) => handleUsernameInput(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                placeholder="Password"
                // TODO: rethink this as well
                onChange={(event) => handlePasswordInput(event.target.value)}
              />
            </Form.Group>
          </Form>
          <Button type="submit" onClick={handleOnClick}>
            Submit
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
