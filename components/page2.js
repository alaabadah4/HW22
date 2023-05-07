import React, { Component } from "react";
import { Text, View ,Button,StyleSheet,ImageBackground,Image} from "react-native";
import Pink from './img/img/blood.png'
import blood from './img/img/Pink.jpg'

const  Page2 =({navigation})=>{
    
        return(
            <View style={{flex:1}}>
                <ImageBackground source={blood} resizeMode="cover" style={{flex:2,justifyContent: 'center'}} >
                    <View style={{flex:0.5}}></View>
                    <View style={{flex:1,alignItems: 'center'}}>
                    <Image source={Pink} style={styles.blood}></Image> 
                    </View>
                </ImageBackground>

                <View style={{flex:2, marginTop:100 ,width:200,alignItems:'center',marginLeft:100}}>
                <Button
                title="Register in the program "
                color={'brown'}
                onPress={() =>
                navigation.navigate('Sign in')}
                />
                </View>
        
        </View>
        )
    
}
const styles = StyleSheet.create({
    blood:{ 
      width:100,
      height: 100,
      marginBottom:20
    }
  })

export default Page2