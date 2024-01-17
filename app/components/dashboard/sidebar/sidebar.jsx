import React from "react";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLInk";
import Image from "next/image";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
    ],
  },
  {
    title: "Internship",
    list: [
      {
        title: "Internship",
        path: "/dashboard/internship",
        icon: <MdWork />,
      },
      {
        title: "Seminar",
        path: "/dashboard/seminar",
        icon: <MdAnalytics />,
      },
      // {
      //   title: "Teams",
      //   path: "/dashboard/teams",
      //   icon: <MdPeople />,
      // },
    ],
  },
  // {
  //   title: "User",
  //   list: [
  //     {
  //       title: "Settings",
  //       path: "/dashboard/settings",
  //       icon: <MdOutlineSettings />,
  //     },
  //     {
  //       title: "Help",
  //       path: "/dashboard/help",
  //       icon: <MdHelpCenter />,
  //     },
  //   ],
  // },
];

const sidebar = () => {
  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5 ">
        <Image
          className="object-cover rounded-full"
          src="/noavatar.png"
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col userdetail">
        <span className="font-medium">Shivam</span>
        <span className="text-xs">Admin</span>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li className=" list-style: none" key={cat.title}>
            <span className="cat text-red-100 font-[bold] text-[13px] mx-0 my-2.5">
              {cat.title}{" "}
            </span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default sidebar;
