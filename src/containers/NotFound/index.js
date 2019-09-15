import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Button from '../../components/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
`;

const Message = styled.h2`
  font-size: 32px;
  font-weight: 600;
  padding: 30px 0px;
`;

const NotFound = () => (
  <Wrapper>
    <Helmet>
      <title>Not Found</title>
    </Helmet>
    <Message>No result available</Message>
    <Button label="Home" primary href="/" />
  </Wrapper>
);

export default NotFound;
