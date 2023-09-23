import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function TextField({fieldLabel, returnLabel, returnType, onChangedValue, value}) {
    return (
        <View style={style.container}>
            <Text style={style.label}>{fieldLabel}</Text>
            <TextInput 
            onChangeText={onChangedValue}
            value={value}
            placeholder={fieldLabel}
            keyboardType='numeric'
            clearButtonMode="while-editing"
            returnKeyLabel={returnLabel}
            returnKeyType={returnType}
            style={style.input}
            />
        </View>
        
    );
}

const style = StyleSheet.create({
    container:{
        width: "95%",
        justifyContent: "space-between",
        alignItems: "left",
        margin:10,
    },
    label:{
        paddingBottom:7,
        fontSize: 12,
        fontWeight: "bold",
    },
    input: {
        height: 50,
        width: "100%",
        borderWidth: 0.5,
        borderColor: "#000",
        borderRadius: 5,
        padding: 10,
    },
})