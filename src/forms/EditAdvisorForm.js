import React, {
    useState, useEffect
}
from 'react'

const EditAdvisorForm = props => {
    const [advisor, setAdvisor] = useState(props.currentAdvisor)
        /*The Effect Hook lets the EditUserForm component know the props have changed, which would
        have been done before with componentDidUpdate. In the Effect Hook, a callback function is
        created that updates the advisor state with the new prop thats being sent through. You can
        tell React to skip applying an effect if certain values haven’t changed between re-renders.
        [ props ]*/
    useEffect(
        () => {
            setAdvisor(props.currentAdvisor)
        }, [props]
    )

    const handleInputChange = event => {
        const { name, value } = event.target
        setAdvisor({ ...advisor, [name]: value })
    }

    return (
      <form onSubmit = {
            event => {
                event.preventDefault()
                if (!advisor.name ||
                    !advisor.researcharea ||
                    !advisor.maxpostgraduates ||
                    !advisor.maxundergraduates)
                return
                props.updateAdvisor(advisor.id, advisor)
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
        <button> Update advisor </button>
        <button onClick = {() => props.setEditing(false)} className = "button muted-button" >Cancel </button>
      </form>
    )
}

export default EditAdvisorForm
