import './app.scss';
import { useContext } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router,Routes, Route, Outlet } from 'react-router-dom'
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { AuthContext } from './context/authContext/AuthContext';
import ListList from './pages/listList/ListList';
import NewList from './pages/newList/NewList';
import List from './pages/list/List';

const AppLayout = ({user}) => user ? (
  <>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  </>
): <Login />;

function App() {
    const { user } = useContext(AuthContext);
  return (
    <>
    <Router>      
      <Routes>
        <Route path="/login" element={user ? <Home /> : <Login/>} />
        <Route element={<AppLayout user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/movies" element={<ProductList />} />
          <Route path="/movie/:productId" element={<Product />} />
          <Route path="/newmovie" element={<NewProduct />} />
          <Route path="/lists" element={<ListList />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="/newlist" element={<NewList />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
