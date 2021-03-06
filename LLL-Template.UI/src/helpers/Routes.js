import React, { memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home/Home';
import Products from '../views/Products/Products';
import Designers from '../views/Designers/Designers';
import PersonalProfile from '../views/PersonalProfile/PersonalProfile';
import { ProductTypes } from '../views/ProductTypes/ProductTypes';
import OrderHistory from '../views/OrderHistory/OrderHistory';
import EmptyCart from '../views/Cart/EmptyCart';
import { SellingHistory } from '../views/SellingHistory/SellingHistory';
import RoleTypeView from '../views/RoleTypes/RoleTypes';
import UserCardView from '../views/Users/Users';
import SingleCategoryView from '../views/SingleCategoryView/SingleCategoryView';
import SingleProductTypeView from '../views/SingleProductTypeView/SingleProductType';
import OrderDetailView from '../views/Cart/Order';
import SingleProductCard from '../components/Cards/ProductCards/SingleProductCard';
import DesignerProductView from '../views/DesignerProductView/DesignerProductView';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  // eslint-disable-next-line no-confusing-arrow
  const routeChecker = (taco) => user ? (
      <Component {...taco} user={user} />
  ) : (
      <Redirect to={{ pathname: '/', state: { from: taco.location } }} />
  );
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any,
};

function Routes({
  user, setUser,
  categories, setCategories,
  productTypes, setProductTypes,
  products, setProducts,
  setCartCount,
  cartId, setCartId
}) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          component={() => (
            <Home
              categories={categories}
              setCategories={setCategories}
              user={user}
            />
          )}
          categories={categories}
          setCategories={setCategories}
          user={user}
        />
        <Route
          exact
          path='/Categories/:categoryId'
          user={user}
          categories={categories}
          setCategories={setCategories}
          productTypes={productTypes}
          setProductTypes={setProductTypes}
          component={() => (
            <SingleCategoryView
              user={user}
              categories={categories}
              setCategories={setCategories}
              productTypes={productTypes}
              setProductTypes={setProductTypes}
            />
          )}
        />
        <Route
          exact
          path='/ProductTypes/:productTypeId'
          user={user}
          products={products}
          setProducts={setProducts}
          productTypes={productTypes}
          setProductTypes={setProductTypes}
          component={() => (
            <SingleProductTypeView
              user={user}
              productTypes={productTypes}
              setProductTypes={setProductTypes}
              products={products}
              setProducts={setProducts}
            />
          )}
        />
        <Route
          exact
          path='/ProductTypes'
          component={() => (
            <ProductTypes
              categories={categories}
              setCategories={setCategories}
              productTypes={productTypes}
              setProductTypes={setProductTypes}
              user={user}
            />
          )}
          categories={categories}
          setCategories={setCategories}
          productTypes={productTypes}
          setProductTypes={setProductTypes}
          user={user}
        />
        <Route
          exact
          path='/Products'
          component={() => (
            <Products
              productTypes={productTypes}
              setProductTypes={setProductTypes}
              products={products}
              setProducts={setProducts}
              user={user}
            />
          )}
          productTypes={productTypes}
          setProductTypes={setProductTypes}
          products={products}
          setProducts={setProducts}
          user={user}
        />
        <Route
          exact
          path='/Products/:id'
          user={user}
          component={() => (
            <SingleProductCard
              products={products} setProducts={setProducts}
              productTypes={productTypes} setProductTypes={setProductTypes}
              cartId={cartId} setCartId={setCartId}
              setCartCount={setCartCount}
              user={user}
            />
          )}
          productTypes={productTypes}
          setProductTypes={setProductTypes}
          products={products}
          setProducts={setProducts}
        />
        <Route
          exact
          path='/Products/Designers/:designerId'
          user={user}
          component={() => (
            <DesignerProductView
              productTypes={productTypes}
              setProductTypes={setProductTypes}
              products={products} setProducts={setProducts}
              setCartCount={setCartCount}
              cartId={cartId} setCartId={setCartId}
              user={user}
            />
          )}
          productTypes={productTypes}
          setProductTypes={setProductTypes}
          products={products}
          setProducts={setProducts}
        />
        <PrivateRoute exact path="/PersonalProfile" user={user}
          component={() => <PersonalProfile
            user={user} setUser={setUser}/>} />
        <Route exact path="/OrderHistory" component={() => <OrderHistory
          user={user} />} />
        <Route exact path="/SellingHistory"
          component={() => (
            <SellingHistory
              user={user}
              products={products}
              setProducts={setProducts}
            />
          )}
          user={user}
          products={products}
          setProducts={setProducts}
        />
        <Route exact path='/Users' component={() => <UserCardView />} />
        <Route exact path='/Designers' component={() => <Designers />} />
        <Route
          exact
          path="/orders/:orderId"
          user={user}
          component={() => <OrderDetailView
            user={user}
            setCartCount={setCartCount}
            cartId={cartId}
            setCartId={setCartId} />}
        />
        <Route exact path = "/emptyCart" component={() => <EmptyCart />} />
        <Route
          exact
          path='/Users/RoleTypes'
          component={() => <RoleTypeView />}
        />
        <PrivateRoute />
        <PrivateRoute />
        <Route path='*' />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
  categories: PropTypes.any,
  setCategories: PropTypes.func,
  products: PropTypes.any,
  setProducts: PropTypes.func,
  productTypes: PropTypes.any,
  setProductTypes: PropTypes.func,
  setCartCount: PropTypes.func,
  cartId: PropTypes.string,
  setCartId: PropTypes.func
};

export default memo(Routes);
