import { Routes, Route } from "react-router-dom";

import MainLayout from "../main/MainLayout";
import Home from "@/features/home/ui/views/Home";
import Login from "@/features/auth/ui/views/Login";
import { PageNotFound } from "@/shared/components/page-components";

const RootLayout = () => {
  return (
    <>
      <MainLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
export default RootLayout;
