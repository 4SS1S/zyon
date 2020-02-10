import React from 'react';

import {
    Container
} from './styles';
import Feed from '../components/feed';
import BottomBar from '../components/bottombar';

export default function Home(){

    

    return(
        <Container>
            <Feed />
            <BottomBar />
        </Container>
    )
}