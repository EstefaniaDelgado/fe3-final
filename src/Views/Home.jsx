import styles from './Home.module.css';
import Card from '../Components/Card';
import { useStatesGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {
    state: { data },
    isLoading,
    error,
  } = useStatesGlobal();

  const renderUsers = () => {
    return data.map((user) => (
      <Card
        key={user.id}
        name={user.name}
        username={user.username}
        id={user.id}
      />
    ));
  };

  if (error) {
    return <p className={styles.loadingMsg}>Ha ocurrido un error 🤔</p>;
  }
  if (isLoading) {
    return <p className={styles.loadingMsg}>Cargando Usuarios....</p>;
  }

  return (
    <div className={styles.cardGrid}>
      {/* Aqui deberias renderizar las cards */}
      {renderUsers()}
    </div>
  );
};

export default Home;
