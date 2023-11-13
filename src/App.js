import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='content'>

        <div className='left'>
          <div className='heading'>
            <div className='title'>
              <img src={require('./assets/icons/green-leaf.png')}style={{width:40,height:40,position:'relative',top:3}} alt='logo'/>
              <h3>Fresh Farm</h3>
            </div>
            <h1>Welcome Back!</h1> 
            <div className='fontS'>
              <p className='fontP'>We source the healthiest and most beautiful plants to bring nature's finest to your home. We provide expert care advice to ensure your plants thrive</p>
              <form>
                <div className='inputs'>
                  <img src={require('./assets/icons/search.png')} style={{width:20,backgroundColor:'#1d4a36'}} alt='logo'/>
                  <button className='buttonS'>Login width Google</button>
                </div>
                <p>or</p>
                <div className='inputs'>
                  <img src={require('./assets/icons/gmail.png')} style={{width:20,backgroundColor:'#1d4a36'}} alt='logo'/>
                  <button className='buttonS'>Login width Email Address</button>
                </div>
              </form>
            </div>

          </div>
          <img src={require('./assets/icons/plant.png')} style={{'width':200,position:'relative',top:57}} alt='image'/>




        </div>
        <div className='right'>
          {/* <img src={require('./assets/icons/green.jpg')} alt=""/> */}
          <div className="box">
            <div className='login-content'>
              <h4>Please Enter Your Login Details</h4>
              <lable>Enter Email Address</lable><br/>
              <input type='email'/>
              <br/>
              <lable>Enter Password</lable><br/>
              <input type='password'/><br/>
              <p className='aLink'>Forget <a href="/">Password?</a></p>
              <button className='butt'>Login</button>
              <p>Don't have an account <a href='/'>Register</a></p>

            </div>

          </div>

        </div>
      </div>  
    </div>
  );
}

export default App;
