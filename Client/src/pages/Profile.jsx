import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";
import Navbar from "../components/dashboard/Navbar";

const Profile = () => {
  const { user, isAuthenticated, isloading } = useAuth0();

  if (isloading) {
    return <div> Loading... </div>;
  }
  return (
    isAuthenticated && (
      <div className="grid grid-cols-4 grid-rows-[0.2fr,0.3fr,2fr] gap-1 min-h-screen border-2 border-gray-400 bg-neutral-200">
        <Navbar />
        <div className="border rounded p-4 border-gray-400 col-span-3 row-span-2">
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
        </div>
        <div className="border-2 border-gray-400 row-span-2">
          <div className="flex justify-end items-end h-full">
            <img
              className="h-4/6 w-4/6"
              src="../../twemoji_hammer-and-wrench.svg"
              alt="hammer and wrench"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
