import React from "react";
import { Header } from "../components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { UsersList } from "./Users/UsersList";
import { UserCreate } from "./Users/UserCreate";

export const Root = () => {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/users-list" component={UsersList} />
        <Route path="/user-create" component={UserCreate} />
      </Router>
    </>
  );
};
