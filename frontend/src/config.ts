require("dotenv").config();

type Config = {
  DRAFT_MODE: boolean;
};

const config: Config = {
  DRAFT_MODE: Boolean(process.env.DRAFT) || false,
};

console.log(process.env);

export default config;
