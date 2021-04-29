import logo_portalflix from './assets/svg/LogoP.svg'
import logo_sancor from './assets/svg/LogoS.svg'
import Cover from './components/Cover'
import Footer from './components/Footer'
import VideoList from './components/VideoList';

function App() {
  return (
    <div className="bg-black w-screen h-screen flex flex-col justify-between items-center p-5">
      <header className="flex flex-row justify-between w-full">
        <img src={logo_portalflix} className="h-8" alt="Portalflix logo" />
        <img src={logo_sancor} className="h-8" alt="Sancor Seguros logo" />
      </header>
      <main>
        <Cover />
        <VideoList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
