import React, { useEffect } from 'react';
import ModalLoading from '../../components/ModalLoading';

//values
import { initialProduct } from '../../constants';
import { getRealm } from '../../services/realm.service';

//reducers
import productReducer from '../../store/reducers/productReducer';
import productsReducer from '../../store/reducers/productsReducer';

//contexts
export const AppContext = React.createContext({});

//providers
export const AppProvider = ({ children }) => {
  const [product, productDispatch] = React.useReducer(productReducer, initialProduct);
  const [products, productsDispatch] = React.useReducer(productsReducer, []);
  const [modalVisible, setModalVisible] = React.useState(false);

  const addLoader = () => setModalVisible(true);
  const removeLoader = () => setModalVisible(false);

  useEffect(() => {
    let realm = null;

    getRealm()
      .then((response) => {
        realm = response;
      });

    return () => {
      if (realm !== null) {
        realm.close();
      }
    }
  }, [getRealm])

  return (
    <AppContext.Provider value={{
      product,
      productDispatch,

      products,
      productsDispatch,

      addLoader,
      removeLoader
    }}>
      { children}

      <ModalLoading
        visible={modalVisible}
        setVisible={setModalVisible}
      />
    </AppContext.Provider>
  )
}