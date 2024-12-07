import styles from './Card.module.css';
import Doctor from '../../public/images/doctor.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import HeartFilled from '../../public/images/heartFilled.png';
import HeartUnfilled from '../../public/images/heartUnfilled.png';
import { useState,useEffect } from 'react';
import { useStatesGlobal } from './utils/global.context';
import { ADD_FAV, DELETE_FAV } from './reducer/reducer';

const Card = ({ name, username, id, email, phone, website }) => {

  const [isLiked, setIsLiked] = useState(false);

  const {
    state: { favs },
    dispatch,
  } = useStatesGlobal();

  const dentist = {
    name,
    username,
    id,
  };

  useEffect(() => {
    setIsLiked(favs.some((item) => item.id === dentist.id));
  }, [favs, dentist.id]);

  const isFavorite = favs.some((item) => item.id === dentist.id);
  const navigate = useNavigate();

  const addFav = () => {
    dispatch({ type: isFavorite ? DELETE_FAV : ADD_FAV, payload: dentist });
  };

  const { pathname } = useLocation();

  return (
    <div className={styles.card}>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <figure className={styles.containerImage}>
        <img src={Doctor} alt="photo doctor" className={styles.imageDoc} />
        <img
          src={!isLiked ? HeartUnfilled : HeartFilled}
          alt="heart-icon"
          className={styles.heartIcon}
          onClick={addFav}
        />
      </figure>
      <article className={styles.containerInfo}>
        <h3>{id}</h3>
        <h3>{name}</h3>
        <h4>{username}</h4>
        <h4>{email}</h4>
        <h4>{phone}</h4>
        <h4>{website}</h4>
        {pathname === '/' || pathname === '/fav' ? (
          <button
            onClick={() => navigate(`/dentista/${id}`)}
            className={styles.btnDetail}
          >
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
