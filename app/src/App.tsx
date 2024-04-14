import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from '../src/pages/Dashboard';
import Login from '../src/pages/Login';
import Layout from '../src/components/leyouts/SideMenu'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'jotai';

function App() {
  return (
    <Provider>
      <Layout>
        <Router>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">dashboard</Link>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
              </ul>
            </nav> */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </Layout>
    </Provider>
  );
}

export default App;
