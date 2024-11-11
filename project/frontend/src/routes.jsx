import ArticleInfo from "./pages/ArticleInfo";
import Category from "./pages/Category";
import CourseInfo from "./pages/CourseInfo";
import Index from "./pages/Index";
import CoursesAll from "./pages/CoursesAll/CoursesAll";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TestReduser from "./TestReduser/TestReduser";
import AllArticle from "./pages/AllArticle/AllArticle";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import AdminPanel from "./pages/panelAdmin/IndexAdmin"
import Users from "./pages/panelAdmin/Users";
import AdminCourses from "./pages/panelAdmin/AdminCourses";
import AdminArticles from "./pages/panelAdmin/AdminArticles";
import Menus from "./pages/panelAdmin/Menus";
import AdminCategorys from "./pages/panelAdmin/AdminCategorys";
import AdminContats from "./pages/panelAdmin/AdminContats"; 


const routes = [
  { path: "/", element: <Index /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  
  { path: "/category-info/:categoryName", element: <Category /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },

  { path: "/coursesall", element: <CoursesAll /> },
  { path: "/allArticle", element: <AllArticle /> },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  { path: "/test", element: <TestReduser /> },
  { path: "/contact", element: <Contact /> },

  { path: "/search/:value", element: <Search /> },
  {
    path: "/p-admin/*",
    element: <AdminPanel />,
    children: [
      { path: "users", element: <Users /> },
      { path: "courses", element: <AdminCourses/> },
      { path: "articles", element: <AdminArticles/> },
      { path: "menus", element: <Menus/> },
      { path: "categorys", element: <AdminCategorys/> },
      { path: "contacts", element: <AdminContats/> },
    ],
  },
];

export default routes;
