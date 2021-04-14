import React from 'react';
import { FlatList, Text, View } from 'react-native';

//Components
import BlackArea from '../../components/BlackArea';
import ButtonBack from '../../components/ButtonBack';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import Page from '../../components/Page';
import Card from '../../components/Card';
import ContentLoading from '../../components/ContentLoading';

//hooks
import useApp from '../../hooks/useApp';
import Loading from '../../components/Loading';


const ContentList = ({ products, productsDispatch }) => {
    const [pagination, setPagination] = React.useState({
        minIndex: 0,
        maxIndex: 9,
    });

    const [loading, setLoading] = React.useState(false);

    const onScroll = () => {
        setLoading(true);

        const onResponse = (response) => {
            setTimeout( () => {
                setLoading(false);
    
                if (response.length>0) {
                    setPagination({
                        minIndex: pagination.minIndex+10,
                        maxIndex: pagination.maxIndex+10
                    });
        
                    productsDispatch({type: 'ADD', payload: {products: response}});
                }
            }, 1000)
        }

        productsDispatch({type: 'LIST', payload: { minIndex: pagination.minIndex+10, maxIndex:pagination.maxIndex+10, onResponse }});
    }

    return (
    <>
        <FlatList
            data={products}
            onScrollEndDrag={onScroll}
            keyExtractor={ (item) => item.barcode }
            renderItem={({item}) => <Card product={item}/>}
            ListFooterComponent={() => (
                <View style={{ paddingVertical: 8 }}>
                    {
                        loading ? <Loading/> : <></>
                    }
                </View>
            )}
        />
    </>
    );
}


export default () => {
    const { products, productsDispatch } = useApp();
    const [content, setContent] = React.useState(<ContentLoading/>);

    React.useState( () => {
        const onResponse = (response) => productsDispatch({ type: 'SET', payload: { products: response }});
        
        productsDispatch({ type: 'LIST', payload: { minIndex: 0, maxIndex: 9, onResponse } });
        return () => productsDispatch({ type: 'RESET' });
    }, [])

    React.useEffect( () => {
        const timeout = setTimeout( () => {
            if (products.length>0) {
                setContent(<ContentList products={products} productsDispatch={productsDispatch}/>);
            }
            else {
                setContent(<Text>Nenhum produto encontrado.</Text>)
            }
        }, 1000);

        return () => clearTimeout(timeout);
    }, [products]);

    return (
        <Page>
            <Navbar 
                left={<ButtonBack/>} 
                right={<Button text="Filtrar"/>}/>
            
            <BlackArea title="Lista de produtos" style={{ flex: 1 }}>
                {content}                
            </BlackArea>
        </Page>
    );
};