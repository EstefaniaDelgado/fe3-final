import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from 'react';
import reducer from '../reducer/reducer';

export const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  data: [],
};

const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);

 
  // Aplicar el tema al cargar el componente
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  return (
    <ContextGlobal.Provider value={{ state,dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useStatesGlobal = () => useContext(ContextGlobal);


