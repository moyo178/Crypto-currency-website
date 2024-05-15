import G from '../images/G.svg'
import gmail from '../images/gmail.svg'
import image from '../images/Image.png'

const Login = () => {
  return (
    <>
    <section className='main'>
      <div className='main-txt'>
      <h1 className='contact'>Login</h1>
      <h2>You can login via these options right there</h2>
      <div className='sub-main'>
        <button className='btn4'><img src={G} alt="" className='G'/>Login with Google</button> 
        <button className='btn5'><img src={gmail} alt="" className='G'/>Login with Email</button>
      </div>
      <h2>Havent`t got an account yet?<a href="./signUp " className='A'>Sign Up</a>  now</h2>
      </div>
          <div className='img2'>
            <img src={image} alt="" className='stock'/>
          </div>
    </section>
    </>
  )
}

export default Login