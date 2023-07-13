import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isloading } = useAuth0();

  if(isloading){
    return <div> Loading...</div>
  }
  return(
    
    isAuthenticated &&
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p> Email: {user.email}</p>
    </div>
  )
}

export default Profile;