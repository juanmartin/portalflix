import logo_portalflix from './assets/svg/LogoP.svg'
import logo_sancor from './assets/svg/LogoS.svg'
import Cover from './components/Cover'
import Footer from './components/Footer'
import VideoList from './components/VideoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo_portalflix} className="App-logo" alt="Portalflix logo" />
        <img src={logo_sancor} className="App-logo" alt="Sancor Seguros logo" />
      </header>
      <Cover />
      <VideoList />
      <Footer />
    </div>
  );
}

export default App;
