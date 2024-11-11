import logo from './logo.svg';
import './App.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
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

const fetchURL = 'https://api.quotable.io/random';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 0,
      quote: 'I am a god.',
      author: 'Kanye West'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
}

  colors = ['#475c6c', '#8a8583', '#eed7a1', '#f7efd2', '#cd8b62'];
  handleClick() {
    this.setState({
      color: Math.floor(Math.random() * (4 - 0 + 1) + 0)
    })
    const fetcher = async () => {
      const response = await fetch(fetchURL);
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      this.setState({
        quote: data.content,
        author: data.author
      })
    }
    fetcher()
  }
  
  render() {
    return (
      <div style={{backgroundColor: this.colors[this.state.color], width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 1s', flexDirection: 'column'}}>
        <div id='quote-box' style={{backgroundColor: 'white', borderRadius: 30, height: '50vh', width: '75vw', color: this.colors[this.state.color], display: 'flex', transition: 'all 1s', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 id='text' style={{textAlign: 'center'}}>{this.state.quote}</h1>
            <h2 id='author'>{this.state.author}</h2>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '65%'}}>
            <div style={{display: 'flex', gap: 30}}>
              <a id='tweet-quote' href="https://twitter.com/intent/tweet" target="_blank" style={{backgroundColor: this.colors[this.state.color], transition: 'all 1s'}}>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a style={{backgroundColor: this.colors[this.state.color], transition: 'all 1s'}}>
                <FontAwesomeIcon icon={faCoffee} />
              </a>
            </div>
            <button id="new-quote" onClick={this.handleClick} style={{backgroundColor: this.colors[this.state.color], transition: 'all 1s'}}>New quote</button>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
