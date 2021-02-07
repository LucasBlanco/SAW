import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import AdContact from "./AdContact";
import AdCard from "./AdCard";
import { useHistory } from "react-router-dom";
interface Props {
  toolbar?: React.ReactNode;
}

const AdCardContainer = (props: Props) => {
  const history = useHistory();
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <div className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
        <AdCard
          onContact={() => setContactOpen(true)}
          onShowDetails={() => history.push("/main/ad-page")}
          toolbar={props.toolbar}
        />
      </div>
      <Dialog open={contactOpen} onClose={() => setContactOpen(false)}>
        <AdContact />
      </Dialog>
    </>
  );
};

export default AdCardContainer;
