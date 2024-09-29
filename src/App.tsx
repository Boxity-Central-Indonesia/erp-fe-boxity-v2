import { AppRoutes } from "./AppRoutes";
import { ColorProvider } from "./context/ColorContext";


function App() {

  return (
    <>
      <ColorProvider>
        <AppRoutes />
      </ColorProvider>
    </>
  );
}

export default App;
