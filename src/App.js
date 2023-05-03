// App.js
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import ProductView from './components/ProductView';

function App() {

  const productId = "1";

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <ProductView productId={productId} />
      </div>
    </ApolloProvider>
  );
}

export default App;
