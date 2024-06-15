import React, { useState, useEffect } from 'react';
import {
    Image,
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    TouchableOpacity,
    Linking,
} from 'react-native';

const Cardpage = (props) => {

    const sites = [
        {
            "amazon": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png",
            "flipkart": "https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png",
            "nobroker": "https://play-lh.googleusercontent.com/Ysqo34VkKtVw6Ii4p2US_rV5zP_ks5Xdx5DpjASdDzccWS-YMA-hxxl3GpJd86XWzg",
            "youtube": "https://png.pngtree.com/png-clipart/20190515/original/pngtree-youtube-color-icon-png-image_3547792.jpg",
            "facebook": "https://cdn-icons-png.flaticon.com/256/124/124010.png",
            "dailyhunt": "https://www.fishsensedq.com/wp-content/uploads/2019/05/Dailyhunt-Google-Play.png"
        }
    ]

    return (

        <View style={{
            width: 320,
            flexDirection: 'column',

            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.8,
            shadowRadius: 4,
        }}>
            {/* Image */}
            <View
                style={{
                    position: 'relative',
                    height: 150,
                    width: '100%',
                    borderWidth: 1,
                    borderColor: 'rgba(195, 195, 171, 0.16)',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    shadowColor: 'blue',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    padding: 8,

                    shadowOpacity: 0.8,
                    shadowRadius: 4,
                    elevation: 5
                }}
            >
                <Image
                    style={{
                        height: '100%',
                        width: '100%',
                        resizeMode: 'stretch',
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                    }}
                    alt='this is not present'
                    source={{
                        uri: props.original_image ? props.original_image : 'https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150696458.jpg?t=st=1715681549~exp=1715685149~hmac=43f21997cf28264bf6a314030cf9ca6bbcd96e6922bbf41f040acccba9f7d238&w=740',
                    }}
                />
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    backgroundColor: '#A6C7FF',
                    height: 15,
                    width: '30%',

                    borderTopRightRadius: 30,

                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 8,
                        textAlign: 'center',
                        fontWeight: 'bold',

                    }}>{props.times_ago}</Text>
                </View>

            </View>
            {/* name and clicks */}
            {/* <View style={{ height: 5 , backgroundColor:}} /> */}
            <View style={{

                borderWidth: 1,
                borderColor: 'rgba(195, 195, 171, 0.16)',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
            }}>

                <View style={{ flexDirection: 'row', marginTop: 4, padding: 8 }}>
                    {/* app icon */}
                    <View style={{ padding: 4 }}>
                        <Image style={{ resizeMode: 'contain' }}
                            height={50}
                            width={60}

                            source={{
                                uri: sites[0][props.app],
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'column', flex: 1, padding: 4, justifyContent: 'center' }}>
                        {/* total clicks */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                            <View style={{ flex: 1, paddingRight: 28 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', overflow: 'hidden' }} numberOfLines={1}>
                                    {props.title}
                                </Text>
                            </View>
                            <View >
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{props.total_clicks}</Text>
                            </View>
                        </View>
                        {/* Number of clicks */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: 'semibold', color: 'black' }}>{props.created_at}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: 'semibold', color: 'grey' }}>Clicks</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{ height: 5 }} />
                {/* link */}
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#A6C7FF',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    borderStyle: 'dotted',
                    borderWidth: 2,
                    borderColor: 'rgba(0,0,255,0.5)',
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    shadowColor: 'blue',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.8,
                    shadowRadius: 4,
                    elevation: 5
                }}>
                    <View style={{ paddingLeft: 16, flex: 1 }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 'semibold',
                                fontFamily: 'Roboto',
                                color: '#0E6FFF',
                                overflow: 'hidden',

                            }}
                            numberOfLines={1}
                            ellipsizeMode='tail'
                        >
                            {props.web_link}
                        </Text>
                    </View>
                    <View style={{ marginVertical: 4 }}>
                        <TouchableOpacity
                            onPress={() => onPress(props.web_link)}
                            style={{ paddingRight: 16 }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: 'semibold', fontFamily: 'Roboto' }}>VISIT</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </View >


    )
}
const onPress = (url) => {
    Linking.openURL(url);
}

export default Cardpage;