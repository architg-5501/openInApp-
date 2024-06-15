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

const Buttoncomp = ({ backColor, backtext }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ width: '100%', borderWidth: 1, borderRadius: 10, backgroundColor: { backColor } }}>
                <TouchableOpacity  >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', fontFamily: 'Roboto', color: 'black', textAlign: 'center', marginVertical: 10 }}>{backtext}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Buttoncomp;