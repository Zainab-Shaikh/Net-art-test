import Image from "./components/Image";
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";

import logo from "./asserts/logo.png";
import award from "./asserts/1.png";
import people from "./asserts/2.png";
import machinesImg from "./asserts/3.png";
import phone from "./asserts/phone.png";
import facebook from "./asserts/facebook.png";
import world from "./asserts/world.png";

import style from "./styles/style.module.css";
import classNames from "classnames";
import { getByPlaceholderText } from "@testing-library/dom";

function App() {
  const logoClass = classNames(style.logo, style.center);
  const para = classNames(style.text, style.disInline);
  const machines = classNames(style.machines, style.center, style.text);
  const toolsName = classNames(style.text, style.center);
  const type = classNames(style.type);
  const footer = classNames(style.footer, style.disFlex);
  return (
    <>
      {/* logo */}
      <Image src={logo} className={logoClass} />
      <section class={style.disFlex}>
        {/* Award image */}
        <Image src={award} className={style.award}></Image>
        <section className={style.mainContent}>
          <Header text="C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time."></Header>
          <ul>
            <li>
              <Paragraph
                text=" C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy."
                className={style.text}
              />
            </li>
            <li>
              <Paragraph
                text="C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. "
                className={style.text}
              />
            </li>
          </ul>
          <Image src={people} className={style.peopleImg} />
          <p className={style.text}>
            Government of India has awarded the
            <span> "National Energy Conservation Award 2018"</span>. Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State."
          </p>
        </section>
      </section>
      {/* new section */}
      <section>
        <Paragraph
          className={toolsName}
          text="INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. "
        />
        <Image src={machinesImg} className={machines} />
        <Paragraph
          text="Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors "
          className={toolsName}
        />
        <section className={style.line}></section>
      </section>
      <section>
        <Header
          className={style.center}
          text="C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS"
        />
        <section className={style.center} style={{ padding: 0 }}>
          <ul className={type}>
            <li>CHEMICALS & PROCESS</li>
            <li>POWER</li>
            <li>WATER & WASTE WATER</li>
            <li>OILS & GAS</li>
            <li>PHARMA SUGARS & DISTILLERIES</li>
            <li>PAPER & PULP</li>
            <li>MARINE & DEFENCE</li>
            <li>METAL & MINING</li>
            <li>FOOD & BEVERAGE</li>
            <li>PETROCHEMICAL & REFINERIES</li>
            <li>SOLAR </li>
            <li>BUILDING</li>
            <li>HVAC</li>
            <li>FIRE</li>
            <li>FIGHTING</li>
            <li>AGRICULTURE & RESIDENTIAL</li>
          </ul>
        </section>
      </section>
      {/* Footer contact Page */}
      <section className={footer}>
        <div>
          <Image src={phone} className={style.footerIcon} />
          Toll free 1800 200 1234
        </div>
        <div>
          <Image src={facebook} className={style.footerIcon} />
          www.facebook.com/cripumps
        </div>
        <div>
          <Image src={world} className={style.footerIcon} />
          www.crigroups.com
        </div>
      </section>
    </>
  );
}

export default App;
