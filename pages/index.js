import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from "../components/banner";
import Card from "../components/card";

// import coffeeStoresData from "../data/coffee-store.json";

export async function getStaticProps(context) {
    // this is all server-side code.
    console.log("Hi Static Props")

	let coffeeStoresData = [];

	let httpRequest = await fetch("https://api.foursquare.com/v3/places/nearby?v=20220322&query=coffee&near=New%20york%20city&radius=100000&limit=6", {
		"headers": {
			"Authorization": "fsq3bHgC9ocvdRV1flFjmK2MsLr78TZX1YXIQDYHQ0Xi7UQ="
		}
	})

	coffeeStoresData = await httpRequest.json();

	console.log(coffeeStoresData.results)

    return {
        props: {
			coffeeStores: coffeeStoresData.results,
		}, // will be passed to the page component as props
    }
}

export default function Home(props) {
	// This is client side code.
	//console.log(props);

	const handleOnBannerBtnClick = () => {
		//console.log("Hi Banner Button")
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
				{props.coffeeStores.length > 0 && (
					<>
						<h2 className={styles.heading2}>Toronto Stores</h2>
						<div className={styles.cardLayout}>
						{props.coffeeStores.map(coffeeStores => {
							return (
								<Card
									key={coffeeStores.id}
									name={coffeeStores.name}
									imgUrl={coffeeStores.imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"}
									href={`/coffee-store/${coffeeStores.id}`}
								/>
							);
						})}
						</div>
					</>
				)}
			</main>
		</div>
	)
}
