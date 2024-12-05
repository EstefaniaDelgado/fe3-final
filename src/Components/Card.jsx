import styles from './Card.module.css';
import Doctor from '../../public/images/doctor.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import HeartFilled from '../../public/images/heartFilled.png'
import HeartUnfilled from '../../public/images/heartUnfilled.png'
import { useState } from 'react';

const Card = ({ name, username, id }) => {

const[isLiked, setIsLiked]=useState(false)

  const navigate = useNavigate();
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    navigate(`/dentista/${id}`);
  };

  const { pathname } = useLocation();
  
  return (
    <div className={styles.card}>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <figure className={styles.containerImage}>
        <img src={Doctor} alt="photo doctor" className={styles.imageDoc} />
        <img src={!isLiked? HeartUnfilled : HeartFilled} alt="heart-icon" className={styles.heartIcon} onClick={()=>setIsLiked(!isLiked)}/>
      </figure>
      <article className={styles.containerInfo}>
        <h3>{id}</h3>
        <h3>{name}</h3>
        <h4>{username}</h4>
        {pathname === '/' ? (
          <button onClick={addFav} className={styles.btnDetail}>
            Ver detalle
          </button>
        ) : (
          ''
        )}
      </article>
    </div>
  );
};

export default Card;
