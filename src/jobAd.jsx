import React from "react"

import style from "./app.css"

export default class JobAd extends React.Component {
    constructor() {
        super()
        this.state = {
            contracts: ["Permanent", "Temporaire", "VIE", "Stage"],
            contract: 0
        }
        this.changeContract = this.changeContract.bind(this)
    }

    componentWillMount() {
        const contract = this.props.contract
        this.setState({ contract })
    }

    getContract() {
        return this.state.contracts[this.state.contract]
    }

    changeContract() {
        const contract = (this.state.contract + 1) % this.state.contracts.length
        this.setState({ contract })
    }

    render() {
        const year = this.props.createdAt.slice(0, 4)
        const month = this.props.createdAt.slice(4, 6)
        const day = this.props.createdAt.slice(6, 8)
        const createdAt = `${year}-${month}-${day}`
        return (
            <div className={`${style.middle} ${style.jobAddDetail}`}>
                <h3 className={style.arrow}>{this.props.title}</h3>
                <p>Created at {createdAt}</p>
                <p>{this.getContract()}</p>
                <button onClick={this.changeContract} >Change contract type </button>
                <p>Description: {this.props.description}</p>
            </div>
        )
    }
}
