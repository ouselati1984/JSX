import logo from './logo.svg';
import './App.css';
import my_image from './imageInPublic.jpg';


function App() {
  return (
    <div className="App">
       <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">OUESLATI_AHMED</h1>
          <br />
          <img src="/imageInSrc.jpg" />
          <br />
          <img src={my_image} />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
