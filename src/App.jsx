import { Suspense, lazy } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvide } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CountryList from "./components/CountryList/CountryList";
import CityList from "./components/CityList/CityList";
import City from "./components/City/City";
import Form from "./components/Form/Form";
import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage"


const HomePage = lazy(() => import("./pages/HomePage/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout/AppLayout"));
const Login = lazy(() => import("./pages/LoginPage/Login"));

// dist/assets/index-40e6d618.css   30.56 kB │ gzip:   5.12 kB
// dist/assets/index-23e37e56.js   572.45 kB │ gzip: 151.34 kB

function App() {
  return (
    <>
      <AuthProvide>
        <CitiesProvider>
          <Suspense fallback={<SpinnerFullPage />}>
            <Router>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate to="cities" replace />} />
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />
                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<Form />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Router>
          </Suspense>
        </CitiesProvider>
      </AuthProvide>
    </>
  );
}

export default App;
