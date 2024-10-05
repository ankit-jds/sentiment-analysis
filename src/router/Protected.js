import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Protected = ({ ...props }) => {
  const navigate = useNavigate();
  let user = props.user;

  if (!user) {
    navigate("/login");
  }
  
  return (
    <div>
      {!props.user && <Navigate to={"/login"} />}
    </div>
  );
};

export default Protected;
