import Home from './Pages/home';
import { createBrowserRouter,Outlet,RouterProvider,useLoaderData} from "react-router-dom";
import Resume1 from './Resumes/resume1';
import Resume2 from './Resumes/resume2';
import Todo from './Pages/todo';
function App() {

  const Layout = () => {
    return (
      <div className="app min-w-[320px] overflow-x-hidden">
        <div>
          <script src="js/wow.min.js"></script>
          <script src="https://kit.fontawesome.com/4d59ceec4b.js" crossOrigin="anonymous"></script>
          <script>
            new WOW().init();
          </script>
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </div>
        {/* <Navbar /> */}
        <Outlet />
        {/* <Footer /> */}
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/resume",
          element: <Resume1 />,
        },
        {
          path: "/resume2",
          element: <Resume2 />,
        },
        {
          path: "/todo",
          element: <Todo />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </div>
  );
}

export default App
