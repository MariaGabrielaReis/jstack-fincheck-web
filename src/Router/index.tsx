import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthLayout } from "../ui/layouts/AuthLayout";
import { SignIn } from "../ui/pages/SignIn";
import { SignUp } from "../ui/pages/SignUp";
import { AuthGuard } from "./AuthGuard";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard />}>
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<h1>dashboard</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
