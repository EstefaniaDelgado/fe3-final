import { fav } from '../utils/constants';

export const CHANGE_THEME = 'CHANGE_THEME';
export const GET_USERS = 'GET_USERS';
export const LOADING_USERS = 'LOADING_USERS';
export const GET_DETAIL = 'GET_DETAIL';
export const ADD_FAV = 'ADD_FAV';
export const DELETE_FAV = 'DELETE_FAV';

const reducer = (state, action) => {
  let updatedFavs;
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, theme: action.payload };
    case GET_USERS:
      return { ...state, data: action.payload };
    case GET_DETAIL:
      return { ...state, detail: action.payload };
    case ADD_FAV:
      updatedFavs = [...state.favs, action.payload];
      localStorage.setItem(fav, JSON.stringify(updatedFavs));
      return { ...state, favs: updatedFavs };
    case DELETE_FAV:
      updatedFavs = state.favs.filter((item) => item.id !== action.payload.id);
      localStorage.setItem(fav, JSON.stringify(updatedFavs));
      return { ...state, favs: updatedFavs };
    default:
      return { ...state };
  }
};
export default reducer;
