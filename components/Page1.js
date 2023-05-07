import React, { Component } from "react";
import { Button, Text, View,StyleSheet,ImageBackground,Image } from "react-native";
import Pink from './img/img/blood.png'
import blood from './img/img/Pink.jpg'

const  Page1 =({navigation})=>{
    return(

        
            <ImageBackground source={blood} resizeMode="cover" style={{flex: 1,justifyContent: 'center'}} >
                    <View style={{flex:0.5,alignItems: 'center',marginTop:30}}>
                    <Image source={Pink} style={styles.blood}></Image> 
                    <Button
                    title="go to the App"
                    color={"brown"}
                    onPress={() =>
                    navigation.navigate('Home')}
                    />
                    </View>
                    
                </ImageBackground>

       
        
    )
}

const styles = StyleSheet.create({
    blood:{ 
      width:100,
      height: 100,
      marginBottom:20
    }
  })
    
  
export default Page1