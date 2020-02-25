import React from 'react';

import Container from './components/Container';
import Pages from './pages';
import { CartProvider } from './providers/Cart';

const App: React.FC<{}> = () => {
  return (
    <Container>
      <CartProvider>
        <Pages />
      </CartProvider>
    </Container>
  )
}

export default App;