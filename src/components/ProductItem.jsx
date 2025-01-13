import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import PropTypes from 'prop-types'; // Import PropTypes
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

function ProductItem({ product }) {

  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)
  return (
    <Card className="mt-5">
      <Card.Body>
        <Card.Img
          variant="top"
          src={product.image}
          height="200px"
          style={{ objectFit: 'cover' }}
        />
        <Card.Title align="right" className="text-black pt-4">
          {product.title}
        </Card.Title>
        <Card.Text align="right" className="text-black">
          {product.price} precio
        </Card.Text>
        {productQuantity > 0 ? (
          <>
          <Form as={Row}>
            <Form.Label column='true' sm='6' className='text-black'>
              {productQuantity} : cantidad
            </Form.Label>
            <Col sm='6'>
            <Button 
            onClick={() => cart.addItemToCart(product.id)}
            sm='6' 
            className='mx-2 text-black'
            variant='btn btn-outline-secondry'
            >+</Button>
            <Button 
            onClick={() => cart.removeItemFromCart(product.id)}
            sm='6' 
            className='mx-2 text-black'
            variant='btn btn-outline-secondry'
            >-</Button>
            </Col>
          </Form>
          <Button onClick={() => cart.deleteFromCart(product.id)} className='my-4' variant='btn btn-black'>
          Quitar del carrito
          </Button>
          </>
        ): (
          <Button 
         onClick={() => cart.addItemToCart(product.id)}
        variant="btn btn-outline-secondary" 
        className="text-black">
        Añadir al carrito de compras
        </Button>
        )}
      </Card.Body>
    </Card>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,  // Adjusted for price being a number
  }).isRequired,
};

export default ProductItem;