import bit from '../images/bit.png'

const SignUp = () => {
  return (
    <>
    <section className='signup'>
      <div className='form'>
      <h1 className='contact'>Sign Up</h1>
    <p>You can easily sign up from this screen here:</p>
    <input type="text" className='form1' placeholder='First name'/>
     <input type="text" className='form1' placeholder='Last name'/>
     <input type="email" className='form1' placeholder='Email'/>
    <input type="email" className='form1' placeholder='Repeat Email*'/>
      <textarea id="reason" placeholder='Reason you want to join'></textarea>
      <div className='terms'>
       <div className='check'>
        <input type="checkbox" name="" id="check" />
       <h2> I confirm the <span>Terms</span> </h2>
      </div>
      <button className='right'>Send Application</button>
      </div>
      </div>
      <div className='bit'>
        <img src={bit} alt="" className='bit1'/>
         </div>
        
    </section>
    </>
  )
}

export default SignUp