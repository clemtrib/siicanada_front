import React from "react"
import Routes from "./routes"
import { Provider } from "./context"
import { ads } from "./careersData"

export default class App extends React.Component {
/* eslint-disable react/no-unused-state */
  constructor() {
    super()
    this.state = {
      jobsList: [],
      jobSelected: 0,
      loadJobsList: this.loadJobsList.bind(this),
      setJobSelected: this.setJobSelected.bind(this)
    }
  }

  setJobSelected(id) {
    this.setState({
      jobSelected: id
    })
  }
  
  loadJobsList() {
    this.setState({
      jobsList: ads
    })
  }
  /* eslint-enable react/no-unused-state */
  
  render() {
    return (
      <Provider value={this.state}>
        <Routes />
      </Provider>
    )
  }
}
