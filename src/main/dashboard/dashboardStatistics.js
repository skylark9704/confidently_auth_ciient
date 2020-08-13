import React from "react";
import { Icon, Statistic } from "semantic-ui-react";

export default function DashboardStatistics() {
  return (
    <Statistic.Group widths="four">
      <Statistic>
        <Statistic.Value text>22</Statistic.Value>
        <Statistic.Label>Saves</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value text>3000</Statistic.Value>
        <Statistic.Label>Signups</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value text>
          <Icon name="plane" />5
        </Statistic.Value>
        <Statistic.Label>Flights</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value text>42</Statistic.Value>
        <Statistic.Label>Team Members</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  );
}
