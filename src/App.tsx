import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ROUTER } from './constant';

import { Layout, MainPage } from './page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTER.MAIN} element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
