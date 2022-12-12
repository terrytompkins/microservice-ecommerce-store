import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import { ReducersMapObject, combineReducers } from '@reduxjs/toolkit';

import getStore from 'app/config/store';

import entitiesReducers from './reducers';

import ProductOrder from './product-order';
import Shipment from './invoice/shipment';
import ProductCategory from './product-category';
import OrderItem from './order-item';
import Invoice from './invoice/invoice';
import Notification from './notification/notification';
import Customer from './customer';
import Product from './product';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  const store = getStore();
  store.injectReducer('store', combineReducers(entitiesReducers as ReducersMapObject));
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="product-order/*" element={<ProductOrder />} />
        <Route path="shipment/*" element={<Shipment />} />
        <Route path="product-category/*" element={<ProductCategory />} />
        <Route path="order-item/*" element={<OrderItem />} />
        <Route path="invoice/*" element={<Invoice />} />
        <Route path="notification/*" element={<Notification />} />
        <Route path="customer/*" element={<Customer />} />
        <Route path="product/*" element={<Product />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
