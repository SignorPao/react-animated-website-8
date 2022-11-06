// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from "react-icons/fa";

// import images
import AboutImg from "../src/assets/about/plate.png";
import ModelWhiteImg from "../src/assets/model-white.png";
import ModelBlackImg from "../src/assets/model-black.png";
import MenuImg1 from "../src/assets/menu/1.png";
import MenuImg2 from "../src/assets/menu/2.png";
import MenuImg3 from "../src/assets/menu/3.png";
import MenuImg4 from "../src/assets/menu/4.png";
import SignatureImg from "../src/assets/team/signature.png";
import ChefImg from "../src/assets/team/chef.png";
import Avatar1 from "../src/assets/testimonial/avatar1.png";
import Avatar2 from "../src/assets/testimonial/avatar2.png";
import Avatar3 from "../src/assets/testimonial/avatar3.png";

export const navData = [
  { href: "home", name: "home" },
  { href: "about", name: "about" },
  { href: "menu", name: "menu" },
  { href: "team", name: "team" },
  { href: "testimonials", name: "testimonials" },
  { href: "reservation", name: "book a table" },
  { href: "footer", name: "contact" },
];

export const heroData = {
  pretitle: "Nothing brings together like",
  title: "Bistro Cafe",
  subtitle:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  btnText: "Find out more",
};

export const socialData = [
  { href: "#!", icon: <FaYoutube /> },
  { href: "#!", icon: <FaFacebookF /> },
  { href: "#!", icon: <FaInstagram /> },
  { href: "#!", icon: <FaPinterestP /> },
  { href: "#!", icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: "our story",
  title: "who we are",
  subtitle:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur, quasi minima molestiae ex exercitationem culpa quisquam architecto quaerat, iusto dolores labore, sapiente magni rem commodi aperiam ad dolorem neque ducimus. Placeat vel non quod quis pariatur a aperiam, aliquam adipisci voluptatum voluptatem sit cupiditate dolore natus beatae earum omnis.",
  btnText: "find out more",
  image: AboutImg,
};

export const menuData = {
  title: "delicious flavour of autumn",
  subtitle: "view all menu for tasty meal today",
  modelImg: ModelWhiteImg,
  btnText: "view complete menu",
  menuItems: [
    {
      image: MenuImg1,
      name: "Chocolate Cake",
      price: "$7.99",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: MenuImg2,
      name: "Veggie Burger",
      price: "$9.49",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: MenuImg3,
      name: "King Burger",
      price: "$8.50",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: MenuImg4,
      name: "Mexican Burger",
      price: "$9.99",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
  ],
};

export const teamData = {
  pretitle: "our team",
  title: "meet our chef",
  sub1: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.",
  sub2: "Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.",
  name: "john doe",
  occupation: "executive chef",
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: "1500+ statisfied clients",
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar1,
      name: "Rick Thompson",
      occupation: "CEO of Delightful",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar2,
      name: "John Doe",
      occupation: "CEO of Delightful",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar3,
      name: "Henry A.",
      occupation: "CEO of Delightful",
    },
  ],
};

export const reservationData = {
  title: "booking form",
  subtitle:
    "Call (940) 321-0134 from 5AM - 11PM daily, or book online with OpenTable. Reservations required for parties of 6 or more.",
  modelImg: ModelBlackImg,
  btnText: "make a reservation",
};

export const newsletterData = {
  title: "join our newsletter",
  subtitle: "Get latest news & updates in your inbox.",
  placeholder: "your_email@example.com",
  btnText: "subscribe now",
};

export const footerData = {
  contact: {
    title: "contact location",
    address: "207 Swisher Rd Lake Dallas, Texas(TX), 75065",
    phone: "(940) 321-0134",
  },
  hours: {
    title: "working hours",
    program: [
      {
        days: "monday - friday",
        hours: "09:00 AM - 10:00 PM",
      },
      {
        days: "saturday - sunday",
        hours: "09:00 AM - 11:00 PM",
      },
    ],
  },
  social: {
    title: "social network",
    icons: [
      { href: "#!", icon: <FaYoutube /> },
      { href: "#!", icon: <FaFacebookF /> },
      { href: "#!", icon: <FaInstagram /> },
      { href: "#!", icon: <FaPinterestP /> },
      { href: "#!", icon: <FaDiscord /> },
    ],
  },
};
