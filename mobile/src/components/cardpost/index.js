import React, {useState, useEffect} from 'react';
import { 
    View,
    Text,
    Image,
    Linking,
    Video
} from 'react-native';
import LinkPreview from 'react-native-link-preview';

import {
    Card,
    CardUserInfo,
    CardUserImage,
    CardUserName,
    PostouComponent,
    CardBody,
    PostImage
} from './styles';

export default function CardPost({item}){

    const content = item.post;
    const [isAnImage, setIsAnImage] = useState(false);
    const [isALink, setIsALink] = useState(false);
    const [preview, setPreview] = useState(null);
    const [isVideo, setIsVideo] = useState(false);
    const [favicon, setFavicon] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [isText, setIsText] = useState(false);

    useState(async() => {
        if(content.startsWith('http')){
            LinkPreview.getPreview(
                content
            ).then(data => {
                if(data.mediaType === 'image'){
                    setIsAnImage(true);
                }
                if(data.mediaType === 'website'){
                    setIsALink(true);
                    setTitle(
                        data.title !== undefined
                            ? data.title
                            : content
                    );
                    setFavicon(
                        data.favicon[0] !== undefined
                            ? data.favicon[0]
                            : null
                    );
                    setDescription(
                        data.description !== undefined
                            ? data.description
                            : 'Sem descrição'
                    );
                }

                if(data.mediaType === 'application'){
                    setIsALink(true);
                    setTitle(
                        data.title !== undefined
                            ? data.title
                            : content
                    );
                    setFavicon(
                        data.favicon[0] !== undefined
                            ? data.favicon[0]
                            : null
                    );
                    setDescription(
                        data.description !== undefined
                            ? data.description
                            : 'Sem descrição'
                    );
                    setPreview(
                        data.images !== undefined
                             ? data.images
                             : null
                    );
                }

                if(data.mediaType === 'video.other'){
                    setIsALink(true);
                    setTitle(
                        data.title !== undefined
                            ? data.title
                            : content
                    );
                    setFavicon(
                        data.favicon[0] !== undefined
                            ? data.favicon[0]
                            : null
                    );
                    setDescription(
                        data.description !== undefined
                            ? data.description
                            : 'Sem descrição'
                    );
                    setPreview(
                        data.images !== undefined
                             ? data.images
                             : null
                    );
                }
            });
        }else{
            setIsText(true);
        }
    }, []);

    return(
        <Card>
            <CardUserInfo>
                <CardUserImage
                    source={{uri: item.profile_image}} />
                <CardUserName>
                    {item.author}
                </CardUserName>
                <PostouComponent>
                    postou:
                </PostouComponent>
            </CardUserInfo>

            <CardBody>
                {isText && (
                    <Text>
                        {content}
                    </Text>
                )}

                {isALink && (
                    <View
                        onPress={() => {
                            Linking.openURL(content)
                                .catch(err => console.log(err))
                        }}>
                        <PostImage
                            style={{width: 20, height: 20}}
                            source={{ uri: favicon}} />
                        
                        <Text style={{color: '#4E458C'}}>
                                {title}
                        </Text>

                        <Text style={{color: '#4E458C'}}>
                            {description}
                        </Text> 
                        {preview && (
                            <PostImage
                                /* onLoadEnd={stopAnimation} */
                                style={{width: 200, height: 200}}
                                source={{uri: preview}}
                            />
                        )}
                        
                    </View>
                )}

                {isAnImage && (
                    <PostImage
                        /* onLoadEnd={stopAnimation} */
                        style={{width: 100, height: 100}}
                        source={{uri: content}}
                    />
                )}
            </CardBody>
        </Card>
    )
}