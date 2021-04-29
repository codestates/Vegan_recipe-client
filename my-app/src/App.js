import './App.css';
import { Component } from 'react';
import Sidebar from './component/sidebar';
import Topbar from './component/topbar';
import Main from './component/main';

class App extends Component {

  render() {
    return(
      <div className='App'>
        <Sidebar />
        <div className='right'>
          <Topbar />
          <Main />
        </div>
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
