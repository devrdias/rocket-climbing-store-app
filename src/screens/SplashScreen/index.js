import LottieView from 'lottie-react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';

const SplashScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#38c172',
      }}>
      <LottieView
        source={require('../../images/splashscreen.json')}
        autoPlay
        loop
        resizeMode="contain"
        autoSize
      />
    </SafeAreaView>
  );
};

SplashScreen.navigationOptions = () => ({
  header: null,
});

export default SplashScreen;
