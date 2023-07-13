import ImgLanding from '../assets/img/ImgLanding.png'
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../assets/img/logo.png'
import ImgLanding from '../assets/img/ImgLanding.png'

const Landing = () => {
  const  { loginWithPopup, user } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginWithPopup();
  };

  useEffect(() => {
    try {
      if (user) {
        navigate('/dashboard')
        console.log("Exito")
      }
    } catch (error) {
      console.log(error);
    }

  }, [user]);


const Landing = () => {
  const  { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <section className='bg-gray-500' >

      <div className='flex max-w-screen h-screen bg-[#353535] m-auto'>
        <div className='relative w-[52.5rem] h-full'>
            <div className='absolute top-60 left-48 w-[24rem] h-[22rem]' >
              <h1 className='text-[#FFFFFF] text-[40px] font-medium leading-normal pr-4 shadow-md ' >
                Controla tu inventario con precisión. Potencia tu ferretería con nuestro servicio web.
              </h1>
            </div>
            <img className='w-full h-full object-cover opacity-30' src={ImgLanding} alt="ImgLanding" />
          </div>
          <div className='w-[37.5rem] h-full'>
            <div className='w-3/4 h-24 m-auto mt-24'>
              <img className='w-full h-full object-contain' src={logo} alt="logo" />
            </div>
            <h2 className='text-[#FFFFFF] text-6xl font-semibold text-center tracking-wide mt-20' >Bienvenido!</h2>
            <div className='flex justify-center'>

              <button className='bg-[#B89754] hover:bg-[#826326] transition-all text-white text-xl font-medium p-4 px-14 rounded-md shadow-sm shadow-black m-auto mt-32' onClick={handleLogin}>
                Ingresar
              </button>
            
            </div>
          </div> 
      </div>
    </section>
  )
};

export default Landing