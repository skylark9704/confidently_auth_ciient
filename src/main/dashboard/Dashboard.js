import React, { useState, useEffect } from "react";
import {
  Container,
  List,
  Divider,
  Segment,
  Header,
  Icon,
  Button,
} from "semantic-ui-react";
import Api from "../../lib/Api";
import DashboardHeader from "./dashboardHeader";
import DashboardStatistics from "./dashboardStatistics";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Calling API");
    Api.get("http://localhost:8000/api/v1/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <DashboardHeader />
      <Divider />
      <DashboardStatistics />
      <Divider />
      <Segment placeholder>
        <Header>Users</Header>
        <List>
          {data.map((item, index) => (
            <List.Item key={index}>
              {index + 1}. {item}
            </List.Item>
          ))}
        </List>
      </Segment>
    </Container>
  );
}

export default Dashboard;
