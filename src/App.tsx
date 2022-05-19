import { Wrapper } from './App.style';
import IShopping from './components/IShopping';
import { IShoppingSale } from './api/structures/shoppings/sales/IShoppingSale';

interface Props
{
  sale: IShoppingSale;
}

function App({ sale }: Props) {
  return (
    <Wrapper className="App">
      <IShopping sale={sale} />
    </Wrapper>
  );
}

export default App;
