// import './App.css';
// import {Switch,Route} from "react-router-dom";
// import Login from './pages/Login';
// import Register from './pages/Register';
// // import Login from "../pages/Login"
// // import "./style.scss";
// function App() {
//   return (
//     <Switch>
//        <Route exact path="/" component={Login} />
//        <Route exact path="/register" component={Register} />
//       {/* <Route exact path="/" component={} /> */}
//       {/* // <Route path="login" element={< />} /> */}
//           {/* <Route path="register" element={ />} /> */}
//     </Switch>
//   );
// }

// export default App;


import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import "./style.scss";
import { Switch, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  // console.log("currentUser==>",currentUser);
  const ProtectedRoute = ({ children }) => {
    // if (!currentUser) {
    //   // return <Navigate to="/login" />;
    // }

    return children
  };
  useEffect(()=>{
    console.log("first")
  })
  return (
    <Switch>
      <Route path="/">
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Switch>
  );
}

export default App;
