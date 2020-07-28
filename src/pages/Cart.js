import React, { useEffect } from 'react';
import { connect }  from 'react-redux'
import { fetchCart, removeCompetition } from '../Redux/cart/cartActions'
import { Table } from 'react-bootstrap';

const Cart = ({ cart, fetchCart, removeCompetition }) => {  

    useEffect(() => {
        fetchCart()
    }, [])

        const autoRemove = setInterval(() => 
            cart.forEach((val, index) => {
                console.log('running')
                const itemExpTime = new Date(val.date_added).setMinutes(1)
                const currentTime = new Date().getTime()
                console.log(itemExpTime <= currentTime)
                if(itemExpTime <= currentTime) {
                    console.log('removing')
                    removeCompetition(val.id)
                }
            }), 1000
        )

        if(cart.length === 0 ) clearInterval(autoRemove)

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
            {
                cart.map((val, i) => {
                    
                   return ( 
                        <tr style={{backgroundColor: 'white'}}>
                            <td>{val.id}</td>
                            <td> {val.competition} </td>
                            <td> {val.selected_ticket} </td>
                            <td>{val.quantity}</td>
                            <td><button onClick={() => removeCompetition(val.id)}>Remove</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
        </Table>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart_items
    }
}

const mapDispatchToProps = {
    fetchCart,
    removeCompetition
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
