import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Navigate,
} from "react-router-dom";
import FinalDesign from "./pages/FinalDesign";
import LiveEvent from "./pages/LiveEvent";
import PerticularEventB from "./pages/PerticularEventB";
import LandingDesign from "./pages/LandingDesign";
import PerticularEvent from "./pages/PerticularEvent";
import SpeakersPage from "./pages/SpeakersPage";
import SignIn from "./pages/SignIn";
import EventListing1 from "./pages/EventListing";
import ProfilePage from "./pages/ProfilePage";
import SearchBar from "./pages/SearchBar";
import LogIn from "./pages/LogIn";
import RefrshHandler from "./RefrshHandler";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/live-event":
        title = "";
        metaDescription = "";
        break;
      case "/perticular-event-b":
        title = "";
        metaDescription = "";
        break;
      case "/landing-design-a-2":
        title = "";
        metaDescription = "";
        break;
      case "/perticular-event-a":
        title = "";
        metaDescription = "";
        break;
      case "/categories-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/event-listing":
        title = "";
        metaDescription = "";
        break;
      case "/profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/search-bar":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }
  console.log(isAuthenticated,"!!!!2")

  return (
    <>
    <RefrshHandler setIsAuthenticated={setIsAuthenticated} />

    
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path='/' element={<PrivateRoute element={<FinalDesign />} />} />
      <Route path="/live-event" element={<PrivateRoute element={<LiveEvent />} />} />
      <Route path="/perticular-event-b" element={<PrivateRoute element={<PerticularEventB />} />} />
      <Route path="/landing-design-a-2" element={<PrivateRoute element={<LandingDesign />} />} />
      <Route path="/perticular-event-a" element={<PrivateRoute element={<PerticularEvent />} />} />
      <Route path="/categories-page" element={<PrivateRoute element={<SpeakersPage />} />} />
      <Route path="/event-listing" element={<PrivateRoute element={<EventListing1 />} />} />
      <Route path="/profile-page" element={<PrivateRoute element={<ProfilePage />} />} />
      <Route path="/search-bar" element={<PrivateRoute element={<SearchBar />} />} />
    </Routes>
    </>
  );
}
export default App;
