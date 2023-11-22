import React, { useState } from "react";
import { MyInput } from "../../shared/ui/my-input";
import styles from "./styles.module.scss"
import { MySelect } from "../../shared/ui/my-select";


interface IFormProps {
  
}

const DeliveryForm: React.FC<IFormProps> = ({

}) => {
  //FIXME опять типизация

  return (
    <div className={styles.form}>
      <p className={styles.form__title}>Адрес</p>
      <MyInput placeholder="Улица/Проспект" name="city" onChange={() => {}}/>
      <MyInput placeholder="Дом" name="city" onChange={() => {}}/>
      <MyInput placeholder="Офис / Квартира" name="city" onChange={() => {}}/>
      <MyInput placeholder="Комментарий" name="city" onChange={() => {}}/>
      <MySelect placeholder="Город" value={''} name={''} onChange={() => {}}/>
      <MyInput placeholder="Комментарий" name="city" onChange={() => {}}/>
      <MyInput placeholder="Комментарий" name="city" onChange={() => {}}/>
      <MyInput placeholder="Комментарий" name="city" onChange={() => {}}/>
      <MyInput placeholder="Комментарий" name="city" onChange={() => {}}/>
    </div>
  );
};

export { DeliveryForm };
