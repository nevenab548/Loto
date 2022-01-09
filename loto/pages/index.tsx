import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import welcome from '../public/images/welcome.gif'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
        <div className='welcome-photo-div'>
        <Image src={welcome}/>
        </div>
      <Footer/>
    </div>
  )
}

export default Home
