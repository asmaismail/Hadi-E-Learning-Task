import React from "react";
import {paths} from "../helpers/paths";
import Help from "./Pages/Help";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Landing from './Pages/Landing'
import NoPage from './Pages/NoPage'
import BuyTickets from "./Pages/BuyTickets";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import { Route, Routes } from "react-router-dom";

const AppRouting = () => {
  return (
    <>
      <Routes>
        <Route path={paths.Landing} element={<Landing />} />
        <Route path={paths.Profile} element={<Profile />} />
        <Route path={paths.Settings} element={<Settings />} />
        <Route path={paths.Login} element={<Login />} />
        <Route path={paths.Help} element={<Help />} />
        <Route path={paths.About} element={<About />} />
        <Route path={paths.BuyTickets} element={<BuyTickets />} />
        <Route path={paths.Contact} element={<Contact />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};

export default AppRouting;
