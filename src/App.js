import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
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
        <div>
            <Header/>
            {/*<Routes>*/}
            {/*    <Route path="/" exact element={<Home/>} />*/}
            {/*    <Route path="/" exact element={<Clients/>} />*/}
            {/*    <Route path="/" exact element={<Blog/>} />*/}
            {/*    <Route path="/" exact element={<Services/>} />*/}
            {/*    <Route path="/contact-us" exact element={<Contact/>} />*/}
            {/*    <Route path="/" exact element={<Subscribe/>} />*/}
            {/*</Routes>*/}

            <Home/>
            <Clients/>
            <Blog/>
            <Services/>
            <Contact/>
            <Subscribe/>
            <Footer/>
            {/*<Routes>*/}
            {/*    <Route path="/" element={<Home/>}/>*/}
            {/*    <Route path="/nav" element={<Header/>}/>*/}
            {/*</Routes>*/}
        </div>
    );
}

export default App;
