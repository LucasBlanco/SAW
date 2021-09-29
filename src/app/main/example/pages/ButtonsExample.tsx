import { Button } from "@vadiun/react-components";
import { PageHeader, PageContainer } from "layout/components";
import { Card } from "shared/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const ButtonsExample = () => {
  return (
    <>
      <PageHeader title="Examples" />
      <PageContainer>
        <Card className="w-full">
          <div className="p-6 space-y-4 justify-center flex-col items-center flex">
            <div className="flex space-x-4">
              <Button variant="contained" color="blue">
                Blue
              </Button>
              <Button variant="contained" color="red">
                Red
              </Button>
              <Button variant="contained" color="orange">
                Orange
              </Button>
              <Button variant="contained" color="green">
                Green
              </Button>
            </div>
            <div className="flex space-x-4">
              <Button variant="light" color="blue">
                Blue
              </Button>
              <Button variant="light" color="red">
                Red
              </Button>
              <Button variant="light" color="orange">
                Orange
              </Button>
              <Button variant="light" color="green">
                Green
              </Button>
            </div>
            <div className="flex space-x-4">
              <Button variant="text" color="blue">
                Blue
              </Button>
              <Button variant="text" color="red">
                Red
              </Button>
              <Button variant="text" color="orange">
                Orange
              </Button>
              <Button variant="text" color="green">
                Green
              </Button>
            </div>
            <div className="flex space-x-4">
              <Button variant="outlined" color="blue">
                Blue
              </Button>
              <Button variant="outlined" color="red">
                Red
              </Button>
              <Button variant="outlined" color="orange">
                Orange
              </Button>
              <Button variant="outlined" color="green">
                Green
              </Button>
            </div>

            <div className="flex space-x-4">
              <Button variant="contained" disabled={true} color="blue">
                Blue
              </Button>
              <Button variant="outlined" disabled={true} color="red">
                Red
              </Button>
              <Button variant="light" disabled={true} color="orange">
                Orange
              </Button>
              <Button variant="text" disabled={true} color="green">
                Green
              </Button>
            </div>
            <div className="flex space-x-4">
              <Button variant="contained" color="blue">
                <FontAwesomeIcon className="mr-1" icon={faUser} /> Blue
              </Button>
              <Button variant="outlined" color="red">
                <FontAwesomeIcon className="mr-1" icon={faUser} />
                Red
              </Button>
              <Button variant="light" color="orange">
                <FontAwesomeIcon className="mr-1" icon={faUser} />
                Orange
              </Button>
              <Button variant="text" color="green">
                <FontAwesomeIcon className="mr-1" icon={faUser} />
                Green
              </Button>
            </div>
            <div className="flex space-x-4">
              <Button variant="contained" color="blue">
                <FontAwesomeIcon icon={faUser} />{" "}
              </Button>
              <Button variant="outlined" color="red">
                <FontAwesomeIcon icon={faUser} />
              </Button>
              <Button variant="light" color="orange">
                <FontAwesomeIcon icon={faUser} />
              </Button>
              <Button variant="text" color="green">
                <FontAwesomeIcon icon={faUser} />
              </Button>
            </div>
            <div className="flex space-x-4">
              <Button variant="contained" color="blue" shape="circle">
                <FontAwesomeIcon icon={faUser} />{" "}
              </Button>
              <Button variant="outlined" color="red" shape="circle">
                <FontAwesomeIcon icon={faUser} />
              </Button>
              <Button variant="light" color="orange" shape="circle">
                Orange
              </Button>
              <Button variant="text" color="green" shape="circle">
                Green
              </Button>
            </div>
          </div>
        </Card>
      </PageContainer>
    </>
  );
};
