import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import Orders from './Orders';
import Payment from './Payment';
import {auth} from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStateValue } from "./StateProvider";


const promise = loadStripe("pk_test_51HfNk1LFGFWATMzYb4uDIO4AcW6hACDR0LyfTTYtJ6hPAWfNQNFWc89s9OwukvJ2UJCmNkaFjKNY6DMx4qkZfz1100UHWZqnvF");
function App() {

  const [ { }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  },[] );



  return (
    <Router>
    <div className="App">
   
      <Switch>

      <Route path="/orders">
               
               <Orders/>
            </Route>

      <Route path="/login">
               
               <  Login/>
            </Route>
    

        <Route path="/Checkout">
        <Header/>
           <Checkout/>
        </Route>

        <Route path="/payment">
        <Header/>
        <Elements stripe={promise}>
           <Payment/>
           </Elements>
        </Route>

      

        <Route path="/">
        <Header/>
      <Navbar/>
      <Home/>
      </Route>
      </Switch>
    </div>
     </Router> 
  );
}

export default App;
