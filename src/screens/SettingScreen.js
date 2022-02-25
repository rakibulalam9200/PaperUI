import React from 'react';

import {Text, View,StyleSheet} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph,Checkbox  } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const SettingScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>
                This is Setting Screen
            </Text>

            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>

            <Checkbox.Item label="Item" status="checked" />
            <Checkbox.Item label="Second Item" status="unchecked" />
            <Checkbox.Item label="Third Item" status="indeterminate" />
        </View>

    );
};

const styles  = StyleSheet.create({
    textStyle: {
        marginVertical:25,
        paddingVertical:10,
        paddingHorizontal:10,
        alignSelf:'center',
        backgroundColor: 'skyblue',
        fontSize:18

    },
});
export default SettingScreen;
