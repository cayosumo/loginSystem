import React  from "react";
import {View,Text,TouchableOpacity,TextInput} from 'react-native'
import { useRouter } from 'expo-router'

export default function App(){
   const router = useRouter()
  return(
   <View style={{flex:1,backgroundColor:'#80ff00'}}>
    <View>
      <Text
      style={{backgroundColor:'#323131',padding:25,textAlign:'center',color:'white',fontSize:20}}
      >
   Professor
      </Text>
      <View
      style={{justifyContent:'center',alignContent:'center'}}
      >
        <TextInput
        style={{alignSelf:'center',backgroundColor:'white',textAlign:'center',width:320,height:75,borderWidth:2,marginTop:20,fontSize:25}}
        placeholder="Usuario"
        />
          <TextInput
        style={{alignSelf:'center',backgroundColor:'white',textAlign:'center',width:320,height:75,borderWidth:2,marginTop:20,fontSize:25}}
        placeholder="Senha"
        />
        <TouchableOpacity
        style={{marginTop:20,backgroundColor:'#07c1f5',width:350,height:75,alignSelf:'center',justifyContent:'center',borderRadius:15,borderWidth:4}}

        >
          <Text 
          style={{textAlign:'center',fontSize:30}}
          >
          Login
          </Text>
        </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop:20,backgroundColor:'#f80000',width:350,height:50,alignSelf:'center',justifyContent:'center',borderRadius:15,borderWidth:4}}
        onPress={()=> router.back()}
        >
          <Text 
          style={{textAlign:'center',fontSize:20}}
          >
          Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
   </View>
  )
}