import Marquee from "react-fast-marquee";

interface MarqueeCardsProps {
  children: React.ReactNode;
  direction: "left" | "right" | "up" | "down";
}

const MarqueeCards: React.FC<MarqueeCardsProps> = ({ children, direction }) => {
  return (
    <Marquee
      direction={direction}
      gradient={false}
      speed={100}
      pauseOnHover={true}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;
