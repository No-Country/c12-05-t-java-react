import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";

const Profile = () => {
  const { user, isAuthenticated, isloading } = useAuth0();

  if (isloading) {
    return <div> Loading...</div>;
  }
  return (
    isAuthenticated && (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center rounded-lg bg-transparent shadow-2xl w-3/12">
          <div className="w-full">
            <img
              className="bg-cover bg-center w-full rounded-t-md"
              src={user.picture}
              alt={user.name}
            />
          </div>
          <div className="flex flex-col gap-4 p-6">
            <h2>{user.name}</h2>
            <p> Email: {user.email}</p>
          </div>
        </div>
        <div className="">
          <LogoutButton />
        </div>
      </div>
    )
  );
};

export default Profile;
