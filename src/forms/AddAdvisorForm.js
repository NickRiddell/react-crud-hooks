import React, { useState } from 'react'

const AddAdvisorForm = props => {

	const initialFormState = { id: null, name: '', researcharea: '', maxpostgraduates: '', maxundergraduates: '' }
	const [ advisor, setAdvisor ] = useState(initialFormState)

	const handleInputChange = event => {
  const { name, value } = event.target

  setAdvisor({ ...advisor, [name]: value })
}

	return (
		<form
			  onSubmit={event => {
			    event.preventDefault()
			    if (!advisor.name ||
							!advisor.researcharea ||
							!advisor.maxpostgraduates ||
							!advisor.maxundergraduates)
					return

			    props.addAdvisor(advisor)
			    setAdvisor(initialFormState)
			  }}
			>
			<label>Name</label>
			<input type="text" name="name" value={advisor.name} onChange={handleInputChange} />
			<label>Research Area</label>
			<select name="researcharea" value={advisor.researcharea} onChange={handleInputChange} >
				<option value="">Please select</option>
			  <option value="Accounting and Finance">Accounting and Finance</option>
			  <option value="Entrepreneurship and Innovation">Entrepreneurship and Innovation</option>
			  <option value="Management Science and Business Economics">Management Science and Business Economics</option>
			  <option value="Marketing">Marketing</option>
				<option value="Organisation Studies">Organisation Studies</option>
				<option value="Strategy">Strategy</option>
			</select>
			<label>Max Postgraduates</label>
			<input type="number" name="maxpostgraduates" value={advisor.maxpostgraduates} onChange={handleInputChange} />
			<label>Max Undergraduates</label>
			<input type="number" name="maxundergraduates" value={advisor.maxundergraduates} onChange={handleInputChange} />
			<button>Add new advisor</button>
		</form>
	)
}

export default AddAdvisorForm
