import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
