import React, {
    useState
}
from 'react'

const AddAdvisorForm = props => {

    /*Here some state, except this state is just temporary, for keeping track of what’s
    currently in the form. Initial state is created with empty values, and the advisor
    state is set to the empty values. Having initial state in a variable is useful, as
    once the form is submitted, it can be returned it to the initial, empty value.*/
    const initialFormState = {
        id: null,
        name: '',
        researcharea: '',
        maxpostgraduates: '',
        maxundergraduates: ''
    }
    const [advisor, setAdvisor] = useState(initialFormState)

    /*This function updates the state within the form. Object destructuring allows
    for easy acces to the name (key) and value from the form. The advisor is then set
    as before on the App component, except this time using computed property names to
    dynamically set the name (using [name]) and value.*/
    const handleInputChange = event => {
          const { name, value } = event.target

          setAdvisor({ ...advisor, [name]: value })
    }
    /*Validation added to make sure empty values cannot be submitted, and sent the advisor
    through to the add function. The setter is then used to reset the form to its initial
    value after successful submission.*/
    return (
      <form onSubmit = {
            event => {
                event.preventDefault()
                if (!advisor.name ||
                    !advisor.researcharea ||
                    !advisor.maxpostgraduates ||
                    !advisor.maxundergraduates)
                return

                props.addAdvisor(advisor)
                setAdvisor(initialFormState)
            }
      }>
        <label> Name </label>
        <input type = "text" name = "name" value = {advisor.name} onChange = {handleInputChange}/>
        <label> Research Area </label>
        <select name = "researcharea" value = {advisor.researcharea} onChange = {handleInputChange}>
          <option value = ""> Please select </option>
          <option value = "Accounting and Finance"> Accounting and Finance </option>
          <option value = "Entrepreneurship and Innovation"> Entrepreneurship and Innovation </option>
          <option value = "Management Science and Business Economics">
            Management Science and Business Economics
          </option>
          <option value = "Marketing"> Marketing </option>
          <option value = "Organisation Studies"> Organisation Studies </option>
          <option value = "Strategy"> Strategy </option>
        </select>
        <label> Max Postgraduates </label>
        <input
          type = "number"
          name = "maxpostgraduates"
          value = {advisor.maxpostgraduates}
          onChange = {handleInputChange}
        />
        <label> Max Undergraduates </label>
        <input
          type = "number"
          name = "maxundergraduates"
          value = {advisor.maxundergraduates}
          onChange = {handleInputChange}
        />
        <button> Add new advisor </button>
      </form>
    )
}

export default AddAdvisorForm
