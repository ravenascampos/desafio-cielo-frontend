import { useExtracts } from "@/services/extract/extract.hooks";
import CardHome from "./components/Card";



function Home() {
  const {data} = useExtracts();

  console.log('data', data)
  return (
    <CardHome/>
  )
}

export default Home