import React, { useState } from "react";
import styles from "./styles.module.scss";
import closeIcon from "../../icons/close.svg";
import { CatalogButtonMenu } from "../../../features/catalog-button-menu";
import { ProductCard } from "../../../widgets/product-card";
import { initialProducts } from "../../config/initialProducts";
interface IModal {
  title: string;
  isShowModal: boolean;
  isDepthModal: boolean;
  handleClose?: () => void;
  handleBack?: () => void;
}

const CatalogModal: React.FC<IModal> = ({
  title,
  isShowModal,
  isDepthModal,
  handleClose,
  handleBack,
}) => {
  return (
    <React.Fragment>
    {isShowModal && (
      <div className={styles.modal__stub}></div>
    )}
    <div className={`${styles.modal} ${isShowModal && styles.active}`}>
      
      <div className={styles.modal__container}>
        <div className={styles.modal__header}>
          {isDepthModal && <button onClick={handleBack}></button>}
          <p className={styles.modal__title}>{title}</p>
          <button className={styles.modal__close} onClick={handleClose}>
            <img src={closeIcon} alt="" />
          </button>
        </div>
        {/* FIXME перенести buttons в фичи */}
        <CatalogButtonMenu />
        <div className={styles.modal__menu}>
          {initialProducts.map((item) => (
            <ProductCard
              key={item.id}
              productImage={item.image}
              price={item.price}
              name={item.name}
              amount={item.amount}
            />
          ))}
          <button className={styles.modal__trash}>
            
          </button>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export { CatalogModal };