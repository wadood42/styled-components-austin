import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {} from "./components/AuthProvider";
import NoMatch from "./components/NoMatch";
import styled from "styled-components";
import { AuthProvider } from "./components/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <Wrapper>
        <Router>
          <Switch>
            <Route
              exact
              path='/'
              children={(props: any) => <Home {...props} />}
            />

            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    </AuthProvider>
  );
}

const Wrapper = styled.div`
  background: #ecc17a;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export default App;
