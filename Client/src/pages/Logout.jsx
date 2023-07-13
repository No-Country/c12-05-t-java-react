import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button className="bg-[#B89754] hover:bg-[#826326] transition-all text-white text-xl font-medium p-4 px-14 rounded-md shadow-sm shadow-black m-auto mt-32" onClick= {() => logout({ logoutParams: { returnTo: window.location.origin }})}>
      Log Out
    </button>
  )
}

export default LogoutButton;