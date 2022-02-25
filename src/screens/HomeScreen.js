import React from 'react';
import { Button, ActivityIndicator, Colors,Avatar, Chip,Divider} from 'react-native-paper';
import {Text, View,StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';
const Homescreen = () => {

    return (
        <View>
            <View style={{flexDirection:"row",marginTop:10}}>
                <Avatar.Icon size={45} icon="folder" style={{marginHorizontal:5}}/>
                <Avatar.Icon size={45} icon="file" style={{marginHorizontal:5}}/>
                <Avatar.Icon size={45} icon="facebook" style={{marginHorizontal:5, backgroundColor : "#4867AA"}}/>
                <Avatar.Icon size={45} icon="google-plus" style={{marginHorizontal:5, backgroundColor : "#DD5144"}}/>
            </View>

            <Text style={styles.textStyle}>
                This is Home Screen
            </Text>
            <Button icon="camera" >
                Press Me
            </Button>

            <Button raised theme={{ roundness: 3 }}>
                Press me
            </Button>

            <Button icon={{ uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400' }}>
                Press me
            </Button>

            <ActivityIndicator animating={true} color={Colors.red800} />

            <Chip icon="information" onPress={() => console.log('Pressed')} mode="outlined">Example Chip</Chip>
            <Chip icon="information" onPress={() => console.log('Pressed')}>Second Chip</Chip>

            <View>
                <Text>Lemon</Text>
                <Divider />
                <Text>Mango</Text>
                <Divider />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical:25,
        paddingVertical:10,
        paddingHorizontal:10,
        alignSelf:'center',
        backgroundColor: 'skyblue',
        fontSize:18

    },
})

export default Homescreen;