import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './product-order.reducer';

export const ProductOrderDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const productOrderEntity = useAppSelector(state => state.store.productOrder.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="productOrderDetailsHeading">
          <Translate contentKey="storeApp.productOrder.detail.title">ProductOrder</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{productOrderEntity.id}</dd>
          <dt>
            <span id="placedDate">
              <Translate contentKey="storeApp.productOrder.placedDate">Placed Date</Translate>
            </span>
          </dt>
          <dd>
            {productOrderEntity.placedDate ? (
              <TextFormat value={productOrderEntity.placedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="status">
              <Translate contentKey="storeApp.productOrder.status">Status</Translate>
            </span>
          </dt>
          <dd>{productOrderEntity.status}</dd>
          <dt>
            <span id="code">
              <Translate contentKey="storeApp.productOrder.code">Code</Translate>
            </span>
          </dt>
          <dd>{productOrderEntity.code}</dd>
          <dt>
            <span id="invoiceId">
              <Translate contentKey="storeApp.productOrder.invoiceId">Invoice Id</Translate>
            </span>
          </dt>
          <dd>{productOrderEntity.invoiceId}</dd>
          <dt>
            <Translate contentKey="storeApp.productOrder.customer">Customer</Translate>
          </dt>
          <dd>{productOrderEntity.customer ? productOrderEntity.customer.email : ''}</dd>
        </dl>
        <Button tag={Link} to="/product-order" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/product-order/${productOrderEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ProductOrderDetail;
