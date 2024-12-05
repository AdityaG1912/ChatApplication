import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/chats" component={ChatPage} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
//cloudinary base api url
//https://api.cloudinary.com/v1_1/dk9igsmuf/image/upload
