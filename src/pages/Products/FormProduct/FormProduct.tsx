import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faMinus, faCheck } from "@fortawesome/free-solid-svg-icons";

import Box from '../../../components/Box';
import ImageCard from '../../../components/ImageCard';
import TextBox from '../../../components/TextBox';
import Card from '../../../components/Card';
import CardFooter from '../../../components/CardFooter';
import Button from '../../../components/Button';

interface IProduct {
  id: string,
  title: string,
  helper: string,
  description: string,
  price: number,
  editing: boolean
}

interface IProps {
  product: IProduct,
  handleChange: (product: any) => void,
  addToCart: (id: string, amount: number) => void
}

const FormProduct: React.FC<IProps> = ({ product, handleChange, addToCart }) => {

  const [productUpdated, setProductUpdated] = useState<IProduct>(null);


  useEffect(() => {
    if (product) {
      setProductUpdated({ ...product, editing: false })
    }
    return () => setProductUpdated(null)
  }, [])

  const handleEdit = (field, value) => {
    setProductUpdated({ ...productUpdated, [field]: value })
  }

  const handleChangeProduct = () => {
    handleChange({ ...productUpdated });
    setProductUpdated({ ...productUpdated, editing: false })
  }

  return (
    <>
      {productUpdated && (
        <Card>
          {!productUpdated.editing && (
            <Box justifyContent="flex-end">
              <Button icon={<FontAwesomeIcon icon={faEdit} />} rounded={true} handleClick={() => handleEdit('editing', !productUpdated.editing)} />
            </Box>
          )}
          <Box>
            <ImageCard src="https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png" alt=""></ImageCard>
          </Box>
          <Box>
            <TextBox name='title' color='#000000' value={productUpdated.title} fontSize='22px' fontWeight='bold' />
          </Box>
          <Box>
            <TextBox name='helper' color='#696569' value={productUpdated.helper} fontSize='16px' />
          </Box>
          <Box>
            <TextBox name='price' color='#000000' value={`RD$${productUpdated.price.toString()}/Unit`} fontSize='16px' fontWeight='bold' />
          </Box>
          <Box>
            <TextBox name='description' color='#32CD32' value={productUpdated.description} fontSize='12px' fontWeight='bold' isEditable={productUpdated.editing} handleChange={handleEdit} />
          </Box>
          <CardFooter>
            {!productUpdated.editing ? (
              <Box justifyContent="space-around">
                <Button icon={<FontAwesomeIcon icon={faMinus} />} rounded={true} handleClick={() => { }} />
                <TextBox name='amount' color='#000000' value='1' fontSize='12px' />
                <Button icon={<FontAwesomeIcon icon={faPlus} />} rounded={true} handleClick={() => { }} />
                <Button text="ADD" handleClick={() => addToCart(productUpdated.id, 1)} />
              </Box>
            ) : (
                <Box>
                  <Button icon={<FontAwesomeIcon icon={faCheck} />} rounded={true} handleClick={() => handleChangeProduct()}></Button>
                </Box>
              )}
          </CardFooter>
        </Card>
      )}
    </>
  )
}

export default FormProduct;