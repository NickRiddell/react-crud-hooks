import React from 'react'

const AdvisorTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Research Area</th>
        <th>Max Postgraduates</th>
        <th>Max Undergraduates</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.advisors.length > 0 ? (
        props.advisors.map(advisor => (
          <tr key={advisor.id}>
            <td>{advisor.name}</td>
            <td>{advisor.researcharea}</td>
            <td>{advisor.maxpostgraduates}</td>
            <td>{advisor.maxundergraduates}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No advisors</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default AdvisorTable
