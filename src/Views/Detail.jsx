import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStatesGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';
import { GET_DETAIL } from '../Components/reducer/reducer';
import styles from './Detail.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();

  const {
    fetchUsers,
    state: { detail },
    isLoading,
    dispatch,
    error
  } = useStatesGlobal();
  console.log(detail)

  useEffect(() => {
    fetchUsers(id);
    return () => {
      dispatch({ type: GET_DETAIL, payload: {} });
    };
  }, []);

  if (isLoading) {
    return <p className={styles.loadingMsg}>Cargando Detalle....</p>;
  }
  if (error) {
    return <p className={styles.loadingMsg}>Ha ocurrido un error 🤔</p>;
  }

  return (
    <div style={{height:'100%',display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', margin:'15px 0'}}>
      <h1 style={{textAlign:'center'}}>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <Card name={detail.name} id={detail.id} email={detail.email} phone={detail.phone} website={detail.website}/>
    </div>
  );
};

export default Detail;
