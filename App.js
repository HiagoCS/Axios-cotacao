import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import react from 'react';
import Axios from './components/api';
import Cotacao from './components/lista';
export default function App() {
  const [type, setType] = react.useState();
  const [compra, setCompra] = react.useState();
  const [venda, setVenda] = react.useState();
  const [variacao, setVar] = react.useState();
  const [max, setMax] = react.useState();
  const [min, setMin] = react.useState();
  const [visible, setVisible] = react.useState(false);
  Axios.get("USD-BRL").then(response=>{
    console.log(response.data['USDBRL']);
    setCompra(response.data['USDBRL'].bid);
    setVenda(response.data['USDBRL'].ask);
    setVar(response.data['USDBRL'].pctChange);
    setMax(response.data['USDBRL'].high);
    setMin(response.data['USDBRL'].low);
    setType(response.data['USDBRL'].name);
  }).catch(err =>{console.log(err)});
  return (
    <View style={styles.container}>
      <Text style={{fontSize:15}}>Cotacao de moedas</Text>
      <TouchableOpacity style={styles.btn}
        onPress={()=>{
          setVisible(!visible)
        }}
      >
        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>{type}</Text>
      </TouchableOpacity>
      <Cotacao compra={compra} venda={venda} var={variacao} max={max} min={min} visible={visible}></Cotacao>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:50
  },
  btn:{
    borderWidth:1,
    borderRadius: 5,
    padding:15,
    backgroundColor:'#1e90ff'
  }
});
