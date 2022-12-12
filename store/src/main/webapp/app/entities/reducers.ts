import productOrder from 'app/entities/product-order/product-order.reducer';
import shipment from 'app/entities/invoice/shipment/shipment.reducer';
import productCategory from 'app/entities/product-category/product-category.reducer';
import orderItem from 'app/entities/order-item/order-item.reducer';
import invoice from 'app/entities/invoice/invoice/invoice.reducer';
import notification from 'app/entities/notification/notification/notification.reducer';
import customer from 'app/entities/customer/customer.reducer';
import product from 'app/entities/product/product.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  productOrder,
  shipment,
  productCategory,
  orderItem,
  invoice,
  notification,
  customer,
  product,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
