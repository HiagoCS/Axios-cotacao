import { StyleSheet, Text, View } from 'react-native';
import react from 'react';

export default props=>{
    if(!props.visible)
        return '';
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Compra: {props.compra}</Text>
            <Text style={styles.text}>Venda: {props.venda}</Text>
            <Text style={styles.text}>Variação: {props.var}</Text>
            <Text style={styles.text}>Máximo: {props.max}</Text>
            <Text style={styles.text}>Minimo: {props.min}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        
    },
    text:{
        fontSize:20,
        fontFamily:'Arial Black'
    }
});