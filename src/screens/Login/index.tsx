import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { styles } from '../Login/styles';
import LogoZara from '../../assets/zara-logo.png';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import AppLoading from 'expo-app-loading';

export const Login = () => {

  const [fontsLoaded] = useFonts({ BebasNeue_400Regular })
  if (!fontsLoaded) {
    <AppLoading />
  }

  return (
    <View style={styles.container}>

      <View style={styles.topbar}>

        <Image style={styles.image} source={LogoZara} />

        <View style={styles.icones}>
          <Feather style={styles.icone1} name="settings" size={24} color="black" />
          <Ionicons style={styles.icone1} name="chatbox-outline" size={24} color="black" />
        </View>

      </View>

      <Text style={styles.title}>
        INICIE SESSÃO
      </Text>

      <TextInput
        style={styles.input}
        keyboardType={'email-address'}
        placeholder={'E-MAIL'}
      />

      <TextInput
        style={styles.input}
        placeholder={'SENHA'}
        secureTextEntry={true}
      />

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}>

        <Text style={styles.buttonText}>
          INICIAR SESSÃO
        </Text>
      </TouchableOpacity>

      <Text style={styles.Text1}>
        ESQUECEU A SUA SENHA DE ACESSO?
      </Text>

      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.button2}>

        <Text style={styles.buttonText2}>
          AJUDA
        </Text>
      </TouchableOpacity>

      <Text style={styles.Text2}>
        NÃO TEM CONTA?
        <Text style={styles.Text3}> REGISTRE-SE</Text>
      </Text>

    </View>
  )
}

export default Login