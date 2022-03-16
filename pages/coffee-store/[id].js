import { useRouter } from "next/router";
import Link from "next/link"
import Head from "next/head";

import coffeeStoresData from "../../data/coffee-store.json";


export function getStaticProps(staticProps) {
	const params = staticProps.params;
	// console.log("params", params)
	return {
		props: {
			coffeeStore: coffeeStoresData.find(store => store.id.toString() === params.id)
		}
	}
}

export function getStaticPaths() {
	const paths = coffeeStoresData.map(coffeeStore => {
		return {
			params: {
				id: coffeeStore.id.toString(),
			}
		}
	})

	return {
		paths,
		fallback: true
	}
}

const CoffeeStore = (props) => {
	const router = useRouter();
	console.log("Router", router);
	console.log("props", props);

	if(router.isFallback) {
		return (<div>Is Loading...</div>)
	}

	const {address, name, neighbourhood} = props.coffeeStore;

	return (
		<div>
			<Head>
				<title>{name}</title>
			</Head>
			<Link href="/">
				<a>Back to home</a>
			</Link>
			<p>{address}</p>
			<p>{name}</p>
			<p>{neighbourhood}</p>
		</div>
	);
}

export default CoffeeStore;