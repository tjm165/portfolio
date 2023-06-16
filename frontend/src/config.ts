type Config = {
  DRAFT_MODE: boolean;
  cdn: string;
};

const config: Config = {
  DRAFT_MODE: Boolean(process.env.NODE_ENV) || false,
  cdn: "http://d307urd3htsez.cloudfront.net/portfolio/blog",
};

console.log(process.env);

export default config;
