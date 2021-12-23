import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import PhonesList from './pages/PhonesList/PhonesList';
import PhoneDetail from './pages/PhoneDetail/PhoneDetail';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate to="/phones" />} />
        <Route exact path='/phones' element={<PhonesList />} />
        <Route exact path='/phones/:id' element={<PhoneDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
