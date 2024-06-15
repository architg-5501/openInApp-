import React from 'react';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    Linking,
    Alert,
} from 'react-native';

const Socialcomp = ({ backcolor, backtext, backlink, support_whatsapp_number }) => {
    const handlePress = () => {
        if (support_whatsapp_number) {
            const url = `whatsapp://send?phone=${support_whatsapp_number}`;
            Linking.openURL(url);
        } else {
            const Url = 'https://blog.openinapp.com/elementor-3190/';
            Linking.openURL(Url);
        }
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: backcolor,
                borderColor: backcolor,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                width: '100%'
            }}>
                <Image
                    style={{ resizeMode: 'contain', height: 30, width: 60 }}
                    source={{ uri: backlink }}
                />
                <TouchableOpacity onPress={handlePress}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        fontFamily: 'Roboto',
                        color: 'black',
                        marginVertical: 10
                    }}>
                        {backtext}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Socialcomp;
