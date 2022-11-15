import './App.css';
import Profile from "./images/profile.png";
import Email from "./images/email.png";
import Pass from "./images/pass.jpg";

function App() {
  return (
    <div className="main">
        <div className="sub-main">
            <div>
              <div className='imgs'>
                <div className='container-image'>
                  <img src={Profile} alt="profile" className='profile-img'/>

                </div>
              </div>

              <div>
                <h1>Login Here</h1>
              <div>
                  <img src={Email} alt="email" className='email-pass'/>
                  <input type="email" placeholder="username" className="name" />
              </div>
              <div className='sec-input'>
                  <img src={Pass} alt="pass" className='email-pass'/>
                  <input type="password" placeholder="password" className="name" />
              </div>
              <div>
              <button>Login</button>
              </div>
              <p className='link'>
                <a href='#'>Forget password ?</a> Or <a href='#'>Sign Up</a>
              </p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;