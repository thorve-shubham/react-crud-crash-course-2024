import React from "react";
import { ClipLoader } from "react-spinners";
type SpinnerProps = {
  loading: boolean;
};

export const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  const override = {
    display: "block",
    margin: "100px auto",
  };

  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
