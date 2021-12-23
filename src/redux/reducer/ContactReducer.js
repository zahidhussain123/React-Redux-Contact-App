const initialState = [
  {
    id: 1,
    name: "Zahid Hussain",
    number: 123456,
    email: "zaid@gmail.com",
  },
  {
    id: 2,
    name: "Ali",
    number: 345678,
    email: "ali@gmail.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;

    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;

        case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
