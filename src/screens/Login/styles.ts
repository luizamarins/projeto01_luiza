import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingTop: 60,
        paddingHorizontal: 30,
    },

    topbar: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row'
    },

    icones: {
        flexDirection: 'row',
        paddingHorizontal: 50,
    },

    icone1: {
        marginLeft: 10,
        marginRight: 10
    },

    image: {
        width: 225,
        height: 95,
    },

    title: {
        color: '#000',
        fontSize: 25,
        marginTop: 40,
        fontFamily: 'BebasNeue_400Regular'
    },

    button: {
        backgroundColor: '#000',
        padding: 15,
        alignItems: 'center',
        marginTop: 40,
    },

    buttonText: {
        color: '#ffff',
        fontSize: 18,
        fontFamily: 'BebasNeue_400Regular'
    },

    input: {
        backgroundColor: '#ffffff',
        fontSize: 18,
        marginTop: 40,
        borderBottomWidth: 0.5,
        fontFamily: 'BebasNeue_400Regular'
    },

    Text1: {
        color: '#000',
        backgroundColor: '#ffff',
        marginTop: 30,
        fontSize: 15,
        fontFamily: 'BebasNeue_400Regular'
    },

    button2: {
        backgroundColor: '#ffff',
        borderWidth: 1,
        borderColor: '#000',
        padding: 15,
        alignItems: 'center',
        marginTop: 200,
        width: '30%',
    },

    buttonText2: {
        color: '#000',
        fontSize: 18,
        letterSpacing: 1,
        fontFamily: 'BebasNeue_400Regular',
    },

    Text2: {
        color: '#000',
        backgroundColor: '#ffff',
        marginTop: 30,
        fontSize: 15,
        letterSpacing: 1,
        fontFamily: 'BebasNeue_400Regular'
    },

    Text3: {
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },

})