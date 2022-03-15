import { useRouter } from "next/router";
import Link from "next/link"

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
	return {
		paths: [
			{ params: {id: '0'} },
			{ params: {id: '1'} }
		],
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

	return (
		<div>
			Coffee Store Page {router.query.id}
			<Link href="/">
				<a>Back to home</a>
			</Link>
			<Link href="/coffee-store/dynamic">
				<a>Back to page dynamic</a>
			</Link>
			<p>{props.coffeeStore.address}</p>
			<p>{props.coffeeStore.name}</p>
		</div>
	);
}

export default CoffeeStore;