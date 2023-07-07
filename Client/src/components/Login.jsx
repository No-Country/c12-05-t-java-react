
const Login = () => {
  return (
      <div>
        <h1 className="text-center">Login Page</h1>
        {/* form */}
        <form action="" method="">
          <label htmlFor="email" >Email:</label><br />
          <input type="email" id="email" name="email" required /><br/>
          <label htmlFor="password">Password:</label><br />
          <input type="password" id="password" name="password" minLength={6}
          pattern="[a-zA-Z0-9]{8,}" title="Must contain at
          least 8 characters and only letters or numbers."required/><br />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    )
}

export default Login;