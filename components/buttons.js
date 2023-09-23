import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Buttons({onPressedMain}) {
    return (
        <TouchableOpacity onPress={onPressedMain} style={style.mainButton}>
            <Text style={style.buttonLabelMain}>Calculate Body Mass Index</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    mainButton: {
        padding:20,
        marginTop:20,
        width:"95%",
        backgroundColor: '#483bc4',
        borderRadius: 10,
    },
    buttonLabelMain: {
        color: '#fff',
        textAlign:'center',
        fontWeight: 'bold',
    },
})