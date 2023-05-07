import React, { Component } from "react";
import { Text, View ,Button,StyleSheet,ImageBackground,Image,TextInput,TouchableOpacity} from "react-native";
import Pink from './img/img/blood.png'
import blood from './img/img/Pink.jpg'

const  Page3 =({navigation})=>{
        return(
            <View style={{flex:1}}>

                <ImageBackground source={blood} resizeMode="cover" style={{flex: 1,justifyContent: 'center'}} >
                    <View style={{flex:1,alignItems: 'center',marginTop:30}}>
                    <Image source={Pink} style={styles.blood}></Image> 
                    </View>
                </ImageBackground>


                <View style={{flex:5.5}}>

                    <View style={{flex:1, alignItems:'center', marginTop:70, marginBottom:40}}>
                        <Text style={{color:'#0e1b40', fontSize:30,fontWeight:500}}>Sign in</Text>
                    </View>
                    
                    <View style={{flex:12,}}>

                    <View style={{flex:1, marginLeft:50}}> 
                    <Text style={styles.Text}>
                    Full Name
                    </Text>
                    <TextInput style={styles.input} placeholder="Enter"/>
                    </View>
                
                    <View style={{flex:1, marginLeft:50}}>
                    <Text style={styles.Text}>
                    ID Number
                    </Text>
                    <TextInput style={styles.input} placeholder="Enter" />
                    </View>

                    <View style={{flex:1, marginLeft:50}}>
                    <Text style={styles.Text}>
                    Gender
                    </Text>
                    <TextInput style={styles.input} placeholder="Male/Female" />
                    </View>
                    
                    <View style={{flex:2, alignItems:'center', marginTop:20}}>
                    <Text style={{marginTop: 10,fontWeight: '700',fontSize:15,color:'brown',textDecorationLine: 'underline', marginBottom:10}}>Conditions for donating blood</Text>
                    <TouchableOpacity style={styles.Button}>
                     <Text style={[styles.Text,{color:'#89CFF0'}]} >Sign in</Text>
                    </TouchableOpacity>
                    
                    </View>


                    </View>
                    
                    
                   
                </View>
            </View>
        )
    }


const styles = StyleSheet.create({
    blood:{ 
      width:100,
      height: 100,
    },
    Button: {
        borderWidth: 0.5,
        width: 280,
        height: 50,
        backgroundColor: '#0e1b40',
        borderRadius: 15,
        borderColor: '#0e1b40',
        marginBottom:15,
        alignItems: 'center'
      },
      Text:{
        fontSize: 18,
        color: 'brown',
        marginTop:9
      },
      input: {
        borderColor: 'black',
        borderWidth: 1,
        width: 300,
        height: 50,
        marginTop: 8,
        paddingLeft:10
      },
      
  })
export default Page3