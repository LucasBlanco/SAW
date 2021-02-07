import { Height } from "@material-ui/icons";
import ProfileMenu, { MenuItem } from "profile/components/ProfileMenu";
import ProfileTabs from "profile/components/ProfileTabs";
import React, { useState } from "react";
import ContactInformation from "./ContactInformation";
import PersonalInformation from "./PersonalInformation";
import ProfileDescription from "./ProfileDescription";
import Person from "assets/person.jpeg";
const Profile: React.FC = () => {
  const [menuSelection, setMenuSelection] = useState<MenuItem>("personal");
  return (
    <div className="container md:flex shadow-xl h-full">
      <div className="w-1/8 flex-shrink-0 hidden md:inline-flex">
        <ProfileMenu
          menuItemSelected={menuSelection}
          onSelect={(item) => setMenuSelection(item)}
        />
      </div>
      <div className="md:hidden">
        <div className="h-36 bg-primary-500 flex items-center">
          <div
            className="rounded-full h-32 w-32 ml-5 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${Person})`,
            }}
          />
          <h1 className="mx-auto text-xl font-bold text-white">My account</h1>
        </div>
        <div className="h-16 flex items-center">
          <div className="flex-grow mx-5">
            <ProfileTabs
              menuItemSelected={menuSelection}
              onSelect={(item) => {
                console.log("profile", item);
                setMenuSelection(item);
              }}
            />
          </div>
        </div>
      </div>

      <div
        className="p-8 pt-4 md:p-10 flex-grow overflow-auto"
        style={{ height: "calc(100% - 4rem - 9rem)" }}
      >
        {menuSelection === "personal" && <PersonalInformation />}
        {menuSelection === "contact" && <ContactInformation />}
        {menuSelection === "profile" && <ProfileDescription />}
      </div>
    </div>
  );
};

export default Profile;
