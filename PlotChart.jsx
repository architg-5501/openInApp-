import React, { useEffect, useState } from 'react';
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from 'react-native';

const PlotChart = ({ datas }) => {
    const labels = Object.keys(datas).map(label => label.substring(0, 5));
    const values = Object.values(datas);


    const GreetingComponent = () => {
        const currentHour = new Date().getHours();
        if (currentHour >= 5 && currentHour < 12) {
            return 'Good Morning';
        } else if (currentHour >= 12 && currentHour < 18) {
            return 'Good Afternoon';
        } else {
            return 'Good Evening';
        }
    }


    const greetingMessage = GreetingComponent();

    return (
        <View>
            <View style={styles.header}>
                {/* Render the greeting message */}
                <Text style={styles.greeting}>{greetingMessage}</Text>
                <Text style={styles.username}>Ajay Manva 👋</Text>
            </View>
            <View style={styles.spacing} />
            {values.length > 0 ? (
                <LineChart
                    data={{
                        labels: labels,
                        datasets: [
                            {
                                data: values,
                                color: (opacity = 1) => `rgba(14, 111, 255, ${opacity})`,
                                strokeWidth: 2,
                            }
                        ]
                    }}
                    withHorizontalLabels
                    width={Dimensions.get("window").width * 0.9}
                    height={300}
                    yAxisLabel=""
                    yAxisSuffix=""
                    yAxisInterval={1}
                    chartConfig={{
                        backgroundColor: "#0E6FFF",
                        backgroundGradientFrom: "#ffffff",
                        backgroundGradientTo: "#ffffff",
                        decimalPlaces: 1,
                        color: (opacity = 1) => `rgba(120, 120, 120, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(120, 120, 120, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "0",
                            strokeWidth: "180",
                            stroke: "#0E6FFF"
                        },
                    }}
                    bezier
                    style={styles.chartStyle}
                    verticalLabelRotation={90}
                />
            ) : (
                <View>
                    <ActivityIndicator size="large" />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: 'rgb(245,245,245)',
        padding: 16,
        borderRadius: 24,
    },
    greeting: {
        color: 'grey',
        fontSize: 22,
        fontFamily: 'roboto',
    },
    username: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
    },
    spacing: {
        height: 10,
    },
    chartStyle: {
        borderRadius: 16,
    },
});

export default PlotChart;
