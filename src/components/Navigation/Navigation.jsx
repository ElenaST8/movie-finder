import "./navigation.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import {
  HOME_PATH,
  SEARCH_PATH,
  WATCHED_PATH,
  ABOUT_US_PATH,
} from "../../constants/pathNames";

const Navigation = () => {
  const navElements = [
    {
      id: uuidv4(),
      text: "Site Description",
      path: HOME_PATH,
    },
    {
      id: uuidv4(),
      text: "Search",
      path: SEARCH_PATH,
    },
    {
      id: uuidv4(),
      text: "Watched",
      path: WATCHED_PATH,
    },
    {
      id: uuidv4(),
      text: "About Us",
      path: ABOUT_US_PATH,
    },
  ];

  return (
    <nav className="navigation">
      {navElements.map((element) => {
        return (
          <Link key={element.id} to={element.path}>
            <NavigationItem text={element.text} />
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
