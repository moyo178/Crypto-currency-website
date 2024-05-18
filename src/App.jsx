import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';
import tech from './images/tech.png';
import bit from './images/bit.svg'
import bit1 from './images/bit1.svg';
import bit2 from './images/bit2.svg';
import bit3 from './images/bit3.svg';

function HomeContent() {
  return (
  <>
    <section className='content'>
      <div className='content-txt'>
        <h1>Sell & Buy Crypto with ease</h1>
        <p>This is going to be the most exciting crypto services you have ever tried in your life keep going</p>
       <a href="./login"><button className='btn3'>Get started now</button></a>
      </div>
      <div  className="content-img">
        <img src={tech} alt="" className='img'/>
      </div>
    </section>
    <section className='box'>
        <div className='box1'>
          <img src={bit} alt="" className='img1'/>
          <h1 className='btc'>BTC/UTC <div id='box2' ><span>8.7%</span></div></h1>
          <h1 className='amount'>36,272.28</h1>
          <h5>31,211.02</h5>
        </div>

        <div className='boxx1'>   
          <img src={bit1} alt="" />
          <h1 className='btc'>BTC/UTC <div id='box3' ><span>3.7%</span></div></h1>
          <h1 className='amount'>21,342.28</h1>
          <h5>11,246.02</h5>
        </div>

        <div className='box1'>
          <img src={bit2} alt="" />
          <h1 className='btc'>BTC/UTC <div id='box4' ><span>5.7%</span></div></h1>
          <h1 className='amount'>21,452.28</h1>
          <h5>12,243.02</h5>
        </div>

        <div className='box1'>
          <img src={bit3} alt="" />
          <h1 className='btc'>BTC/UTC <div id='box5' ><span>2.7%</span></div></h1>
          <h1 className='amount'>65,795.28</h1>
          <h5>52,345.02</h5>
        </div>                         
    </section>

    {/* FOR IPAD SCREEN */}
    <section className='ipad-box'>
      <div className='ipad-boxx'>
        <div className='box1'>
          <img src={bit} alt="" className='img1'/>
          <h1 className='btc'>BTC/UTC <div id='box2' ><span>8.7%</span></div></h1>
          <h1 className='amount'>36,272.28</h1>
          <h5>31,211.02</h5>
        </div>

        <div className='boxx1'>
          <img src={bit1} alt="" />
          <h1 className='btc'>BTC/UTC <div id='box3' ><span>3.7%</span></div></h1>
          <h1 className='amount'>21,342.28</h1>
          <h5>11,246.02</h5>
        </div>
        </div>
       <div className='ipad-box1'>
       <div className='boxx1'>
          <img src={bit2} alt="" />
          <h1 className='btc'>BTC/UTC <div id='box4' ><span>5.7%</span></div></h1>
          <h1 className='amount'>21,452.28</h1>
          <h5>12,243.02</h5>
        </div>
          
        <div className='box1'>
          <img src={bit3} alt="" />
          <h1 className='btc'>BTC/UTC <div id='box5' ><span>2.7%</span></div></h1>
          <h1 className='amount'>65,795.28</h1>
          <h5>52,345.02</h5>
        </div>  
        </div> 
 
        </section>                     

    </>
  );
  
}

function App() {
  return ( 
    <Router>
      <section className='bg'>
        <div>

          <Header />
          <Routes> 
            <Route path="/" element={<HomeContent />} />      
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/FAQ" element={<FAQ />} />
          </Routes>
        </div>
      </section>
    </Router>
  );
}

export  default App;