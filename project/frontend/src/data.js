const dataAboutCategory = [
  { id: 1, title: "آموزش html", category: "html" },
  { id: 2, title: "آموزش css", category: "css" },
  { id: 3, title: "آموزش بوت استرپ", category: "boot" },
  { id: 4, title: "آموزش جاوا اسکریپت", category: "myskills" },
  { id: 5, title: "آموزش جاوا اسکریپت", category: "javascript" },
  { id: 6, title: "آموزش پایتون", category: "python" },
  { id: 7, title: "آموزش ری اکت", category: "react" },
  { id: 8, title: "آموزش ری اکت", category: "python" },
];

const linksNavData = [
  {
    id: 1,
    name: "پایتون",
    submenu: true,
    sublinks: [
      {
        Head: "پایتون",
        sublink: [
          { id: 1, name: "دوره تخصصی پایتون", link: "/" },
          { id: 2, name: "دوره هوش مصنوعی پایتون", link: "/" },
          { id: 3, name: "دوره متخصص جنگو", link: "/" },
          { id: 4, name: "بروز رسانی دوره", link: "/" },
          { id: 5, name: "بروز رسانی دوره", link: "/" },
        ],
      },
      {
        Head: "به زودی پکیج جدید",
        sublink: [
          { id: 1, name: " بزودی", link: "/" },
          { id: 2, name: "بزودی", link: "/" },
          { id: 3, name: " بزودی", link: "/" },
          { id: 4, name: "بزودی", link: "/" },
          { id: 5, name: "بزودی", link: "/" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "مقالات",
    submenu: true,
    sublinks: [
      {
        Head: "مقالات",
        sublink: [
          { id: 1, name: "توسعه وب", link: "/" },
          { id: 2, name: "جاوااسکریپت", link: "/" },
          { id: 3, name: "فرانت اند", link: "/" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "امنیت",
    submenu: true,
    sublinks: [
      {
        Head: "لیست امنیت",
        sublink: [
          { id: 1, name: "آموزش کالی لینوکس", link: "/" },
          { id: 2, name: "آموزش پایتون", link: "/" },
          { id: 3, name: "آموزش جاوااسکریپت ویژه", link: "/" },
          { id: 4, name: "آموزش شبکه", link: "/" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "فرانت اند",
    submenu: true,
    sublinks: [
      {
        Head: "لیست آموزش فرانت",
        sublink: [
          { id: 1, name: "آموزش html", link: "/" },
          { id: 2, name: "آموزش css", link: "/" },
          { id: 3, name: "آموزش جاوااسکریپت", link: "/" },
          { id: 4, name: "آموزش flexbox", link: "/" },
          { id: 5, name: "آموزش جامع ری اکت", link: "/" },
        ],
      },
    ],
  },
];

const lasCourseData = [
  {
    id: 1,
    img: "images/courses/jango.png",
    nameT: "علیرضا گودرزی",
    nameC: "پکیج فول دوره جانگو",
    price: 1700000,
    countStudent: 378,
    rate: 3,
  },
  {
    id: 2,
    img: "images/courses/fareelancer.png",
    nameT: "ساسان شکرالهی",
    nameC: "پکیج فول دوره فری لنسر",
    price: 2500000,
    countStudent: 460,
    rate: 4,
  },
  {
    id: 3,
    img: "images/courses/js_project.png",
    nameT: "حسین شریفی",
    nameC: "   صفر تا صد پرژه محور جوااسکریپت",
    price: 3700000,
    countStudent: 600,
    rate: 5,
  },
  {
    id: 4,
    img: "images/courses/nodejs.png",
    nameT: " الهام فرشته",
    nameC: "دوره تخصصی بکند نود ",
    price: 1800000,
    countStudent: 178,
    rate: 3,
  },
  {
    id: 5,
    img: "images/courses/python.png",
    nameT: "علیرضا گودرزی",
    nameC: "دوره پرژه محور پایتون",
    price: 3700000,
    countStudent: 378,
    rate: 4,
  },
  {
    id: 6,
    img: "images/courses/youtuber.png",
    nameT: " رادین نوری",
    nameC: "دوره آموزشی یوتیوبر قدرتمند",
    price: 1700000,
    countStudent: 478,
    rate: 4,
  },
];

const swiperCourseData = [
  {
    id: 1,
    nameC: "آموزش node صفر تا صد ",
    nameT: "علی مالکی",
    rate: 4,
    price: 1400000,
    img: "/images/courses/node.png",
    countStudent: 500,
  },
  {
    id: 2,
    nameC: "آموزش صفر تا ضد php",
    nameT: "نادر عظیمی",
    rate: 4,
    price: 2600000,
    img: "/images/courses/php.png",
    countStudent: 120,
  },
  {
    id: 3,
    nameC: "دوره آموزشی پرژه محور sql",
    nameT: "عرفان پورمحمدی",
    rate: 3,
    price: 1100000,
    img: "/images/courses/sql.png",
    countStudent: 220,
  },
  {
    id: 4,
    nameC: "هکر قدرتمند",
    nameT: "سامان همتا",
    rate: 4,
    price: 2600000,
    img: "/images/courses/haker.png",
    countStudent: 190,
  },
  {
    id: 5,
    nameC: "بازی سازی دوره پرژه محور",
    nameT: " نسیم گلمحمدی",
    rate: 5,
    price: 340000,
    img: "/images/courses/game.png",
    countStudent: 220,
  },
  {
    id: 6,
    nameC: "آموزش فول یوتوبرقدرتمند",
    nameT: "آرش  یگانه",
    rate: 4,
    price: 240000,
    img: "/images/courses/youtuber.png",
    countStudent: 320,
  },
];

const infoData = [
  {
    id: 1,
    descOne:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از س وتکنولوژی مورد نیاز و کاربردهای ",
    descTwo: "ورم ایپسوم متنزه و مجله در ستون و سطرآنچنان کهای ",
    img: "images/infos/maq1.png",
  },
  {
    id: 2,
    descOne:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از س وتکنولوژی مورد نیاز و کاربردهای ",
    descTwo: "ورم ایپسوم متنزه و مجله در ستون و سطرآنچنان کهای ",
    img: "images/infos/maq2.png",
  },
  {
    id: 3,
    descOne:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از س وتکنولوژی مورد نیاز و کاربردهای ",
    descTwo: "ورم ایپسوم متنزه و مجله در ستون و سطرآنچنان کهای ",
    img: "images/infos/mag3.png",
  },
];

const BreadCrumbData = [
  { id: 1, title: "خانه", to: "/" },
  { id: 2, title: "آموزش فرانت اند", to: "/category-info/frontend" },
  {
    id: 3,
    title: "آموزش زبان تخصصی جاوااسکریپت",
    to: "/course-info/js-expert",
  },
];

const lessonStatus = [
  {
    id: 1,
    update: "1665779400000",
    hourCourse: "20",
    statusCourse: "به اتمام رسیده ",
    watch: "آنلاین",
    prerequisite: "css html",
    SupportMethod: "آنلاین",
  },
];
const randomData = [
  {
    id: 1,
    title: "دوره تخصصی جوا اسکریپت ",
    img: "/images/courses/youtuber.png",
  },
  { id: 2, title: "دوره تخصصی جوا اسکریپت ", img: "/images/courses/haker.png" },
  {
    id: 3,
    title: "دوره تخصصی جوا اسکریپت ",
    img: "/images/courses/haker.png",
  },
  { id: 4, title: "دوره تخصصی جوا اسکریپت ", img: "/images/courses/haker.png" },
];

const AccordionData = [
  {
    id: 1,
    title: "معرفی دوره ",
    desc: "دوره چرا نرم افزار یاد نگیریم ",
    time: "18:17",
  },
  {
    id: 2,
    title: "معرفی دوره ",
    desc: "دوره چرا نرم افزار یاد نگیریم ",
    time: "18:17",
  },
  {
    id: 3,
    title: "معرفی دوره ",
    desc: "دوره چرا نرم افزار یاد نگیریم ",
    time: "18:17",
  },
];

const skillData = [
  { id: 1, name: "Html", W: "90%", costumAnimation: "2s", tooltip: "90%" },
  // { id: 2, name: "Css", W: "70%", costumAnimation: "3s", tooltip: "70%" },
  // {
  //   id: 3,
  //   name: "JavaScript",
  //   W: "65%",
  //   costumAnimation: "4s",
  //   tooltip: "65%",
  // },
  // { id: 4, name: "React js", W: "60%", costumAnimation: "5s", tooltip: "60%" },
  // { id: 5, name: "ICDL", W: "70%", costumAnimation: "5s", tooltip: "70%" },
];

const dropDownData = [
  { id: 1, city: "شهریار", imo: "🎈" },
  { id: 2, city: "شهریار", imo: "🎈" },
  { id: 3, city: "شهریار", imo: "🎈" },
  { id: 4, city: "شهریار", imo: "🎈" },
];

const BreadCrumbData2 = [
  { id: 1, title: "خانه", to: "/" },
  { id: 2, title: "  مقاله ها ", to: "/category-info/frontend" },
  {
    id: 3,
    title: "ویو vs ری اکت",
    to: "/course-info/js-expert",
  },
];

const paginationAllcourseData = [
  {
    id: 1,
    nameC: "آموزش node صفر تا صد ",
    nameT: "علی مالکی",
    rate: 4,
    price: 1400000,
    img: "/images/courses/node.png",
    countStudent: 500,
  },
  {
    id: 2,
    nameC: "هیولای جاوا اسکریپت",
    nameT: "حسن  یزدی",
    rate: 4,
    price: 1300000,
    img: "/images/courses/js_project.png",
    countStudent: 700,
  },
  {
    id: 3,
    nameC: "  آموزش ساخت بازی ساز ",
    nameT: "الهام  گودرزی",
    rate: 3,
    price: 1700000,
    img: "/images/courses/game.png",
    countStudent: 500,
  },
  {
    id: 4,
    nameC: " دوره پیشرفته jango",
    nameT: "ساسان  شکرالهی",
    rate: 3,
    price: 2700000,
    img: "/images/courses/jango.png",
    countStudent: 350,
  },
  {
    id: 5,
    nameC: " فول دوره آموزش php",
    nameT: "آرین   دوستی",
    rate: 3,
    price: 2100000,
    img: "/images/courses/jango.png",
    countStudent: 600,
  },
  {
    id: 6,
    nameC: "آموزش node صفر تا صد ",
    nameT: "علی مالکی",
    rate: 4,
    price: 1400000,
    img: "/images/courses/node.png",
    countStudent: 500,
  },
  {
    id: 7,
    nameC: "آموزش صفر تا ضد php",
    nameT: "نادر عظیمی",
    rate: 4,
    price: 2600000,
    img: "/images/courses/php.png",
    countStudent: 120,
  },
  {
    id: 8,
    nameC: "دوره آموزشی پرژه محور sql",
    nameT: "عرفان پورمحمدی",
    rate: 3,
    price: 1100000,
    img: "/images/courses/sql.png",
    countStudent: 220,
  },
  {
    id: 9,
    nameC: "هکر قدرتمند",
    nameT: "سامان همتا",
    rate: 4,
    price: 2600000,
    img: "/images/courses/haker.png",
    countStudent: 190,
  },
  {
    id: 10,
    nameC: "بازی سازی دوره پرژه محور",
    nameT: " نسیم گلمحمدی",
    rate: 5,
    price: 340000,
    img: "/images/courses/game.png",
    countStudent: 220,
  },
  {
    id: 11,
    nameC: "آموزش فول یوتوبرقدرتمند",
    nameT: "آرش  یگانه",
    rate: 4,
    price: 240000,
    img: "/images/courses/youtuber.png",
    countStudent: 320,
  },
  {
    id: 12,
    nameC: "آموزش node صفر تا صد ",
    nameT: "علی مالکی",
    rate: 4,
    price: 1400000,
    img: "/images/courses/node.png",
    countStudent: 500,
  },
  {
    id: 13,
    nameC: "هیولای جاوا اسکریپت",
    nameT: "حسن  یزدی",
    rate: 4,
    price: 1300000,
    img: "/images/courses/js_project.png",
    countStudent: 700,
  },
  {
    id: 14,
    nameC: "  آموزش ساخت بازی ساز ",
    nameT: "الهام  گودرزی",
    rate: 3,
    price: 1700000,
    img: "/images/courses/game.png",
    countStudent: 500,
  },
  {
    id: 15,
    nameC: " دوره پیشرفته jango",
    nameT: "ساسان  شکرالهی",
    rate: 3,
    price: 2700000,
    img: "/images/courses/jango.png",
    countStudent: 350,
  },
  {
    id: 16,
    nameC: " فول دوره آموزش php",
    nameT: "آرین   دوستی",
    rate: 3,
    price: 2100000,
    img: "/images/courses/jango.png",
    countStudent: 600,
  },
  {
    id: 17,
    nameC: "آموزش node صفر تا صد ",
    nameT: "علی مالکی",
    rate: 4,
    price: 1400000,
    img: "/images/courses/node.png",
    countStudent: 500,
  },
  {
    id: 18,
    nameC: "آموزش صفر تا ضد php",
    nameT: "نادر عظیمی",
    rate: 4,
    price: 2600000,
    img: "/images/courses/php.png",
    countStudent: 120,
  },
  {
    id: 19,
    nameC: "دوره آموزشی پرژه محور sql",
    nameT: "عرفان پورمحمدی",
    rate: 3,
    price: 1100000,
    img: "/images/courses/sql.png",
    countStudent: 220,
  },
  {
    id: 20,
    nameC: "هکر قدرتمند",
    nameT: "سامان همتا",
    rate: 4,
    price: 2600000,
    img: "/images/courses/haker.png",
    countStudent: 190,
  },
  {
    id: 21,
    nameC: "بازی سازی دوره پرژه محور",
    nameT: " نسیم گلمحمدی",
    rate: 5,
    price: 340000,
    img: "/images/courses/game.png",
    countStudent: 220,
  },
  {
    id: 22,
    nameC: "آموزش فول یوتوبرقدرتمند",
    nameT: "آرش  یگانه",
    rate: 4,
    price: 240000,
    img: "/images/courses/youtuber.png",
    countStudent: 320,
  },
];

export {
  dataAboutCategory,
  linksNavData,
  lasCourseData,
  swiperCourseData,
  infoData,
  BreadCrumbData,
  lessonStatus,
  randomData,
  AccordionData,
  skillData,
  dropDownData,
  BreadCrumbData2,
  paginationAllcourseData,
};
