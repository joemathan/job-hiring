import { IcardProps } from "../../types";

const Card = ({ children, cardStyle }: IcardProps) => {
  return <section className={cardStyle}>{children}</section>;
};

export default Card;
