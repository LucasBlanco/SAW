import LinearProgress from "@material-ui/core/LinearProgress";
import AuthLayout from "auth/components/AuthLayout";
import React, { useEffect, useState } from "react";
import VerifyEmailIlustration from "../../assets/verify-email.svg";
import CheckIcon from "@material-ui/icons/Check";
import { AuthContextType } from "auth/services/AuthService";
import { useLocation } from "react-router-dom";
import { httpClient } from "shared/services/http/httpClient";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
interface Props {}

const VerifyEmailPage = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useQuery();
  useEffect(() => {
    let callback = params.get("callback")!;
    let signature = params.get("signature")!;
    httpClient.post(callback + "&signature=" + signature).then(() => {
      setIsLoading(false);
    });
  }, []);
  return (
    <AuthLayout
      ilustration={VerifyEmailIlustration}
      title="Verify Email"
      subtitle="Thank you for being part of Vadiun."
    >
      <div className="max-w-xl flex flex-col items-center">
        <h1 className="text-center font-bold text-2xl my-4">Verify email</h1>
        <div className="h-60">
          <div className={"transition" + (isLoading ? "" : " animate-shrink")}>
            <h2>Please wait while we validate your email</h2>
            <LinearProgress className="w-full my-4" />
          </div>
          <div
            className={
              !isLoading
                ? "flex flex-col items-center transition delay-300 duration-300 ease-in-out"
                : "transform scale-0"
            }
          >
            <h2>Your email has been verified!</h2>
            <div className="rounded-full bg-primary-600 p-4 text-white m-4">
              <CheckIcon />
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmailPage;
