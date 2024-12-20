// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {darkmode: false}
  change = () => {
    this.setState(prevState => ({darkmode: !prevState.darkmode}))
  }
  render() {
    const {darkmode} = this.state
    return (
      <div className="bg">
        <div className={darkmode ? 'card-dark' : 'card-light'}>
          <h1 className={darkmode ? 'dark' : 'light'}>Click To Change Mode</h1>
          <button className="btn" onClick={this.change}>
            {darkmode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
