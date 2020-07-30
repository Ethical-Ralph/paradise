import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCart, removeCompetition } from "../Redux/cart/cartActions";
import { Table } from "react-bootstrap";

const Cart = ({ cart, fetchCart, removeCompetition }) => {
  useEffect(() => {
    fetchCart();
    console.log(cart.length, "ffff");
  }, []);

  useEffect(() => {
    const autoRemove = setInterval(() => {
      for (var i = 0; i < cart.length; i++) {
        const itemExpTime = new Date(cart[i].date_added).setMinutes(3);
        const currentTime = new Date().getTime();
        console.log(itemExpTime <= currentTime);
        if (itemExpTime <= currentTime) {
          removeCompetition(cart[i].id);
        }
      }
    }, 1000);
    return () => clearInterval(autoRemove);
  }, [cart]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Competition</th>
          <th>Ticket</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((val, i) => {
          return (
            <tr style={{ backgroundColor: "white" }}>
              <td>{val.id}</td>
              <td> {val.competition} </td>
              <td> {val.selected_ticket} </td>
              <td>{val.quantity}</td>
              <td>
                <button onClick={() => removeCompetition(val.id)}>
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart_items,
  };
};

const mapDispatchToProps = {
  fetchCart,
  removeCompetition,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
