import React from 'react';
import { Text, View } from 'react-native';
 
export default function Contacts({navigation}) {
  return (
    <View style={{marginTop:60}}>
 		<View>
        <Text>Nome: João Botelho</Text>
          <Text>Telefone: (11) 93300-8587</Text>
        <Text
        onPress={()=> navigation.navigate('Information', 
        {
          nome:'João Augusto',
          telefone:'(11)98963-5489',
          endereco: 'Rua das araucarias',
          numero: '1759',
          profissao: 'Carpinteiro',
          email:'joaobotelho@carpintariabotelho.com.br'
        }
        )}
        >Detalhes...</Text>
      </View>
      <View style={{marginTop:20}}>
        <Text>Nome: João Botelho</Text>
          <Text>Telefone: (11) 93300-8587</Text>
          <Text
        onPress={()=> navigation.navigate('Information', 
        {
          nome:'Amanda Silva',
          telefone:'(19) 96587-5222',
          endereco: 'Av. Senna Nogueira',
          numero: '3958',
          profissao: 'Desenvolvedora de Softwares',
          email:'amandasilvadeveloper@gmail.com'
        }
        )}
        >Detalhes...</Text>
      </View>
    </View>
  );
}