 import map from '../images/maps.png'
import location from '../images/Location.svg'

const Contact = () => {
  return (
    <>
    <section className='contact-sect'>
    <div className='header'>
    <h1 className='contact'>Contact Us</h1>
    <h6 className='header-txt'>Feel free to reach out for any enquiries or questions you might have.</h6>
    </div>
    <section className='input-section'>
      <div  className="container">
        <input type="text" className='name' placeholder='First name'/>
        <input type="text" className='name1' placeholder='Last name'/>
      </div>
      <div  className="container1">
        <input type="email" className='email' placeholder='Email'/>
        <input type="email" className='email1' placeholder='Repeat Email *'/>
      </div>
      <div className='message' >
        <textarea className='text' placeholder='Your message'/>
        
      </div>
      <div className='input-txt'>
        <div id='input'>
              <input type="checkbox" name="" id="" />
              <h3>I have read and confirm the <span id='span1'>Terms of Agreement </span></h3>    
          </div>
         
      </div>
    <h2><span id='span2'>*</span> Required </h2>
        <div className='right-btn'>
          <button className='right'>Send Message</button>
        </div>
        <div className='img1'>
          <img src={map} alt="" className='map'/>
          </div>
        <div className='imgg'>
        <img src={location} alt="" className='imgg1'/>
        <h1>SELECT LOCATION</h1>
          </div>
        <div className='address'>
          <div className='location'>
               
    <p>FULL ADDRESS:  4516, washington Ave London. Kentucky 39495</p></div>
        </div>
    </section>
    </section>
    </>
  )
}

export default Contact