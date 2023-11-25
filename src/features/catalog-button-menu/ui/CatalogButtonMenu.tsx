import React from "react";
import { initialCatalogChapter } from "../../../shared/config/initialCatalogChapter";
import styles from "./styles.module.scss"
import { CatalogButton } from "../../../shared/ui/catalog-button";
const CatalogButtonMenu: React.FC = () => {

  return (
    <>
    <div className={styles.buttons}>
        {initialCatalogChapter.map((item, index) => (
            <CatalogButton title={item.name} key={index}/>
        ))}
      </div>
    </>
  );
};

export { CatalogButtonMenu };
