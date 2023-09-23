import { StyleSheet, Text, View, Switch, Alert } from 'react-native';
import React, {useState} from 'react';

import FormHeader from './components/header';
import TextField from './components/textfields';
import Buttons from './components/buttons';

export default function App() {
  const [metric, setMetric] = useState(true);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(0);
  const [bmiLabel, setBmiLabel] = useState('');

  const handleSwitchChange= () =>setMetric(!metric);
  const handleWeightChange= (value) =>setWeight(value);
  const handleHeightChange= (value) =>setHeight(value);

  const bmiCalculator=()=>{
    var weightNumber = 0
    var heightNumber = 0

    if (weight.length!=0 && height.length!=0) {
      if(metric){
        weightNumber = parseFloat(weight);
        heightNumber = parseFloat(height);
        
      }else{
        weightNumber = parseFloat(weight) * 0.453592;
        heightNumber = parseFloat(height) * 0.0254;
        
      }

      setBmi((weightNumber / (heightNumber*heightNumber)).toFixed(1));

      if (bmi < 18.5) {
        setBmiLabel('UNDERWEIGHT');
      } else if(bmi >= 18.5 && bmi <= 24.9){
        setBmiLabel('NORMAL');
      }else if(bmi >= 24.9 && bmi <= 29.9){
        setBmiLabel('OVERWEIGHT');
      }else if(bmi >= 30.0){
        setBmiLabel('OBESE');
      }

      Alert.alert(
        "BMI Results",
        "Weight: "+weightNumber+" kgs\n"+ "Height: "+heightNumber+" metres\n\nYour BMI: "+bmi+"\n\nYou are "+bmiLabel+"!!",
        [
          { text: "Done", onPress: () =>{setHeight(''),setWeight(''),setBmiLabel(''),setBmi(0)}},
          { text: "Adjust"},
        ],
        );
    } else {
      Alert.alert(
        "Missing Input(s)",
        "Please enter a measurement for both weight and height in order to calculate",
        [
          { text: "Rectify"},
        ],
        );
    }
    
    
  }

  return (
    <View style={styles.container}>
      <FormHeader></FormHeader>
      <View style={styles.unitsLine}>
        <Text style={styles.unitsTag}>{metric?"Using Metric System: Weight(kg), Height(m)":"Using Imperial System: Weight(lbs), Height(in)"}</Text>
        <Switch 
        value={metric}
        onValueChange={()=>handleSwitchChange()}
        ></Switch>
      </View>
      <TextField
      fieldLabel={metric?"Weight in kilograms":"Weight in pounds"}
      returnLabel={"Next"}
      returnType={"done"}
      value={weight}
      onChangedValue={(e)=>handleWeightChange(e)}
      ></TextField>
      <TextField
      fieldLabel={metric?"Height in meters":"Height in inches"}
      returnLabel={"Done"}
      returnType={"done"}
      value={height}
      onChangedValue={(e)=>handleHeightChange(e)}
      ></TextField>
      <Buttons onPressedMain={bmiCalculator}></Buttons>
      <View style={styles.scaleContainer}>
      <Text style={styles.scaleTitle}>BMI Scale</Text>
        <View style={[styles.scaleItem,styles.underweight]}>
          <Text style={styles.bmiLabel}>Below 18.5</Text>
          <Text style={styles.bmiLabel}>UNDERWEIGHT</Text>
        </View>
        <View style={[styles.scaleItem,styles.normal]}>
          <Text style={styles.bmiLabel}>Between 18.5 and 24.9</Text>
          <Text style={styles.bmiLabel}>NORMAL</Text>
        </View>
        <View style={[styles.scaleItem,styles.overweight]}>
          <Text style={styles.bmiLabel}>Between 24.9 and 29.9</Text>
          <Text style={styles.bmiLabel}>OVERWEIGHT</Text>
        </View>
        <View style={[styles.scaleItem,styles.obese]}>
          <Text style={styles.bmiLabel}>Above 30.0</Text>
          <Text style={styles.bmiLabel}>OBESE</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  unitsLine: {
    paddingBottom:20,
    flexDirection: 'row',
    width: "95%",
    justifyContent:'space-between',
    alignItems: 'center',
  },
  unitsTag: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#483bc4',
  },
  scaleItem: {
    width:"100%",
    paddingVertical:15,
    paddingHorizontal:10,
    marginBottom:10,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    opacity:1,
    borderRadius:10,
  },
  bmiLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  scaleContainer: {
    width:"95%",
    marginTop:20,
    flexDirection: 'column',
    justifyContent:'space-between',
    alignItems: 'flex-start',
  },
  scaleTitle: {
    fontSize: 20,
    marginBottom:10,
    fontWeight: 'bold',
    color: '#000',
    textDecorationStyle:'solid',
    textDecorationLine:'underline',
  },
  underweight:{
    backgroundColor: '#f5d60a',
  },
  normal:{
    backgroundColor: "#20df60",
  },
  overweight:{
    backgroundColor: "#9a17e8",
  },
  obese:{
    backgroundColor: "#e11eb0",
  },
});
