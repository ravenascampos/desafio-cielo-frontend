import { useExtracts } from "@/services/extract/extract.hooks";



function Home() {
  const {data} = useExtracts();

  console.log('data', data)
  return (
    <div>Hello</div>
  )
}

export default Home