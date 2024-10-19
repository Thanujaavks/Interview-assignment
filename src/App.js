import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./pages/home/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Subscribe from "./pages/subscribe/subscribe";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contact/contact";
import Services from "./pages/services/services";
import Clients from "./pages/clients/clients";

function App() {
    return (
        <>
            <Header/>
            <Home/>
            <Clients/>
            <Blog/>
            <Services/>
            <Contact/>
            <Subscribe/>
            <Footer/>
        </>
    );
}

export default App;
