import { useState } from 'react'

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import MainLayout from '../layout/MainLayout';
import MainPage from '../pages/MainPage';
import ArticlePage from '../pages/ArticlePage';
import GalleryPage from '../pages/GalleryPage';
import BusinessPage from '../pages/BusinessPage';
import AboutUsPage from '../pages/AboutUsPage';
import DetailArtikelPage from '../pages/DetailArtikel';

function AppRouter() {

  const mainRoutes = [
    { path: "/", element: <MainPage /> },
    { path: "/article", element: <ArticlePage /> },
    { path: "/gallery", element: <GalleryPage /> },
    { path: "/umkm", element: <BusinessPage /> },
    { path: "/aboutus", element: <AboutUsPage /> },
    { path: "/detail-artikel/:id", element: <DetailArtikelPage /> },
  ];
  
  const router = createBrowserRouter([
    {
      path: "*",
      element: <div>Routes tidak ditemukan</div>
    },
    {
      element: <MainLayout />,
      children: mainRoutes,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default AppRouter;
