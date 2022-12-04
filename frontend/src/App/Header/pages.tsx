type NavOption = {
  title: string;
  push: string;
};

const pages: NavOption[] = [
  { title: "About", push: "/about" },
  { title: "Blog", push: "/blog" },
  { title: "Contact", push: "/contact" },
];

export default pages;
