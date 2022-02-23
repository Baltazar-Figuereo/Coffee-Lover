import { useRouter } from "next/router";
// import Link from "next/link"

const DyRoute = () => {
    const router = useRouter();
    console.log("Router", router);

    return (<div>Page {router.query.dyn}</div>);
}

export default DyRoute;