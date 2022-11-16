import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 60,
        paddingHorizontal: 30,
    },

    //-------------------------------------------

    topbar: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    //-------------------------------------------

    title1: {
        color: '#000',
        marginTop: 30,
        fontSize: 28,
        letterSpacing: 1,
        fontFamily: 'BebasNeue_400Regular'
    },

    title2: {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 'bold'
    },

    //-------------------------------------------

    Text: {
        color: '#000',
        backgroundColor: '#ffff',
        marginTop: 15,
        fontSize: 20,
        letterSpacing: 1,
        fontFamily: 'BebasNeue_400Regular',
    },

    //-------------------------------------------

    scrollView: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center'
    },

    cardImage: {
        maxWidth: 200,
        margin: 2
    },

    image: {
        width: 170,
        height: 270,
        marginTop: 20
    },

    Text3: {
        marginTop: 10
    },

    Text4: {
        flexDirection: 'row'
    },

    button: {
        backgroundColor: '#ffff',
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        marginTop: 15,
        width: '100%',
        padding: 15
    },

    buttonText: {
        color: '#000',
        fontSize: 15,
        letterSpacing: 1,
        fontFamily: 'BebasNeue_400Regular'
    }
})