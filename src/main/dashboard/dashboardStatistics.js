import React from "react";
import { Icon, Statistic } from "semantic-ui-react";

export default function DashboardStatistics() {
  return (
    <Statistic.Group widths="four">
      <Statistic>
        <Statistic.Value>22</Statistic.Value>
        <Statistic.Label>Saves</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value text>
          Three
          <br />
          Thousand
        </Statistic.Value>
        <Statistic.Label>Signups</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>
          <Icon name="plane" />5
        </Statistic.Value>
        <Statistic.Label>Flights</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>
          <Icon name="profile" />
          42
        </Statistic.Value>
        <Statistic.Label>Team Members</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  );
}
