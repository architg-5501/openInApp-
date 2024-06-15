import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const BottomNavBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.tab}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.freepik.com/256/2696/2696513.png?ga=GA1.1.1068248021.1715681487&semt=ais_hybrid' }}
                    style={styles.icon}
                />
                <Text style={styles.label}>Links</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.freepik.com/256/9913/9913414.png?ga=GA1.1.1068248021.1715681487&semt=ais_hybrid' }}
                    style={styles.icon}
                />
                <Text style={styles.label}>Courses</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.tab, styles.middleTab]}>
                <View style={styles.middleTabCircle}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.freepik.com/256/1632/1632686.png?ga=GA1.1.1068248021.1715681487&semt=ais_hybrid' }}
                        style={styles.icon}
                    />
                </View>
                <Text style={styles.label}></Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.freepik.com/256/10223/10223513.png?ga=GA1.1.1068248021.1715681487&semt=ais_hybrid' }}
                    style={styles.icon}
                />
                <Text style={styles.label}>Campaigns</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.freepik.com/256/3237/3237472.png?ga=GA1.1.1068248021.1715681487&semt=ais_hybrid' }}
                    style={styles.icon}
                />
                <Text style={styles.label}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
        height: 50,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        height: 25,
        width: 25,
    },
    label: {
        fontSize: 12,

        color: 'black',
    },
    middleTab: {
        position: 'relative',
    },
    middleTabCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(0,0,255,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#dddddd',
        position: 'absolute',
        bottom: -2,
        zIndex: 2,
    },
});

export default BottomNavBar;
