import { RouterProvider } from "react-router-dom";

import { router } from "./core/routers/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
