import styled from 'styled-components/native';
import {
    Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;

export const Container = styled.View`
    display: flex;
    flex: 1;
    align-content: center;
    justify-content: center;
    /* align-items: center; */
    background-color: #292840;
    /* padding: 0 20px; */
`;

export const FormControl = styled.TextInput`
    background-color: #efefef;
    width: 80%;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
    border-radius: 5px;
    margin-bottom: 7px;
`;