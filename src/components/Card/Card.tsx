import { IcardProps } from "../../types";

const Card = ({ children }: IcardProps) => {
  return (
    <section className="py-4 px-6 rounded-[10px] border border-cardBorderColor bg-cardBgColor w-[830px] h-80">
      {children}
    </section>
  );
};

export default Card;
