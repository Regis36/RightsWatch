import Login from "./pages/login/Login";
import {createBrowserRouter,RouterProvider, Route, Outlet, Navigate} from "react-router-dom"
import Register from "./pages/register/Register";
import Navbar from "./components/Navbar/Navbar";
import Leftbar from "./components/LeftBar/Leftbar";
import Rightbar from "./components/RightBar/Rightbar"; 
import Userfeed from "./pages/userpage/Userfeed";
import Profile from "./pages/profile/Profile"; 
import Explore from "./pages/explore/Explore"; 
import "./style.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";



function App() {
  
const {currentUser} = useContext(AuthContext)
  const {darkMode} = useContext(DarkModeContext)
  console.log(darkMode)

  const Layout = ()=>{
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display:"flex"}}>
          <Leftbar/>
          <div style= {{flex:6}}> 
            <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
    );
  };
// children will be the protected layout: homepage and profile page
//if there is no currentuser, we will not see the layout, else: the layout will show 
//thus, making the route protected 

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){ 
      return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/", 
      element: (
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
      ), 
      children: [
        {
          path: "/",
          element: <Userfeed/>
        },
        {

          path: "/profile/:id",
          element: <Profile/>
        }
      ]
    }, 
    {
      path: "/login", 
      element: <Login/>
    }, 
    {
      path: "/register", 
      element: <Register/>
    }, 
    {
      path: "/explore", 
      element: <Explore/>
    }, 
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}/>

      {/* <BrowserRouter>
        <Routes>
          <Route path ="/" element = {<Layout/>} children={ path = "/" element={<Userfeed/>}} />
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/register" element = {<Register/>}/>

        </Routes>
      </BrowserRouter>
      <Login/> */}
    </div>
  );
}

export default App;
