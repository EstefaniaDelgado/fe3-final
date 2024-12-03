export const CHANGE_THEME="CHANGE_THEME"



const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, theme: action.payload };

    default:
      return { ...state };
  }
};
export default reducer;
