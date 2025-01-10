import {Home, TestCreationPage, ExamPage, LoginPage, RegisterPage, AboutUs,PartnerLandingPage,StudentTestDashboard, TestManagementPage, TestDetailsPage, TestResultPage,TestResultDetailsPage,TestStatsPage,StudentStatsPage,StudentStatsDetailsPage,StudentHomePage,StudentTestHomePage,FileFormatPage,ResetPasswordPage, VideoPlaybackPage, VideoUploadPage} from "./pages";
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
    name: "testCreation",
    path: "/test/creation",
    element: <TestCreationPage />,
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
  {
    icon: CheckBadgeIcon,
    name: "partnerHome",
    path: "/partner/home",
    element: <PartnerLandingPage />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "studentTestDashboard",
    path: "/student/test/dashboard",
    element: <StudentTestDashboard />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "testManagement",
    path: "/test/management",
    element: <TestManagementPage />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "testDetails",
    path: "/testDetails",
    element: <TestDetailsPage />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "testResult",
    path: "/test/result",
    element: <TestResultPage />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "testResultDetails",
    path: "/result/details",
    element: <TestResultDetailsPage />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "testStats",
    path: "/test/stats",
    element: <TestStatsPage />,
    visible: false,
  },
  
  {
    icon: CheckBadgeIcon,
    name: "studentStats",
    path: "/student/stats",
    element: <StudentStatsPage />,
    visible: false,
  },
  
  {
    icon: CheckBadgeIcon,
    name: "studentStatsDetails",
    path: "/student/stats/details",
    element: <StudentStatsDetailsPage />,
    visible: false,
  },

  {
    icon: CheckBadgeIcon,
    name: "studentTestHomePage",
    path: "/student/home/test",
    element: <StudentTestHomePage />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "studentHomePage",
    path: "/student/home",
    element: <StudentHomePage />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "FileFormatPage",
    path: "/file/format",
    element: <FileFormatPage />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "ResetPasswordPage",
    path: "/reset/password",
    element: <ResetPasswordPage />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "VideoUploadPage",
    path: "/video/upload",
    element: <VideoUploadPage />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "VideoPlaybackPage",
    path: "student/lecture",
    element: <VideoPlaybackPage />,
    visible: false,
  },
  




];

export default routes;
