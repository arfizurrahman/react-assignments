const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      case "ADD_PERSON":
        const newPerson = {
          id: new Date(),
          name: action.personData.name,
          age: action.personData.name
        };
        return {
          persons: state.persons.concat(newPerson)
        };
      case "REMOVE_PERSON":
        const newPersonArray = state.persons.filter(
          person => person.id !== action.id
        );
        return {
          persons: newPersonArray
        };
    }
    return state;
};

export default reducer;
