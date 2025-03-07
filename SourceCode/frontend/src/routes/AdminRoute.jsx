import React from "react";
import { useUser } from "../context/UserContext";
import Unauthorized from "../components/Unauthorized/Unauthorized";

const AdminRoute = ({ children }) => {
  const { user, isAdmin } = useUser();

  if (!isAdmin) {
    return <Unauthorized />
  }

  return children;
};

export default AdminRoute;
