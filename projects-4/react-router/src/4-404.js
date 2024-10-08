import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
  const Home = () => <h1>Home</h1>;
  const Pets = () => <h1>Pet List</h1>;
  // const Layout = () => <h1>Layout</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="pets" element={<Pets />}></Route>
            **<Route path="*" element={<h1>404</h1>}></Route>**
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;