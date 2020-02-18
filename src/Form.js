import React from "react"
import rn from "@codenamex/reference_number"

class Form extends React.Component{
	state = { referenceNumber : '123'}

	getReferenceNumber = (event) =>{
		event.preventDefault()
		const finnishrerencenumber = rn(this.state.referenceNumber)
		const internalReferenceNumber = rn(this.state.referenceNumber, true)
		this.setState({
			rnu: finnishrerencenumber,
			irnu: internalReferenceNumber
		})
	} 
	render(){
		return(
			<div><h1 className="finnishrerencenumber">Bank Reference number tool</h1>
			<span className="finnishrerencenumber">(c) Lennart Takanen</span>
				<form onSubmit={this.getReferenceNumber} >
					<span className="formtext">Generate RN:</span>
					<input 
						type="text"
						placeholder="Enter reference number"
						required
						value={this.state.referenceNumber}
						onChange={event => this.setState({ referenceNumber: event.target.value })}
					/>
					<button>Go!</button>
				</form>
					<span className="finnishrerencenumber">Finnish Reference Number: {this.state.rnu}</span>
					<span className="finnishrerencenumber">International Reference Number: {this.state.irnu}</span>
			</div>
		)
	}
}

export default Form 