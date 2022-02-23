import { useRouter } from "next/router";
import Link from "next/link"

const CoffeeStore = () => {
   const router = useRouter();
   console.log("Router", router);

   return (
       <div>
          Coffee Store Page {router.query.id}
           <Link href="/">
               <a>Back to home</a>
           </Link>
           <Link href="/coffee-store/dynamic">
               <a>Back to page dynamic</a>
           </Link>
       </div>
   );
}

export default CoffeeStore;