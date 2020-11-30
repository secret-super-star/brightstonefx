/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { WebView } from 'react-native-webview';
import AppIntroSlider from 'react-native-app-intro-slider';

declare const global: { HermesInternal: null | {} };

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <ImageBackground source={item.image.uri} style={styles.image}>
        </ImageBackground>

      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <View style={styles.body}>
          <WebView
            source={{ uri: 'https://login.iqoptionsinvestments.com/login' }}
          />
        </View>
      ) : (
          <AppIntroSlider
            data={slides}
            renderItem={RenderItem}
            onDone={onDone}
          />
        )}
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%'
  },
});

const slides = [
  {
    key: 's1',
    image: {
      uri:
        require('./assets/1.jpg'),
    },
  },
  {
    key: 's2',
    image: {
      uri:
        require('./assets/2.jpg'),
    },
  },
  {
    key: 's3',
    image: {
      uri:
        require('./assets/3.jpg'),
    },
  },

];

export default App;