import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import {
    Container,
    ContainerButton,
    NewPostComponent
} from './styles';

import HomeIcon from '../../assets/images/home.png';
import UserIcon from '../../assets/images/bx_bx-user.png';
import NewPost from '../../assets/images/entypo_new-message.png';
import LookForIcon from '../../assets/images/ant-design_search-outline.png';
import MessageIcon from '../../assets/images/message.png';


export default function BottomBar(){

    return(
        <Container style={{width: Dimensions.get('window').width}}>
            <ContainerButton>
                <Image
                    source={HomeIcon} />
            </ContainerButton>
            <ContainerButton>
                <Image
                    source={UserIcon} />
            </ContainerButton>
            <NewPostComponent>
                <Image
                    source={NewPost} />
            </NewPostComponent>
            <ContainerButton>
                <Image
                    source={LookForIcon} />
            </ContainerButton>
            <ContainerButton>
                <Image
                    source={MessageIcon} />
            </ContainerButton>
        </Container>
    )
}