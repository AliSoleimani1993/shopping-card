import { useState, useContext } from 'react'

import {Navbar as NavbarBs, Button, Modal} from 'react-bootstrap'
import { BsCart } from 'react-icons/bs'
import { CartContext } from '../context/CartContext'
import CartProduct from './CartProduct'

function Navbar(){

    const [showModul, setShowModal] = useState(false)

    const cart = useContext(CartContext)


    const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)


    const handleShow = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }
    return(
        <>
        <NavbarBs className='border-bottom border-secondary'>
            <NavbarBs.Collapse className='justify-content-end'>
                <Button onClick={handleShow} variant='btn btn-outline-secondary' className='text-black'>

                ({productCount})<BsCart className='mx-2'></BsCart>carro de la compra
                </Button>
            </NavbarBs.Collapse>
        </NavbarBs>
        <Modal show={showModul}
         onHide={handleClose} 
         contentClassName='card-bg' 
         dir='rtl'>

            <Modal.Header>
                <Modal.Body>
                    {productCount > 0 ? (
                        <>
                        <h3 className='mb-4'>Carro de la compra</h3>
                        { cart.items.map((item) => (
                            <CartProduct key={item.id} id={item.id} 
                            quantity={item.quantity}></CartProduct>

                        )) }
                        <h3>cantidad total: {cart.getTotalAmount()}</h3>
                        </>
                    ) : (
                        <h3>El carrito de compras está vacío</h3>
                    )}
                    <Button 
                    onClick={handleClose}
                    variant='btn btn-outline-secondary'
                    className='mt-4 mx-3 text-black'>Cierre</Button>
                </Modal.Body>
            </Modal.Header>
        </Modal>

        </>
        
    )
}

export default Navbar