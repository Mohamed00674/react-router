import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/help/Contact.jsx";
import Root from "./layouts/Root.jsx";
import Faq from "./pages/help/Faq.jsx";
import HelpLayout from "./layouts/HelpLayout.jsx";
import NotFound from "./pages/NotFound.jsx";
import CareersLayout from "./layouts/CareersLayout.jsx";
import Careers, { careersLoader } from "./pages/Careers/Careers.jsx";
import CareerDetails, {
  carrerDetails,
} from "./pages/Careers/CareerDetails.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
        <Route path="careers" element={<CareersLayout />}>
          <Route index element={<Careers />} loader={careersLoader}></Route>
          <Route
            path=":id"
            loader={carrerDetails}
            element={<CareerDetails />}
          ></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
