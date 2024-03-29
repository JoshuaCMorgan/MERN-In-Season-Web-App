import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { FaClipboardList, FaAppleAlt } from "react-icons/fa";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { GiShinyApple } from "react-icons/gi";
export const dashboardLinks = [
  {
    id: 1,
    text: "shopping list",
    path: "/dashboard",
    icon: <FaClipboardList />,
  },

  {
    id: 2,
    text: "profile",
    path: "/dashboard/profile",
    icon: <ImProfile />,
  },
  {
    id: 3,
    text: "back to home",
    path: "/",
    icon: <GiShinyApple />,
  },
];

export const homepageLinks = [
  {
    id: 1,
    href: "#home",
    url: "/",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    url: "/about",
    text: "about",
  },
  { id: 3, url: "/dashboard", text: "shopping list" },
  { id: 4, url: "/register", text: "account" },
  { id: 5, url: "/login", text: "explore the app" },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];
