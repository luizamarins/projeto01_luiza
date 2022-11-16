import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from '../Favoritos/styles';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Oculos from '../../assets/oculos.jpg';
import Maio from '../../assets/maio.jpg';
import Vestido from '../../assets/vestido.jpg';
import Lenço from '../../assets/lenço.jpg';

import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import AppLoading from 'expo-app-loading';

export const Favoritos = () => {

    const [fontsLoaded] = useFonts({ BebasNeue_400Regular })
    if (!fontsLoaded) {
        <AppLoading />
    }

    return (
        <View style={styles.container}>

            <View style={styles.topbar}>
                <AntDesign name="close" size={24} color="black" />
                <Feather name="more-horizontal" size={24} color="black" />
            </View>

            <Text style={styles.title1}>
                SACOLA
                <Text style={styles.title2}>
                    FAVORITOS
                    <Fontisto style={styles.icone2} name="favorite" size={22} color="black" />
                </Text>
            </Text>

            <Text style={styles.Text}>
                <Text>
                    LISTA DE LUIZA
                </Text>
                <Text>
                    SALVO PARA MAIS TARDE
                </Text>
            </Text>

            <ScrollView>

                <View style={styles.scrollView}>

                    <View style={styles.cardImage}>
                        <Image style={styles.image} source={Oculos} />

                        <Text style={styles.Text3}>
                            ÓCULOS CAT EYE
                        </Text>

                        <Text style={styles.Text4}>
                            R$ 150,00
                            <Fontisto name="favorite" size={24} color="black" />
                        </Text>

                        <TouchableOpacity
                            activeOpacity={0.4}
                            style={styles.button}>

                            <Text style={styles.buttonText}>
                                ADICIONAR À SACOLA
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardImage}>
                        <Image style={styles.image} source={Maio} />

                        <Text style={styles.Text3}>
                            MAIÔ PRETO
                        </Text>

                        <Text style={styles.Text4}>
                            R$ 180,00
                            <Fontisto name="favorite" size={24} color="black" />
                        </Text>

                        <TouchableOpacity
                            activeOpacity={0.4}
                            style={styles.button}>

                            <Text style={styles.buttonText}>
                                ADICIONAR À SACOLA
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardImage}>
                        <Image style={styles.image} source={Vestido} />

                        <Text style={styles.Text3}>
                            VESTIDO MARROM
                        </Text>

                        <Text style={styles.Text4}>
                            R$ 210,00
                            <Fontisto name="favorite" size={24} color="black" />
                        </Text>

                        <TouchableOpacity
                            activeOpacity={0.4}
                            style={styles.button}>

                            <Text style={styles.buttonText}>
                                OUT OF STOCK
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardImage}>
                        <Image style={styles.image} source={Lenço} />

                        <Text style={styles.Text3}>
                            LENÇO DE SEDA
                        </Text>

                        <Text style={styles.Text4}>
                            R$ 90,00
                            <Fontisto name="favorite" size={24} color="black" />
                        </Text>

                        <TouchableOpacity
                            activeOpacity={0.4}
                            style={styles.button}>

                            <Text style={styles.buttonText}>
                                ADICIONAR À SACOLA
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>

        </View>
    )
}