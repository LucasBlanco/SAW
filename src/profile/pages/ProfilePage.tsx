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
} from "@fortawesome/free-solid-svg-icons";
import ProfileMenu from "profile/components/ProfileMenu";
import ProfileMenuItem from "profile/components/ProfileMenuItem";
import ChangePassword from "./ChangePassword";
import { Button } from "@vadiun/react-components";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Card from "../../shared/components/Card/Card";
import PageContainer from "../../layout/components/PageContainer";
interface Props {}

const ProfilePage = (props: Props) => {
  const [menuItemSelected, setMenuitemSelected] = useState(1);

  return (
    <>
      <PageHeader title="Profile" subtitle="Example profile" />
      <PageContainer>
        <Card className="md:w-1/3 2xl:w-1/4">
          <div className="p-8">
            <div className="flex space-x-2 justify-between">
              <div
                className="bg-cover bg-center w-28 h-28 rounded-md  flex-shrink-0"
                style={{ backgroundImage: `url(${PersonImg})` }}
              ></div>
              <div className="overflow-hidden">
                <h1 className="font-semibold text-gray-600">James Jones</h1>
                <h1 className="text-gray-400 ellipsis">
                  james.jones@gmail.com
                </h1>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <span className="text-gray-600 font-semibold">Email:</span>
              <span className="text-gray-400 ellipsis">
                james.jones@gmail.com
              </span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-gray-600 font-semibold">Phone:</span>
              <span className="text-gray-400">20703041</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-gray-600 font-semibold">Location:</span>
              <span className="text-gray-400">Buenos aires</span>
            </div>
            <div className="mt-8">
              <ProfileMenu
                value={menuItemSelected}
                onSelect={(value) => setMenuitemSelected(value)}
              >
                <ProfileMenuItem
                  icon={<FontAwesomeIcon icon={faAddressCard} size="lg" />}
                  label="Profile Overview"
                  value={1}
                />
                <ProfileMenuItem
                  icon={<FontAwesomeIcon icon={faUser} size="lg" />}
                  label="Personal information"
                  value={2}
                />
                <ProfileMenuItem
                  icon={<FontAwesomeIcon icon={faEdit} size="lg" />}
                  label="Change Password"
                  value={3}
                />
                <ProfileMenuItem
                  icon={<FontAwesomeIcon icon={faEnvelope} size="lg" />}
                  label="Email settings"
                  value={4}
                />
              </ProfileMenu>
            </div>
          </div>
        </Card>
        <Card
          className="flex-grow"
          title="Change password"
          toolbar={
            <Button variant="light" color="blue">
              Save Changes
            </Button>
          }
        >
          <div className="p-12">
            {menuItemSelected === 3 && <ChangePassword />}
          </div>
        </Card>
      </PageContainer>
    </>
  );
};

export default ProfilePage;
