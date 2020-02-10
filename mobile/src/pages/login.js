import React, {useState, useEffect, useRef } from 'react';
import {
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    Animated
} from 'react-native';
// import Animated from 'react-native-reanimated';

import {
    Container,
    FormControl
} from './styles';

const width = Dimensions.get('window').width;


export default function Login({navigation}){

    const location = new Animated.Value(width);

    useEffect(() => {
        Animated.timing(location, {
            toValue: 0,
            timing: 500,
            useNativeDriver: true
        }).start();
    }, []);

    return(
        <Container style={{alignItems: 'center'}}>
            <Animated.View
                style={{translateY: location}}
                >
                <FormControl
                    style={styles.formControl}
                    placeholderTextColor='#767676'
                    placeholder="e-mail" />
                <TextInput
                    style={styles.formControl}
                    placeholderTextColor='#767676'
                    secureTextEntry={true}
                    placeholder="senha" />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Home')
                    }}
                    style={styles.btn}>
                    <Text
                        style={styles.btnTxt}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </Container>
        
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#292840',
        padding: 50
    },
    formControl: {
        backgroundColor: '#efefef',
        width: width-50,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        borderRadius: 5,
        marginBottom: 7
    },
    btn: {
        backgroundColor: '#2CDA4D',
        width: width-50,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    btnTxt: {
        color: '#efefef',
        fontSize: 20
    }
})