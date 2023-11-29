import React from 'react';
import { View, Button, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }) {
    return (
        <MainLayout>
            {/* Content of HomeScreen goes here */}
            {/* Button to navigate to AboutScreen */}
            <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
            />
        </MainLayout>
    );
}

export default HomeScreen;

