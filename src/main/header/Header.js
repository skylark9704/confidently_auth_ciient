import React from "react";
import { Menu } from "semantic-ui-react";

import { logout, isLoggedIn, getUser } from "../../lib/Auth";

import { Link } from "react-router-dom";

function Header() {
  console.log(getUser());
  const onLogoutClick = () => {
    logout();
  };

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name="Application Name"
          children={<Link to="/dashboard">Automize</Link>}
        />
        <Menu.Item
          name="Dashboard"
          children={<Link to="/dashboard">Dashboard</Link>}
        />
        <Menu.Item
          name="Payments"
          children={<Link to="/payments">Payments</Link>}
        />
        <Menu.Item
          name="Subscriptions"
          children={<Link to="/subscriptons">Subscriptions</Link>}
        />
        <Menu.Item
          name="Invoices"
          children={<Link to="/invoices">Invoices</Link>}
        />
        <Menu.Item name="About" children={<Link to="/about">About</Link>} />

        {isLoggedIn() ? (
          <Menu.Menu position="right">
            <Menu.Item name="logout" onClick={onLogoutClick} />
          </Menu.Menu>
        ) : null}
      </Menu>
    </div>
  );
}

export default Header;
