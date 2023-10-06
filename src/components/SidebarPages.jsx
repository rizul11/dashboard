import React from "react";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import GroupIcon from "@mui/icons-material/Group";

export const SidebarPages = [
  {
    title: "Posts",
    icon: <DynamicFeedIcon />,
    link: "/Posts",
    
  },
  {
    title: "Users",
    icon: <GroupIcon />,
    link: "/Users",
  },
];
