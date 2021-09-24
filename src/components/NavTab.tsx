import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Tab } from "@headlessui/react";

type NavTabProps = {
  href: string;
};

const NavTab: React.FC<NavTabProps> = ({ href, children }) => (
  <Tab as={Fragment}>
    <NavLink
      className={(isActive) =>
        `${
          isActive
            ? "text-link-blue border-link-blue"
            : "text-gray-500 border-transparent"
        } hover:text-link-blue text-sm font-bold px-3 py-3 border-b-2`
      }
      to={href}
      exact
      replace
    >
      {children}
    </NavLink>
  </Tab>
);

export default NavTab;
