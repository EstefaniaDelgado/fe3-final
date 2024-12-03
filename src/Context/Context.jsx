import { createContext, useContext, useState, useEffect, useReducer } from 'react';

const GlobalStates = createContext();

const Context = ({ children }) => {

  // const [state, dispatch] = useReducer(reducer, initialState);

  // Estado para manejar el tema
  const [theme, setTheme] = useState(() => {
    // Leer el tema guardado en localStorage o usar "light" por defecto
    return localStorage.getItem('theme') || 'light';
  });

  // Cambiar el tema y guardarlo en localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Aplicar el tema al cargar el componente
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <GlobalStates.Provider value={{ toggleTheme, theme }}>
      {children}
    </GlobalStates.Provider>
  );
};

export default Context;

export const useGlobalStates = () => useContext(GlobalStates);
