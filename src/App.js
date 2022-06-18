import React, {useEffect, useState} from 'react';
import Catalog from "./pages/Catalog";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Wrapper from "./pages/Wrapper";
import ProductPage from "./pages/ProductPage";
import {PRODUCTS, USER} from "./helpers/mocks";
import AuthPage from "./pages/AuthPage";
import AddProductPage from "./pages/AddProductPage";
import ReportsPage from "./pages/ReportsPage";

const App = () => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || PRODUCTS);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || USER);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products])

    return (
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Wrapper user={user} setUser={setUser}/>}>
                        <Route index element={<Catalog products={products}/>}/>
                        <Route path={'/product/:id'} element={<ProductPage products={products}/>}/>
                        <Route path={'/auth'} element={<AuthPage setUser={setUser}/>}/>
                        <Route path={'/addProduct'} element={<AddProductPage setProducts={setProducts}/>}/>
                        <Route path={'/reports'} element={<ReportsPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
    );
};

export default App;