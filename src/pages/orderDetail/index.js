import React from 'react';
import ContainerPage from 'components/shared/containerPage/ContainerPage';
import OrderDetail from 'components/features/orderDetail/orderDetail';

const OrderDetailPage = () => {
  return (
    <React.Fragment>
      <ContainerPage>
        <OrderDetail />
      </ContainerPage>
    </React.Fragment>
  );
};

export default OrderDetailPage;
