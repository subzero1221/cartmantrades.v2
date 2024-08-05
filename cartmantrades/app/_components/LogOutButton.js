"use client";
import { HiPower } from "react-icons/hi2";
import { logOut } from "../_utils/actions";

function LogOutButton({ handleLogout }) {
  return (
    <button className="ml-4" onClick={handleLogout}>
      <HiPower />
    </button>
  );
}

export default LogOutButton;
