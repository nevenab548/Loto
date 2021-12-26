import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <Footer/>
    </div>
  )
}

export default Home
