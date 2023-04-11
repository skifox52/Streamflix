import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom"
import { Layout } from "./layouts/Layout"
import { Home } from "./pages/Home"
import { DetailMovie } from "./pages/DetailMovie"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/movie/:movie" element={<DetailMovie />} />
      <Route path="/all" element={<Navigate to="/" />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
