import React, { useState } from "react";
import { Grid, Button, Form, Card } from "semantic-ui-react";
import { login, isLoggedIn } from "../../lib/Auth";
import GoogleLogin from "react-google-login";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  if (loggedIn) {
    window.history.back();
  }

  const submit = async () => {
    let { data } = await login(username, password);
    console.log(data);
    if (data.error) {
      setError("Unable to Login, Please try again");
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <Grid verticalAlign="middle" columns={3} centered>
      <Grid.Row>
        <Grid.Column>
          <Card className="raised">
            <Card.Content>
              <Form>
                <Form.Field>
                  <label>Username</label>
                  <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Field>
                <Button.Group fluid>
                  <Button color="green" onClick={submit} type="submit">
                    Submit
                  </Button>
                  <Button.Or />
                  <GoogleLogin
                    clientId="126580856541-o521m1umrmc2iv48jl0nsdnjlbuagcc3.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <Button
                        icon="google"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      />
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                  ></GoogleLogin>
                </Button.Group>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Login;
