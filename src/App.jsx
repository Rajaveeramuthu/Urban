

import AboutUs from "./component/About us/aboutus";
import ContactUs from "./component/contactus/contactus";
import Form from "./component/form/form"
import Footer from "./component/shared/footer/footer"
import Navbar from "./component/shared/nav/nav"
import { Route, Routes } from 'react-router-dom';
import Homepage from "./component/Home/home";



function App() {

  return (
    <>
      < Navbar />
      <Routes>
      <Route path='/' element={<Homepage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/report' element={<Form />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App

