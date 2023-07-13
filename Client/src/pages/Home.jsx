import LogoutButton from './Logout'
import Profile  from './Profile'

export const Home = () => {
  return (
    <>
      <h1>Welcome to our app!</h1>
      <LogoutButton />
      <Profile />
    </>
  );
}