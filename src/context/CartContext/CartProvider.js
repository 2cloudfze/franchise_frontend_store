import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const updateTotalAmount = (cartItems) => {
  let grandTotal = 0;
  cartItems.forEach((item) => {
    grandTotal += item.total;
  });
  return grandTotal;
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let newTotalAmount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const newQty = existingCartItem.qty + 1;
      const updatedItem = {
        ...existingCartItem,
        qty: newQty,
        total: existingCartItem.price * newQty,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      newTotalAmount = updateTotalAmount(updatedItems);
    } else {
      updatedItems = state.items.concat(action.item);
      newTotalAmount = updateTotalAmount(updatedItems);
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  let updatedItems;
  let newTotalAmount;
  if (action.type === "REMOVE" && action.clearAll === false) {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];

    if (existingItem.qty === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      newTotalAmount = updateTotalAmount(updatedItems);
    } else {
      const newQty = existingItem.qty - 1;
      const updatedItem = {
        ...existingItem,
        qty: newQty,
        total: existingItem.price * newQty,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      newTotalAmount = updateTotalAmount(updatedItems);
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  } else if (action.type === "REMOVE" && action.clearAll === true) {
    updatedItems = state.items.filter((item) => item.id !== action.id);
    newTotalAmount = updateTotalAmount(updatedItems);
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItemFromCartHandler = (id, clearAll) => {
    dispatchCartAction({ type: "REMOVE", id, clearAll });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
