import ArticleInfo from "./pages/ArticleInfo";
import Category from "./pages/Category";
import CourseInfo from "./pages/CourseInfo";
import Index from "./pages/Index";
import CoursesAll from "./pages/CoursesAll/CoursesAll";
const routes = [
  { path: "/", element: <Index /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/category-info/:categoryName", element: <Category /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path: "/coursesall", element: <CoursesAll /> },
];

export default routes;
