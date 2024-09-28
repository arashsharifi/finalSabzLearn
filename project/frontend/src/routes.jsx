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
];

export default routes;
