import './App.css'
import About from './components/about/about'
import Banner from './components/banner/banner'
import Footer from './components/footer/footer'
import Gallery from './components/gallery/gallery'
import Header from './components/header/header'
import Services from './components/services/services'

function App() {
    return (
        <>
            <Header />
            <Banner />
            <About />
            <Services />
            <Gallery />
            <Footer />
        </>
    )
}

export default App