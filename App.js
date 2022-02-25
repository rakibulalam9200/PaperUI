import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {DefaultTheme, Provider as PaperProvider,Appbar } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';


const Tab = createMaterialBottomTabNavigator();

export default function App() {

    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <PaperProvider  theme={theme}>
            <Appbar.Header>
                <Appbar.BackAction onPress={_goBack} />
                <Appbar.Content title="Title" subtitle="Subtitle" />
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
                <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
            </Appbar.Header>

            <NavigationContainer>
                <Tab.Navigator style={styles.androidSafeArea}  activeColor="#f0edf6"
                               inactiveColor="#3e2465"
                               barStyle={{ backgroundColor: '#694fad' }}>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Setting" component={SettingScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </PaperProvider>
  );
}

const theme = {
    ...DefaultTheme,
};

const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: 'skyblue',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
})
