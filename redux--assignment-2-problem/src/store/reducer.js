const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      case "ADD_PERSON":
        const newPerson = {
          id: new Date(),
          name: "Max",
          age: Math.floor(Math.random() * 40)
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
