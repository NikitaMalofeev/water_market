import React, { useMemo } from "react";
import styles from "./styles.module.scss";
import closeIcon from "../../../icons/stickIcon/close.svg";
import { useSelector } from "react-redux";
import { ProductCard } from "../../cards/product-card";
import {
  addToCart,
  removeFromCart,
} from "../../../../features/cart-slice/cartSlice";
import { useDispatch } from "react-redux";
import { MyButton } from "../../buttons/my-button";
import { IGood } from "../../../types/cartTypes";
import { showMyModal } from "../../../../features/modal-slice/modalSlice";

interface IModal {
  allGoods: Record<number, IGood>;
}

const OrderModal: React.FC<IModal> = ({
  allGoods,
}) => {
  //FIXME опять типизация
  const { cart } = useSelector((state: any) => state.allCart);

  const [totalQuantity, totalPrice] = useMemo(() => {
    let quantity = 0;
    let price = 0;

    for (const id of Object.keys(cart)) {
      quantity += cart[id];
      price += cart[id] * allGoods[Number(id)].price;
    }
    return [quantity, price];
  }, [cart, allGoods]);

  const dispatch = useDispatch();

  return (
    <React.Fragment>
        <div className={styles.modal__container}>
          <div className={styles.modal__cart}>
            {Object.values(allGoods).map((item: any, index) =>
              cart[item.id] ? (
                <ProductCard
                  key={index}
                  quantity={cart[item.id] ?? 0}
                  productId={item.id}
                  price={item.price}
                  name={item.name}
                  size={item.size}
                  productImage={item.image}
                  isOrderCard={true}
                  handleAdd={() => dispatch(addToCart(item.id))}
                  handleRemove={() => dispatch(removeFromCart(item.id))}
                />
              ) : null
            )}
          </div>
          <div className={styles.modal__confirm}>
            <div className={styles.modal__total}>
              <p>Сумма</p>
              <p>{totalPrice}₸</p>
            </div>
            <MyButton
              title="Подтвердить"
              handleClick={() => dispatch(showMyModal("Оформление"))}
            />
          </div>
        </div>
    </React.Fragment>
  );
};

export { OrderModal };
