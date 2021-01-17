import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my site! Er-ramani y Sofi with CI/CD Amplify
        </p>
        <p>We now have authentication powered by amplify auth</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AmplifySignOut/>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
