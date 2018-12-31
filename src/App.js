import React, { useState } from 'react'
import AdvisorTable from './tables/AdvisorTable'
import AddAdvisorForm from './forms/AddAdvisorForm'
import EditAdvisorForm from './forms/EditAdvisorForm'

const App = () => {
  const advisorsData = [
	    { id: 1, name: 'Bob', researcharea: 'Accounting and Finance', maxpostgraduates: 9, maxundergraduates: 9 },
	    { id: 2, name: 'Colin', researcharea: 'Entrepreneurship and Innovation', maxpostgraduates: 5, maxundergraduates: 7 },
			{ id: 3, name: 'Laura', researcharea: 'Management Science and Business Economics', maxpostgraduates: 8, maxundergraduates: 9 },
	  ]

    const initialFormState = { id: null, name: '', researcharea: '', maxpostgraduates: '', maxundergraduates: '' }

  	// Setting state
  	const [ advisors, setAdvisors ] = useState(advisorsData)
  	const [ currentAdvisor, setCurrentAdvisor ] = useState(initialFormState)
  	const [ editing, setEditing ] = useState(false)

  	// CRUD operations
  	const addAdvisor = advisor => {
  		advisor.id = advisors.length + 1
  		setAdvisors([ ...advisors, advisor ])
  	}

  	const deleteAdvisor = id => {
  		setEditing(false)

  		setAdvisors(advisors.filter(advisor => advisor.id !== id))
  	}

    const updateAdvisor = (id, updatedAdvisor) => {
      setEditing(false)

      setAdvisors(advisors.map(advisor => (advisor.id === id ? updatedAdvisor : advisor)))
    }

    const editRow = advisor => {
      setEditing(true)

      setCurrentAdvisor({
        id: advisor.id,
        name: advisor.name,
        researcharea: advisor.researcharea,
        maxpostgraduates: advisor.maxpostgraduates,
        maxundergraduates: advisor.maxundergraduates
      })
    }

		  return (
		    <div className="container">
		      <h1>React CRUD App with Hooks</h1>
		      <div className="flex-row">
            <div className="flex-large">
              {editing ? (
                <div>
                  <h2>Edit advisor</h2>
                  <EditAdvisorForm
                    editing={editing}
                    setEditing={setEditing}
                    currentAdvisor={currentAdvisor}
                    updateAdvisor={updateAdvisor}
                  />
                </div>
              ) : (
                <div>
                  <h2>Add advisor</h2>
                  <AddAdvisorForm addAdvisor={addAdvisor} />
                </div>
              )}
            </div>
		        <div className="flex-large">
		          <h2>View advisors</h2>
		          <AdvisorTable advisors={advisors} editRow={editRow} deleteAdvisor={deleteAdvisor} />
		        </div>
		      </div>
		    </div>
		  )
		}

export default App
