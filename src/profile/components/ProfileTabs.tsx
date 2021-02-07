import React from "react";
import Tabs, { TabItem } from "shared/Tabs";
import { MenuItem } from "./ProfileMenu";

interface Props {
  menuItemSelected: MenuItem;
  onSelect: (item: MenuItem) => void;
}

const ProfileTabs = (props: Props) => {
  return (
    <Tabs
      value={props.menuItemSelected}
      onChange={(value) => {
        console.log("profile tabs", value);
        props.onSelect(value as MenuItem);
      }}
    >
      <TabItem value="personal">
        <span className="text-primary-500">Personal information</span>
      </TabItem>
      <TabItem value="profile">
        <span className="text-primary-500">Profile description</span>
      </TabItem>
      <TabItem value="contact">
        <span className="text-primary-500">Contact information</span>
      </TabItem>
    </Tabs>
  );
};

export default ProfileTabs;
