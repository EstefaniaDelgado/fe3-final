import styles from "./Favs.module.css";
import Card from "../Components/Card";
import { useStatesGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const{state:{favs}, error, isLoading}=useStatesGlobal();

  if (error) {
    return <p className={styles.loadingMsg}>Ha ocurrido un error 🤔</p>;
  }

  if (isLoading) {
    return <p className={styles.loadingMsg}>Cargando Usuarios....</p>;
  }

  if(!favs.length){
    return <p className={styles.loadingMsg}>No hay favoritos aún 😟</p>;
  }
  
  return (
    <>
      <h1 className={styles.tittle}>Dentists Favs</h1>
      <div className={styles.cardGrid}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map(user=><Card key={user.id} name={user.name} username={user.username} id={user.id}/>)}
      </div>
    </>
  );
};

export default Favs;
