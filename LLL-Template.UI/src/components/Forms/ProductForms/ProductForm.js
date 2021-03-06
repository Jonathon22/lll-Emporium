import React, { useState, useEffect } from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { addProduct, updateProduct, getProducts } from '../../../helpers/data/productData';
import {
  ProductFormTitle,
  Button,
  Form,
  Label,
  ButtonImg,
  Option,
} from './ProductFormElements';
import add from '../../../Assets/ActionIcons/Add.png';

const ProductForm = ({
  productFormTitle,
  setProducts,
  productImageUrl,
  productName,
  productDescription,
  price,
  inventoryCount,
  id,
  productTypeId,
  productTypes,
  user,
}) => {
  const [product, setProduct] = useState({
    productImageUrl: productImageUrl || '',
    productName: productName || '',
    productDescription: productDescription || '',
    price: price || '',
    inventoryCount: inventoryCount || '',
    id: id || '',
    productTypeId: productTypeId || '',
  });

  useEffect(() => {
    let mounted = true;
    const productObj = {
      productImageUrl: productImageUrl || '',
      productName: productName || '',
      productDescription: productDescription || '',
      price: price || '',
      inventoryCount: inventoryCount || '',
      id: id || '',
      productTypeId: productTypeId || '',
    };
    if (mounted) {
      setProduct(productObj);
    }
    return () => {
      mounted = false;
      return mounted;
    };
  }, [productImageUrl, productName, productDescription, price, productTypeId]);

  const handleInputChange = (e) => {
    setProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.id) {
      updateProduct(product.id, product).then(() => getProducts().then((response) => setProducts(response)));
    } else {
      const productObj = {
        productImageUrl: product.productImageUrl,
        productName: product.productName,
        productDescription: product.productDescription,
        price: product.price,
        inventoryCount: product.inventoryCount,
        productTypeId: product.productTypeId,
        designerId: user.id,
      };
      addProduct(productObj)
        .then(() => getProducts().then((response) => setProducts(response)));
      setProduct({
        productImageUrl: '',
        productName: '',
        productDescription: '',
        price: '',
        inventoryCount: '',
        id: null,
        productTypeId: '',
      });
    }
  };

  return (
    <Form id="addProductForm" autoComplete="off" onSubmit={handleSubmit}>
      <ProductFormTitle id="productFormTitle">
        {productFormTitle}
      </ProductFormTitle>
      <Label className="productNameLabel">Name:</Label>
      <Input
        name="productName"
        id="productName"
        value={product.productName}
        type="text"
        placeholder="Enter a Name"
        onChange={handleInputChange}
      ></Input>
      <Label htmlFor="productImageURL">Image URL: </Label>
      <Input
        name="productImageUrl"
        id="productImageUrl"
        value={product.productImageUrl}
        type="url"
        placeholder="Enter an Image URL"
        onChange={handleInputChange}
      ></Input>
      <Label htmlFor="productDescription">Description: </Label>
      <Input
        name="productDescription"
        id="productDescription"
        value={product.productDescription}
        type="text"
        placeholder="Enter a Description"
        onChange={handleInputChange}
      ></Input>
      <Label htmlFor="price">Price: </Label>
      <Input
        name="price"
        id="price"
        value={product.price}
        type="text"
        placeholder="Enter a Price"
        onChange={handleInputChange}
      ></Input>
      <Label htmlFor="price">Inventory count: </Label>
      <Input
        name="inventoryCount"
        id="price"
        value={product.inventoryCount}
        type="text"
        placeholder="Enter number of items in stock"
        onChange={handleInputChange}
      ></Input>
      <Label>Product Type:</Label>
      <Input
        className="item"
        type="select"
        name="productTypeId"
        placeholder="Product Type"
        id="exampleSelect"
        onChange={handleInputChange}
      >
        {productTypes?.map((productType) => (
          <Option
            key={productType.id}
            value={productType.id}
            selected={productType.id === productTypeId}
          >
            {productType.typeName}
          </Option>
        ))}
      </Input>
      <Button className="addProduct" type="submit">
        <ButtonImg src={add}></ButtonImg>
      </Button>
    </Form>
  );
};

ProductForm.propTypes = {
  productFormTitle: PropTypes.string.isRequired,
  setProducts: PropTypes.func,
  productImageUrl: PropTypes.string,
  productName: PropTypes.string,
  productDescription: PropTypes.string,
  price: PropTypes.number,
  inventoryCount: PropTypes.number,
  id: PropTypes.string,
  productTypeId: PropTypes.string,
  productTypes: PropTypes.any,
  user: PropTypes.any,
  product: PropTypes.any,
};

export default ProductForm;
