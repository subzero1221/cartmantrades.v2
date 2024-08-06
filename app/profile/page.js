import Link from "next/link";
import ProfileInfo from "../_components/ProfileInfo";
import { getUserData } from "../_utils/actions";
import { cookies } from "next/headers";
import ProfileUpdate from "../_components/ProfileUpdate";
import ChangePasswordForm from "../_components/ChangePasswordForm";

async function Profile() {
  const jwt = cookies().get("jwt");

  let user = "";

  if (jwt !== "OUT") {
    user = await getUserData();
  }
  return jwt === "OUT" ? (
    <div>
      <h1>Log/Sign in to get accesss</h1>
      <Link href="/login">Doing now!</Link>
    </div>
  ) : (
    <div className="w-1/2 my-2 space-y-2">
      <ProfileInfo user={user} />
      <ProfileUpdate user={user} />
      <ChangePasswordForm />
    </div>
  );
}

export default Profile;
