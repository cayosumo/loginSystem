import React from "react";
import { View, Text, TouchableOpacity, ScrollView,TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from "react";
export default function App() {
  const router = useRouter();

  const Etinerario = ['Etim', 'Bio', 'Exatas', 'Edificações', 'Linguagens'];
  
  const turma = ['1° Serie', '2° Serie', '3° Serie'];


  const [selecionado, setSelecionado] = useState(String)
    const [selecionado2, setSelecionado2] = useState(String)
  return (
    <View style={{ flex: 1, backgroundColor: '#80ff00' }}>


      <Text
        style={{
          backgroundColor: '#323131',
          padding: 25,
          textAlign: 'center',
          color: 'white',
          fontSize: 20
        }}
      >
        TygentWorks
      </Text>


      <View style={{ alignItems: 'center', marginTop: 20 }}>

        <ScrollView
          style={{
            maxHeight: 100,
            width: '90%',
            backgroundColor:'white' ,
            borderRadius: 10
          }}
        >

          {Etinerario.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                padding: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                backgroundColor: selecionado === item ? 'green' : 'white'
                }}
                onPress={() => setSelecionado(item)}
             
            >
              <Text style={{ fontSize: 16 }}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}

        </ScrollView>


         <ScrollView
          style={{
            maxHeight: 100,
            width: '90%',
            backgroundColor:'white' ,
            borderRadius: 10,
            marginTop:35
          }}
        >

          {turma.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                padding: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                backgroundColor: selecionado2 === item ? 'green' : 'white'
                }}
                onPress={() => setSelecionado2(item)}
             
            >
              <Text style={{ fontSize: 16 }}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}

        </ScrollView>
        
        <TextInput
        placeholder="senha"
        style={{backgroundColor:'white',marginTop:35,height:60,width:'90%',textAlign:'center',borderWidth:3,fontSize:30,borderRadius:10}}
        />

        <TouchableOpacity
        style={{ backgroundColor:'#000000',marginTop:25,width:'90%',height:75,justifyContent:'center',alignItems:'center',borderRadius:10,borderWidth:2}}
        >
          <Text
          style={{color:'white',fontSize:30}}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}