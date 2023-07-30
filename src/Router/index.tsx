import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthGuard } from "./AuthGuard";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard />}>
          <Route path="/signin" element={<h1>Signin</h1>} />
          <Route path="/signup" element={<h1>signup</h1>} />
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<h1>dashboard</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
