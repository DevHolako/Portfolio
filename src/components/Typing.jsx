import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        "Fullstack Developer",
        3000,
        "Gamer",
        2000,
        "Team Player",
        2000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    />
  );
};

export default Typing;
