import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import {
  Container,
  Card,
  Price,
  ProductDetail,
  ProductImage,
  ProductList,
  Title,
  StyledButton,
  ButtonText,
} from './styles';

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/products');
      if (response) {
        const data = response.data.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));
        setProducts(data);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <ProductList
        data={products}
        numColumns={2}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => {
          return (
            <Card>
              <ProductImage source={{ uri: item.image }} />
              <ProductDetail>
                <Title>{item.title}</Title>
                <Price>{item.priceFormatted}</Price>
              </ProductDetail>
              <StyledButton>
                <ButtonText>ADD TO CART</ButtonText>
              </StyledButton>
            </Card>
          );
        }}
      />
    </Container>
  );
};

Main.navigationOptions = () => ({
  title: 'Products',
});

export default Main;
