import React, { useState } from "react";
import { MyInput } from "../../shared/ui/kit/my-input";
import styles from "./styles.module.scss";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { MyButton } from "../../shared/ui/buttons/my-button";
import {
  addDeliveryAdress,
  setSelectedAdress,
} from "../../features/user-slice/deliverySlice";
import {
  hideMyModal,
  showMyModal as showMyModalAction,
} from "../../features/modal-slice/modalSlice";
import useModalScrollLock from "../../shared/hooks/useModalScrollLock";

interface IFormProps {}

const AdressForm: React.FC<IFormProps> = ({}) => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      data: {
        city: "",
        adress: "",
        apartment: "",
      },
    },
    onSubmit: (submittedValues) => {
      console.log(submittedValues);
    },
  });

  const { isModalOpen, setModalOpen } = useModalScrollLock();

  const firstAdressIntroduced = useSelector(
    (state: any) => state.delivery.adresses
  );

  const dispatch = useDispatch();

  const CustomHandleSubmit = () => {
    dispatch(setSelectedAdress(values.data));
    dispatch(showMyModalAction("Оформление"));
    handleSubmit();
  };

  return (
    <div className={styles.form}>
      <MyInput
        inputType="text"
        value={values.data.city}
        placeholder="Город"
        name="data.city"
        onChange={handleChange}
      />
      <MyInput
        inputType="text"
        value={values.data.adress}
        placeholder="Улица/Дом"
        name="data.adress"
        onChange={handleChange}
      />
      <MyInput
        inputType="text"
        value={values.data.apartment}
        placeholder="Квартира/Офис"
        name="data.apartment"
        onChange={handleChange}
      />

      <div className={styles.form__button}>
        <MyButton
          type="button"
          title="Подтвердить"
          handleClick={CustomHandleSubmit}
        />
      </div>
    </div>
  );
};

export { AdressForm };
