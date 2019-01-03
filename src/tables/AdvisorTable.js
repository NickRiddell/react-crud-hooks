import React from 'react'

/*The ternary operation is used to map through the advisor data sent through and display
the properties for each advisor, or display a message if there are no advisors*/

const AdvisorTable = props => (
  <table>
    <thead>
      <tr>
        <th> Name </th>
        <th> Research Area </th>
        <th> Max Postgraduates </th>
        <th> Max Undergraduates </th>
        <th> Actions </th>
      </tr>
    </thead>
    <tbody > {
      props.advisors.length > 0 ? (
        props.advisors.map(advisor => (
          <tr key = { advisor.id }>
            <td > { advisor.name } </td>
            <td> { advisor.researcharea } </td>
            <td> { advisor.maxpostgraduates } </td>
            <td> { advisor.maxundergraduates } </td>
            <td>
              <button onClick = { () => {props.editRow(advisor)} } className = "button muted-button">
                Edit
              </button>
              <button onClick = { () => props.deleteAdvisor(advisor.id) } className = "button muted-button">
                Delete
              </button>
            </td>
          </tr>
        ))):(
          <tr>
            <td colSpan = {5}> No advisors </td>
          </tr>
        )}
    </tbody>
  </table>
)

export default AdvisorTable
