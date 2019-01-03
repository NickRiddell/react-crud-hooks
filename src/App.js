import React, {
    useState
}
from 'react'
import AdvisorTable from './tables/AdvisorTable'
import AddAdvisorForm from './forms/AddAdvisorForm'
import EditAdvisorForm from './forms/EditAdvisorForm'

//A simple, functional component for App instead of a class
const App = () => {
    const advisorsData = [{
        id: 1,
        name: 'Bob',
        researcharea: 'Accounting and Finance',
        maxpostgraduates: 9,
        maxundergraduates: 9
    }, {
        id: 2,
        name: 'Colin',
        researcharea: 'Entrepreneurship and Innovation',
        maxpostgraduates: 5,
        maxundergraduates: 7
    }, {
        id: 3,
        name: 'Laura',
        researcharea: 'Management Science and Business Economics',
        maxpostgraduates: 8,
        maxundergraduates: 9
    }, ]

    const initialFormState = {
        id: null,
        name: '',
        researcharea: '',
        maxpostgraduates: '',
        maxundergraduates: ''
    }

    /*Setting state
     With Hook state, there’s a getter and setter for each type of state (you can have
     as many as you want)*/
    const [advisors, setAdvisors] = useState(advisorsData)
      /*For editing, when the edit action is selected for an advisor, the Add advisor
      form will become an Edit advisor form, and it will be pre-populated with the data
      from the selected advisor. The user can either cancel edit mode, or submit the
      change, which will update the selected advisor and close out of edit mode. This
      is done by having a state for whether or not edit mode is turned on. It will begin
      as false.*/
    const [editing, setEditing] = useState(false)
        /*Since it is not known who is being edited until it’s selected, the state for
        the form is set to empty and assigned to the currentAdvisor so that it can be
        tracked.*/
    const [currentAdvisor, setCurrentAdvisor] = useState(initialFormState)

    // CRUD operations
    /*Since I am not using an API and database, which would auto-increment the ID,
     I incremented the ID of the new advisor manually. This function will take an
     advisor object as a parameter, and add them to the advisors array of objects. The
     ...advisors code ensures that all the previous advisors remain in the array.*/
    const addAdvisor = advisor => {
        advisor.id = advisors.length + 1
        setAdvisors([...advisors, advisor])
    }

    /*The delete function simply takes the ID of the advisor and filters them out of the
    advisors array.*/
    const deleteAdvisor = id => {
        setEditing(false)
        setAdvisors(advisors.filter(advisor => advisor.id !== id))
    }

    /*When the Edit button is selected on an advisor, it passes the current advisor via
    state to the function below which turns on edit mode, and sets the current advisor.*/
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

    /*The update function maps through the array, and updates the advisor that matches
    the ID passed through.*/
    const updateAdvisor = (id, updatedAdvisor) => {
        setEditing(false)
        setAdvisors(advisors.map(advisor => (advisor.id === id ? updatedAdvisor : advisor)))
    }


    return (
      <div className = "container">
        <h1> React CRUD App with Hooks </h1>
        <div className = "flex-row">
          <div className = "flex-large" > { editing ? (
            <div>
              <h2> Edit advisor </h2>
              <EditAdvisorForm
                editing = { editing }
                setEditing = { setEditing }
                currentAdvisor = { currentAdvisor }
                updateAdvisor = { updateAdvisor }
              />
            </div>
            ) : (
            <div>
              <h2> Add advisor </h2>
              <AddAdvisorForm addAdvisor = { addAdvisor } />
            </div>
            )}
        </div>
        <div className = "flex-large" >
        <h2> View advisors </h2>
        <AdvisorTable
          advisors = { advisors }
          editRow = { editRow }
          deleteAdvisor = { deleteAdvisor }
        />
      </div>
    </div>
  </div>
  )
}

export default App
