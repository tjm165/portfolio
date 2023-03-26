import { ReactNode } from "react";
type TechCardPropTypes = {
  name: string;
  fullName?: string;
  icon: string;
  description: ReactNode;
  backgroundColor: string;
};

export default TechCardPropTypes;
