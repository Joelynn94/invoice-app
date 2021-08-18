import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Button from "../../components/Button/Button";
import FormInput from "../FormInput/FormInput";

import "./BillItem.scss";

const BillItem = ({
  id,
  items,
  itemName,
  quantity,
  price,
  total,
  setInvoice,
}) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  console.log(total);

  return (
    <>
      <section className="bill-item">
        {items.length > 0 ? (
          <>
            <FormInput
              label="Item Name"
              className="item-name"
              name="itemName"
              type="text"
              value={itemName}
              onChange={(itemName) =>
                setInvoice((prev) => {
                  return {
                    ...prev,
                    items: items.map((item) =>
                      item.id === id ? { ...item, itemName } : item
                    ),
                  };
                })
              }
              style={{
                backgroundColor: theme.cardBg,
                border: `1px solid ${theme.borderColor}`,
                color: theme.text,
              }}
            />
            <FormInput
              label="Qty"
              className="item-qty"
              name="quantity"
              type="text"
              pattern=""
              value={quantity}
              onChange={(quantity) =>
                setInvoice((prev) => {
                  return {
                    ...prev,
                    items: items.map((item) =>
                      item.id === id ? { ...item, quantity } : item
                    ),
                  };
                })
              }
              style={{
                backgroundColor: theme.cardBg,
                border: `1px solid ${theme.borderColor}`,
                color: theme.text,
              }}
            />
            <FormInput
              label="Price"
              className="item-price"
              name="price"
              type="text"
              value={price}
              onChange={(price) =>
                setInvoice((prev) => {
                  return {
                    ...prev,
                    items: items.map((item) =>
                      item.id === id ? { ...item, price } : item
                    ),
                  };
                })
              }
              style={{
                backgroundColor: theme.cardBg,
                border: `1px solid ${theme.borderColor}`,
                color: theme.text,
              }}
            />
            <div className="bill-total">
              <FormInput
                label="Total"
                className="item-total"
                name="total"
                type="text"
                disabled
                value={total}
                onChange={(total) =>
                  setInvoice((prev) => {
                    return {
                      ...prev,
                      items: items.map((item) =>
                        item.id === id ? { ...item, total } : item
                      ),
                    };
                  })
                }
                style={{
                  backgroundColor: theme.cardBg,
                  border: `1px solid ${theme.borderColor}`,
                  color: theme.text,
                }}
              />
              <Button
                icon="delete"
                onClick={(e) =>
                  setInvoice((prev) => {
                    return {
                      ...prev,
                      items: items.filter((item) => item.id !== id),
                      isSubmitted: true,
                    };
                  })
                }
              ></Button>
            </div>
          </>
        ) : (
          <p>Please add an item</p>
        )}
      </section>
    </>
  );
};

export default BillItem;
