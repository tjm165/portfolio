import { ReactNode } from "react";
type TechCardPropTypes = {
  name: string;
  fullName?: string;
  icon: string;
  description: ReactNode;
};

export default TechCardPropTypes;
