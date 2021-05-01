import logo_portalflix from './assets/svg/LogoP.svg'
import logo_sancor from './assets/svg/LogoS.svg'
import Footer from './components/Footer'
import VideoList from './components/VideoList'
import videos from './assets/videos.json'
import Carousel from './components/Carousel'

function App() {
  return (
    <div className="bg-black flex flex-col justify-between items-center">
      <header className="p-6 z-10 flex flex-row justify-between w-full bg-gradient-to-b from-black to-transparent">
        <img src={logo_portalflix} className="h-8" alt="Portalflix logo" />
        <img src={logo_sancor} className="h-8" alt="Sancor Seguros logo" />
      </header>
      <div className="w-full overflow-hidden -mt-20">
        <Carousel videos={videos} />
      </div>
      <main className="sm:container w-11/12 pb-16 border-b border-gray-700">
        <VideoList videos={videos} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
