import React, {useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';


import CardPost from '../cardpost';
import { data } from './data';


export default function Feed(){

    const [d, setD] = useState([]);
    const [viewable, setViewable] = useState([]);

    useEffect(()=>{
        load();
    }, []);

    async function load(){
        await setD([...d,...data]);
    }

    const handleViewableChanged = useCallback(({ changed }) => {
        setViewable(changed.map(({ item }) => item.id));
    }, []);

    return(
        <FlatList
            style={{marginBottom: -20,
                translateY: 20,
                height: 80,
                paddingLeft: 20,
                paddingRight: 20}}
            data={d}
            keyExtractor={item => String(item.id)}
            onEndReached={() => load()}
            onEndReachedThreshold={0.1}
            onViewableItemsChanged={handleViewableChanged}
            viewabilityConfig={{
                viewAreaCoveragePercentThreshold: 10,
            }}
            ListFooterComponent={<Text>Carregando</Text>}
            renderItem={({item}) => (
                <CardPost
                    item={item} />                    
            )}
        />
    )
}