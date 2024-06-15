import React, { useState, useEffect } from 'react';
import { Dimensions, ScrollView } from "react-native";
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

const AnalyticsCard = ({ top_location, total_clicks, top_source }) => {
    const sites = {
        "total_clicks": "https://cdn-icons-png.freepik.com/256/1644/1644654.png?ga=GA1.1.1068248021.1715681487&semt=ais_hybrid",
        "top_location": "https://cdn-icons-png.freepik.com/256/854/854878.png?ga=GA1.1.1068248021.1715681487&semt=ais_hybrid",
        "top_source": "https://cdn-icons-png.freepik.com/256/744/744480.png?ga=GA1.1.1068248021.1715681487&semt=ais_hybrid",
    }
    return (
        <ScrollView
            horizontal={true}
            contentContainerStyle={{
                flexDirection: 'row',
                marginBottom: 8
            }}
        >
            <View style={{
                flexDirection: 'column',
                height: 140,
                width: Dimensions.get("window").width * 0.4,
                backgroundColor: 'white',
                borderColor: 'rgba(195, 195, 171, 0.16)',
                borderWidth: 1,
                position: 'relative',
                alignItems: 'flex-start',
                borderRadius: 10,
                padding: 4,
                marginRight: 8,
            }}>
                {/* icons */}
                <View style={{
                    height: 50,
                    flexDirection: 'column',

                }}>
                    <Image
                        style={{
                            height: '100%',
                            width: '25%',
                            resizeMode: 'contain',
                            position: 'absolute',
                            top: 0,
                            left: 0,

                        }}
                        alt='this is not present'
                        source={{
                            uri: sites["total_clicks"],
                        }}
                    />
                </View>


                <View style={{ padding: 8 }} ><Text style={{ fontFamily: 'roboto', fontWeight: 'bold', color: 'black', fontSize: 18 }}>{total_clicks}</Text></View>
                <View style={{ padding: 8 }} ><Text style={{ fontFamily: 'roboto', fontWeight: 'semibold', color: 'grey', fontSize: 18 }}>Total Clicks</Text></View>
            </View>
            <View style={{
                flexDirection: 'column',
                height: 140,
                width: Dimensions.get("window").width * 0.4,
                borderColor: 'rgba(195, 195, 171, 0.16)',
                borderWidth: 1,
                backgroundColor: 'white',
                position: 'relative',
                alignItems: 'flex-start',
                borderRadius: 10,
                padding: 4,
                marginRight: 8,
            }}>
                {/* icons */}
                <View style={{
                    height: 50,
                    flexDirection: 'column',

                }}>
                    <Image
                        style={{
                            height: '100%',
                            width: '25%',
                            resizeMode: 'contain',
                            position: 'absolute',
                            top: 0,
                            left: 0,

                        }}
                        alt='this is not present'
                        source={{
                            uri: sites["top_location"],
                        }}
                    />
                </View>


                <View style={{ padding: 8, flex: 1 }} ><Text style={{ fontFamily: 'roboto', fontWeight: 'bold', color: 'black', fontSize: 18, overflow: 'hidden' }}>{top_location ? top_location : "India"}</Text></View>
                <View style={{ padding: 8 }} ><Text style={{ fontFamily: 'roboto', fontWeight: 'semibold', color: 'grey', fontSize: 18 }}>Top Location</Text></View>
            </View>
            <View style={{
                flexDirection: 'column',
                height: 140,
                width: Dimensions.get("window").width * 0.4,
                borderColor: 'rgba(195, 195, 171, 0.16)',
                borderWidth: 1,
                backgroundColor: 'white',
                position: 'relative',
                alignItems: 'flex-start',
                borderRadius: 10,
                padding: 4,
                marginRight: 8,
            }}>
                {/* icons */}
                <View style={{
                    height: 50,
                    flexDirection: 'column',

                }}>
                    <Image
                        style={{
                            height: '100%',
                            width: '25%',
                            resizeMode: 'contain',
                            position: 'absolute',
                            top: 0,
                            left: 0,

                        }}
                        alt='this is not present'
                        source={{
                            uri: sites["top_source"],
                        }}
                    />
                </View>


                <View style={{ padding: 8 }} ><Text style={{ fontFamily: 'roboto', fontWeight: 'bold', color: 'black', fontSize: 18 }}>{top_source ? top_source : "Instagram"}</Text></View>
                <View style={{ padding: 8 }} ><Text style={{ fontFamily: 'roboto', fontWeight: 'semibold', color: 'grey', fontSize: 18 }}>Top Source</Text></View>
            </View>
        </ScrollView>
    );
}

export default AnalyticsCard;
