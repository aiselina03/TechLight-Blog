import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import AddBlog from "./pages/AddBlog";
import Myblog from "./pages/MyBlog";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/Login";
import EditBlog from "./pages/EditBlog";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/addBlog" element={<AddBlog />} />
            <Route path="/editBlog/:id" element={<EditBlog />} />
            <Route path="/blogDetail/:id" element={<BlogDetail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUp />} />     
            <Route path="/myBlog" element={<Myblog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
