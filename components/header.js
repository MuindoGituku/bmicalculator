import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function FormHeader() {
    return (
        <View style={style.container}>
            <Text style={style.header}>BMI Calculator</Text>
            <Text style={style.legend}>Unlock Your Health Potential: Discover Your BMI Today!</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        width:"100%",
        marginTop:70,
    },
    header:{
        padding:10,
        paddingBottom:0,
        fontSize: 30,
        fontWeight: "bold",
        textTransform:'uppercase',
    },
    legend:{
        padding:10,
        marginBottom:20,
        fontSize: 13,
    },
})