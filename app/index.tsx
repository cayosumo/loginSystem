import React  from "react";
import {View,Text,TouchableOpacity} from 'react-native'
import { useRouter } from 'expo-router'

export default function App(){
   const router = useRouter()
  return(
   <View style={{flex:1,backgroundColor:'#80ff00'}}>
    <View>
      <Text
      style={{backgroundColor:'#323131',padding:25,textAlign:'center',color:'white',fontSize:20}}
      >
   TygentWorks
      </Text>
      <View
      style={{justifyContent:'center',alignContent:'center',marginTop:150}}
      >
        <TouchableOpacity
        style={{backgroundColor:'#e7e7e7',width:350,height:75,alignSelf:'center',justifyContent:'center',borderRadius:15,borderWidth:4}}
        >
          <Text 
          style={{textAlign:'center',fontSize:30}}
          >
            Aluno
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{marginTop:10,backgroundColor:'#ff0066',width:350,height:75,alignSelf:'center',justifyContent:'center',borderRadius:15,borderWidth:4}}
        onPress={()=> router.push('/login/aluno')}
        >
          <Text 
          style={{textAlign:'center',fontSize:30}}
          >
            Professor
          </Text>
        </TouchableOpacity>
      </View>
    </View>
   </View>
  )
}