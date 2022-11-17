type NavOption = {
  title: string;
  push: string;
};

const pages: NavOption[] = [
  { title: "About", push: "/about" },
  { title: "Blog", push: "/blog" },
];

export default pages;
