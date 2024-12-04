import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStatesGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();

  const {
    fetchUsers,
    state: { detail },
    isLoading,
  } = useStatesGlobal();

  useEffect(() => {
    fetchUsers(id);
  }, []);

  if (isLoading) {
    return <p>Cargando Detalle....</p>;
  }

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <Card name={detail.name} id={detail.id} username={detail.username} />
    </>
  );
};

export default Detail;
