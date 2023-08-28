import { createRoutesFromElements,createBrowserRouter,RouterProvider,Route,Link,NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails";
import CareerError from "./pages/careers/CareerError";
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>



      <Route path="help"  element={<HelpLayout/>}>
      <Route path="faq" element={<Faq/>}/>
      <Route path="contact" element={<Contact/>}  action={contactAction}/>
      </Route>
      <Route path="careers"  element={<CareersLayout/>}>
     
      <Route 
      index
       element={<Careers/>} 
       loader={careersLoader}
       errorElement={<CareerError/>}
       />
      <Route
      path=":id"
      element={<CareerDetails/>}
      loader={careerDetailsLoader}
      errorElement={<CareerError/>}
      />
      </Route>


      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)

function App() {
  return (

  // <header>
  //   <nav>
  //     <h1>JobArouter</h1>
  //     <NavLink to="/">Home</NavLink>
  //     <NavLink to="about">About</NavLink>
  //   </nav>

  // </header> 
  // <main>
  //   <Routes>
  //     <Route path="/" element={<Home />}/>
  //     <Route path="about" element={<About/>}/>
  //   </Routes>
  // </main>
  <RouterProvider router={router}/>
 
  )
}

export default App
