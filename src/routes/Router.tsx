import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { Home } from "../pages/Home"
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"

export function Router() {
  return (
    <Routes>

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

    </Routes>
  )
}