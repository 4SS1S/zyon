import styled from 'styled-components/native';

export const Card = styled.View`
    background-color: #EEEEEE;
    border-radius: 3px;
    margin-top: 20px;
    width: 100%;
`;

export const CardUserInfo = styled.View`
    display: flex;
    flex-direction: row;
    padding: 3px 10px;
`;

export const CardUserImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    box-shadow: 0 0 10px #303030;
`;

export const CardUserName = styled.Text`
    margin-top: 15px;
    font-size:  15px;
    margin-left: 6px;
    font-weight: bold;
    color: #292840;
`;

export const PostouComponent = styled.Text`
    margin-top: 15px;
    font-size:  15px;
    margin-left: 4px;
    margin-bottom: 2px;
`;

export const CardBody = styled.View`
    text-align: justify;
    position: relative;
    align-items: center;
`;

export const PostImage = styled.Image`
    width: 100%;
    height: 100%;
`;