import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from "../components/banner";
import Card from "../components/card";

import coffeeStores from "../data/coffee-store.json";

export async function getStaticProps(context) {
    // this is all server-side code.
    console.log("Hi Static Props")
    return {
        props: {coffeeStores,}, // will be passed to the page component as props
    }
}

export default function Home(props) {
  // This is client side code.
  console.log(props)
  const handleOnBannerBtnClick = () => {
      console.log("Hi Banner Button")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Lover</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
            buttonText="View Store Nearby!"
            handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
            <Image src="/static/hero-image.png" width={700} height={400}/>
        </div>
          <div className={styles.cardLayout}>
              {
                  props.coffeeStores.map(coffeeStores => {
                      return (
                          <Card
                              key={coffeeStores.id}
                              name={coffeeStores.name}
                              imgUrl={coffeeStores.imgUrl}
                              href={`/coffee-store/${coffeeStores.id}`}
                          />
                      )
                  })
              }
          </div>
      </main>


    </div>
  )
}
