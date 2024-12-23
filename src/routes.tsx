import {Home, Page1, ExamPage, LoginPage, RegisterPage, AboutUs} from "./pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  NewspaperIcon,
  UsersIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import React from "react";

import { FaSearch } from 'react-icons/fa';



export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "page1",
    path: "/page1",
    element: <Page1 />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "exam",
    path: "/exam",
    element: <ExamPage />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "login",
    path: "/login",
    element: <LoginPage />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "register",
    path: "/register",
    element: <RegisterPage />,
    visible: false,
  },
  
  {
    icon: CheckBadgeIcon,
    name: "aboutUs",
    path: "/aboutUs",
    element: <AboutUs />,
    visible: false,
  },
  




];

export default routes;
