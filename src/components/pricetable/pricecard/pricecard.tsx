import React from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./pricecard.module.css";

interface PriceItem {
  id: number;
  title: string;
  desc: string;
  per: string;
  price: string;
}

const priceData: PriceItem[] = [
  {
    id: 1,
    title: "Basic",
    desc: "Try out Basic Plan Save",
    per: "25%",
    price: "10$",
  },
  {
    id: 2,
    title: "Popular",
    desc: "Try out Popular Plan Save",
    per: "35%",
    price: "20$",
  },
  {
    id: 3,
    title: "Primium",
    desc: "Try out Premium Plan Save",
    per: "45%",
    price: "35$",
  },
];

const Pricecard: React.FC = () => {
  const getBackgroundColor = (index: number): string => {
    // Assigning colors based on index
    switch (index) {
      case 0:
        return styles.red; // Use CSS module classes for colors
      case 1:
        return styles.green;
      case 2:
        return styles.blue;
      default:
        return styles.white; // default color
    }
  };

  return (
    <div className="container mt-5 mb-3">
      <div className="row m-0">
        {priceData.map((item, index) => (
          <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
            <div className={`${styles.card} card `} data-aos='flip-left' data-aos-achro-placement='top-center' data-aos-delay='500'>
              <div className={`text-white py-4 ${getBackgroundColor(index)}`}>
                <h3>{item.title}</h3>
                <p>
                  {item.desc} <span className={styles.percent}>{item.per}</span>
                </p>
                <h2 className={`${styles.dollar} fw-bold`}>
                  {item.price}{" "}
                  <span className="fw-light fs-6 text-white">/Hour</span>
                </h2>
              </div>

              <div className={`${styles.techwrapper} pt-3 pb-5 bg-dark`}>
                <div className="d-flex ms-3 align-items-center pt-3">
                  <FaCheck className={`${styles.icons}`} />
                  <p className="text-white ps-3 m-0 fw-light">
                    Next js Website
                  </p>
                </div>
                <div className="d-flex ms-3 align-items-center pt-3">
                  <FaCheck className={`${styles.icons}`} />
                  <p className="text-white ps-3 m-0 fw-light">
                    React js Website
                  </p>
                </div>
                <div className="d-flex ms-3 align-items-center pt-3">
                  <FaCheck className={`${styles.icons}`} />
                  <p className="text-white ps-3 m-0 fw-light">
                    FullStack js Website
                  </p>
                </div>
                <div className="d-flex ms-3 align-items-center pt-3">
                  <FaCheck className={`${styles.icons}`} />
                  <p className="text-white ps-3 m-0 fw-light">Authentication</p>
                </div>
                <div className="d-flex ms-3 align-items-center pt-3">
                  <FaCheck className={`${styles.icons}`} />
                  <p className="text-white ps-3 m-0 fw-light">Mern Website</p>
                </div>
              </div>

              <div className="bg-primary ">
                <button
                  type="button"
                  className="border-0 bg-transparent text-white py-3"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricecard;
