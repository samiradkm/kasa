import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Fichelogement from "./pages/Fichelogement";
import Apropos from "./pages/Apropos";
import { Navigate } from "react-router";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route
                        path="/fichelogement/:id"
                        element={<Fichelogement />}
                    />
                    <Route path="apropos" element={<Apropos />} />
                    <Route path="/404" element={<Page404 />} />
                    <Route path="*" element={<Navigate to="/404" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
