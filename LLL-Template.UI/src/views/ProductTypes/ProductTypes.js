/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ProductTypeForms from '../../components/Forms/ProductTypeForms/ProductTypeForms';
import { ProductTypeCards } from '../../components/Cards/ProductTypeCards/ProductTypeCards';
import {
  ProductTypeContainer,
  ProductTypeWrapper,
  Column1,
  AddButtonContainer,
  AddProductTypeButton,
  AddProductTypeButtonImg,
  Button,
  ButtonImg,
  Modal,
} from './ProductTypesElements';
import add from '../../Assets/ActionIcons/Add.png';
import deleted from '../../Assets/ActionIcons/Delete.png';

export const ProductTypes = ({
  user, categories, productTypes, setProductTypes
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ProductTypeContainer className="ProductTypeContainer" id="ProductTypeContainer">
      <ProductTypeWrapper className="ProductTypeWrapper" id="ProductType">
          {
            user.roleTypeName === 'Designer' || user.roleTypeName === 'Administrator'
              ? <AddButtonContainer className="AddButtonContainer">
                  <AddProductTypeButton className="addProductType" onClick={openModal}>
                    <AddProductTypeButtonImg className="AddProductTypeButtonImg" src={add}>
                    </AddProductTypeButtonImg>
                  </AddProductTypeButton>
                </AddButtonContainer>
              : <div></div>
            }
            <Modal
              isOpen={modalIsOpen}
              className="Modal"
            >
              <Button className="modalClose" onClick={closeModal}><ButtonImg src={deleted}/></Button>
              <ProductTypeForms
                productTypeFormTitle="Add Product Type"
                setProductTypes={setProductTypes}
                productTypes={productTypes}
                categories={categories}
              />
            </Modal>
            <Column1 className="ProductTypeColumn1">
              {productTypes?.map((productTypeInfo) => (
                <ProductTypeCards
                  key={productTypeInfo.id}
                  id={productTypeInfo.id}
                  categoryId={productTypeInfo.categoryId}
                  typeName={productTypeInfo.typeName}
                  productTypeImageUrl={productTypeInfo.productTypeImageUrl}
                  setProductTypes={setProductTypes}
                  productTypes={productTypes}
                  categories={categories}
                  user={user}
                />
              ))}
            </Column1>
        </ProductTypeWrapper>
      </ProductTypeContainer>
  );
};

ProductTypes.propTypes = {
  user: PropTypes.any,
  productTypes: PropTypes.any,
  setProductTypes: PropTypes.func,
  categories: PropTypes.any,
};

export default ProductTypes;
