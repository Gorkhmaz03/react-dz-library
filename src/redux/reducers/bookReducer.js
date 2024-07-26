const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS":
      return [...state];
    case "ADD_BOOK":
      return [...state, action.payload];
    case "UPDATE_BOOK":
      return state.map((book) =>
        book.id === action.payload.id
          ? { ...book, ...action.payload.updatedBook }
          : book
      );
    case "DELETE_BOOK":
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
