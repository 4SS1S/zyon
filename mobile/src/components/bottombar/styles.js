import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #4E458C;
    padding: 15px 10px;
    display: flex;
    flex-direction: row;
    transform: translate(0,40px);
`;

export const ContainerButton = styled.TouchableOpacity`
    flex: 2;
    padding: 0 2px;
    align-items: center;
`;

export const NewPostComponent = styled.TouchableOpacity`
    flex: 2;
    align-items: center;
    justify-content: center;
    transform: translate(0,-30px);
    border-radius: 50px;
    background-color: #4E458C;
    border: 1px solid #4EBFD9;
    width: 50px;
    height: 65px;
    box-shadow: 10px 10px 12px #fff;
`;