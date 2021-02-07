import AdCard from "ad/components/AdCard";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "shared/Button";
import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Dialog from "@material-ui/core/Dialog";
import AdCardContainer from "ad/components/AdCardContainer";

interface Props {}

const MyAds = (props: Props) => {
  const history = useHistory();
  const [verifyDeleteOpen, setVerifyDeleteOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col h-full p-10 container shadow-xl overflow-auto hide-scroll">
        <div className="justify-between flex mb-10">
          <h2 className="text-xl">My ads</h2>
          <Button
            variant="contained"
            onClick={() => history.push("/main/create-ad")}
          >
            Post an ad
          </Button>
        </div>
        <div>
          <div className="flex container h-full items-center flex-wrap ">
            <div className="w-full md:w-1/2 lg:w-1/3 p-5 box-border flex-shrink-0 relative">
              <AdCardContainer
                toolbar={
                  <>
                    <Button shape="circle">
                      <CreateIcon />
                    </Button>
                    <Button
                      shape="circle"
                      onClick={(e) => {
                        e.stopPropagation();
                        setVerifyDeleteOpen(true);
                      }}
                    >
                      <DeleteOutlineIcon />
                    </Button>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={verifyDeleteOpen}
        onClose={() => setVerifyDeleteOpen(false)}
      >
        <div className="p-8">
          <p className="text-lg font-bold">
            Are you sure you want to delete this ad?
          </p>
          <div className="flex justify-end mt-10 gap-2">
            <Button onClick={() => setVerifyDeleteOpen(false)}>Cancel</Button>
            <Button variant="contained">OK</Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MyAds;
