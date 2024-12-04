import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from 'react';
import reducer, { GET_USERS, LOADING_USERS } from '../reducer/reducer';

export const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  data: [],
};

const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading]=useState(true);
  const[error, setError]=useState()

 
  // Aplicar el tema al cargar el componente
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  //Llamado a la API
  const fetchUsers = async(params)=>{
   try {
    const api = await fetch(`https://jsonplaceholder.typicode.com/users/${params?params: ''}`)
    const response = await api.json();
    dispatch({type:GET_USERS, payload:response})
   } catch (error) {
    setError(error)
   }finally{
   setIsLoading(false)
   }
  }

  useEffect(()=>{
    fetchUsers()
  },[])

 
  return (
    <ContextGlobal.Provider value={{ state,dispatch, error, isLoading, fetchUsers }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useStatesGlobal = () => useContext(ContextGlobal);


