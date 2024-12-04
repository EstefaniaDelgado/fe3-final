export const CHANGE_THEME = 'CHANGE_THEME';
export const GET_USERS = 'GET_USERS';
export const LOADING_USERS = 'LOADING_USERS';
export const GET_DETAIL='GET_DETAIL'

const reducer = (state, action) => {
//   console.log(action);
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, theme: action.payload };
    case GET_USERS:
      return { ...state, data: action.payload };
      case GET_DETAIL:
        return { ...state, detail: action.payload };
    default:
      return { ...state };
  }
};
export default reducer;
