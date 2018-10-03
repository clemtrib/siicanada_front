import React from "react"

export default class JobAdListItem extends React.Component {
    constructor() {
        super()
        this.state = {
            contracts: ["Permanent", "Temporaire", "VIE", "Stage"],
            contract: 0
        }
    }

    componentWillMount() {
        const contract = this.props.contract
        this.setState({ contract })
    }

    getContract() {
        return this.state.contracts[this.state.contract]
    }

    render() {
        const year = this.props.createdAt.slice(0, 4)
        const month = this.props.createdAt.slice(4, 6)
        const day = this.props.createdAt.slice(6, 8)
        const createdAt = `${year}-${month}-${day}`
        return (
            <tr id={this.props.id}>
                <td>{this.props.title}</td>
                <td>{createdAt}</td>
                <td>{this.getContract()}</td>
            </tr>
        )
    }
}
