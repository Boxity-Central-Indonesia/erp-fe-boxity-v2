import { AppRoutes } from "./AppRoutes";
import { ColorProvider } from "./context/ColorContext";
import { Toaster } from "@/components/ui/toaster"


function App() {

  return (
    <>
        <ColorProvider>
          <AppRoutes />
          <Toaster />
        </ColorProvider>
    </>
  );
}

export default App;
