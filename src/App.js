import React, { useState } from 'react'
import AdvisorTable from './tables/AdvisorTable'
import AddAdvisorForm from './forms/AddAdvisorForm'

const App = () => {
  const advisorsData = [
	    { id: 1, name: 'Bob', researcharea: 'Accounting and Finance', maxpostgraduates: 9, maxundergraduates: 9 },
	    { id: 2, name: 'Colin', researcharea: 'Entrepreneurship and Innovation', maxpostgraduates: 5, maxundergraduates: 7 },
			{ id: 3, name: 'Laura', researcharea: 'Management Science and Business Economics', maxpostgraduates: 8, maxundergraduates: 9 },
	  ]

		const [ advisors, setAdvisors ] = useState(advisorsData)

    const addAdvisor = advisor => {
      advisor.id = advisors.length + 1
      setAdvisors([ ...advisors, advisor ])
    }

    const deleteAdvisor = id => {
      setAdvisors(advisors.filter(advisor => advisor.id !== id))
    }

		  return (
		    <div className="container">
		      <h1>CRUD App with Hooks</h1>
		      <div className="flex-row">
		        <div className="flex-large">
		          <h2>Add advisor</h2>
              <AddAdvisorForm addAdvisor={addAdvisor} />
		        </div>
		        <div className="flex-large">
		          <h2>View advisors</h2>
		          <AdvisorTable advisors={advisors} deleteAdvisor={deleteAdvisor} />
		        </div>
		      </div>
		    </div>
		  )
		}

export default App
