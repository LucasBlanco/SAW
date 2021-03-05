import PageHeader from "layout/components/PageHeader";
import React, { useEffect, useState } from "react";
import PersonImg from "../../assets/person.jpeg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faEdit,
  faAddressCard,
} from "@fortawesome/free-regular-svg-icons";
import ProfileMenu from "profile/components/ProfileMenu";
import ProfileMenuItem from "profile/components/ProfileMenuItem";
import ChangePassword from "./ChangePassword";
import Button from "shared/components/Button";
interface Props {}

const ProfilePage = (props: Props) => {
  const [menuItemSelected, setMenuitemSelected] = useState(1);

  return (
    <>
      <PageHeader title="Profile" />
      <div
        className="w-full inline-block md:flex md:space-x-4 p-4 2xl:py-8 2xl:px-40 h-full"
        style={{ minHeight: "calc(100% - 4rem - 2px)" }}
      >
        <div className="w-full md:w-1/3 2xl:w-1/4 rounded-md bg-white p-8 mb-4 md:mb-0">
          <div className="flex space-x-2 justify-between">
            <div
              className="bg-cover bg-center w-28 h-28 rounded-md  flex-shrink-0"
              style={{ backgroundImage: `url(${PersonImg})` }}
            ></div>
            <div className="overflow-hidden">
              <h1 className="font-bold">James Jones</h1>
              <h1 className="text-grey-400 ellipsis">james.jones@gmail.com</h1>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <span>Email:</span>
            <span className="text-grey-400 ellipsis">
              james.jones@gmail.com
            </span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Phone:</span>
            <span className="text-grey-400">20703041</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Location:</span>
            <span className="text-grey-400">Buenos aires</span>
          </div>
          <div className="mt-8">
            <ProfileMenu
              value={menuItemSelected}
              onSelect={(value) => setMenuitemSelected(value)}
            >
              <ProfileMenuItem
                icon={<FontAwesomeIcon icon={faAddressCard} />}
                label="Profile Overview"
                value={1}
              />
              <ProfileMenuItem
                icon={<FontAwesomeIcon icon={faUser} />}
                label="Personal information"
                value={2}
              />
              <ProfileMenuItem
                icon={<FontAwesomeIcon icon={faEdit} />}
                label="Change Password"
                value={3}
              />
              <ProfileMenuItem
                icon={<FontAwesomeIcon icon={faEnvelope} />}
                label="Email settings"
                value={4}
              />
            </ProfileMenu>
          </div>
        </div>
        <div className="flex-grow rounded-md bg-white">
          <div className="flex justify-between py-4 px-8 items-center border-solid border-grey-100 border-b-4">
            <h1 className="font-bold">Change password</h1>
            <Button variant="contained">Save Changes</Button>
          </div>
          <div className="p-12">
            {menuItemSelected === 3 && <ChangePassword />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
