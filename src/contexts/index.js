import React from 'react';
import ModalLoading from '../components/ModalLoading';

//values
import { initialProduct } from '../constants';

//reducers
import productReducer from '../reducers/productReducer';
import productsReducer from '../reducers/productsReducer';

//contexts
export const AppContext = React.createContext({});

//providers
export function AppProvider({ children }) {
    const [product, productDispatch] = React.useReducer(productReducer, initialProduct);
    const [products, productsDispatch] = React.useReducer(productsReducer, []);
    const [modalVisible, setModalVisible] = React.useState(false);
    
    const addLoader = () => setModalVisible(true);
    const removeLoader = () => setModalVisible(false);

    return (
        <AppContext.Provider value={{
            product,
            productDispatch,
            
            products,
            productsDispatch,

            addLoader,
            removeLoader
        }}>
            { children }
            
            <ModalLoading
                visible={modalVisible}
                setVisible={setModalVisible}
            />
        </AppContext.Provider>
    )
} 