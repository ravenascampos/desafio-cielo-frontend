import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./core/configs/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ColorModeProvider } from "./context";
import { MaterialUiConfigProvider } from "./core/configs/material-ui";
import { CssBaseline } from "@mui/material";

function App() {

  return (
      <QueryClientProvider client={queryClient}>
      <ColorModeProvider>
        <MaterialUiConfigProvider>
          <CssBaseline/>
          <RouterProvider router={router}/>
        </MaterialUiConfigProvider> 
      </ColorModeProvider>
    </QueryClientProvider> 
  );
}

export default App;
