import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )

}

export default App
