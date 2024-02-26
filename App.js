import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function Calcular(){
    const alt = altura / 100;
    const imc = peso / (alt * alt)
    if(imc < 18.6){
      alert("Você está abaixo do peso: " + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9){
      alert("Você está no peso ideal: " + imc.toFixed(2))
    }else if(imc >= 24.9 && imc <34.9){
      alert("Levemente acima do peso: " + imc.toFixed(2))
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALCULE SEU IMC</Text>
      <Text style={styles.textInput}>PESO:</Text>
      <TextInput style={styles.input} keyboardType='numeric'placeholder='Peso (Kg)' placeholderTextColor={"#FFF"} value={peso} onChangeText={(peso)=> setPeso(peso)}/>
      <Text style={styles.textInput}>ALTURA:</Text>
      <TextInput style={styles.input} keyboardType='numeric'placeholder='Altura (Cm)' placeholderTextColor={"#FFF"} value={altura} onChangeText={(altura) => setAltura(altura)}/>

      <TouchableOpacity style={styles.button} onPress={Calcular}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30
  },
  title:{
    fontSize:20,
    fontWeight: 'bold',
    marginTop: 50
  },
  input:{
    width: "100%",
    backgroundColor: "#000",
    marginRight: 20,
    marginLeft:20,
    marginTop: 10,
    borderRadius:10,
    padding: 10,
    color:"#FFF"
  },
  textInput:{
    alignItems:"flex-start",
    marginRight: 350,
    fontSize: 20,
    marginTop:20
  },
  button:{
    width: "80%",
    backgroundColor: "#007bff",
    padding:20,
    marginTop:20,
    alignItems: "center",
    borderRadius: 8
  },
  textButton:{
    fontSize:20,
    color:"#FFF",
    fontWeight:"bold"

  }
});
