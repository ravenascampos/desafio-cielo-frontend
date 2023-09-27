import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./core/configs/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {

  return (
   <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
   </QueryClientProvider>
  );
}

export default App;
