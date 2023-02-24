import Navbar from "components/Navbar";
import { Alfa_Slab_One } from "@next/font/google";
import styles from "../styles/Header.module.css";

const alfaSlabOne = Alfa_Slab_One({ weight: "400", subsets: ["latin"] });

const Header = () => {
  return (
    <>
      <h1 className={`${alfaSlabOne.className} ${styles.headingPrimary}`}>
        Evan Fetherolf
      </h1>
      <Navbar />
    </>
  );
};

export default Header;
