
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Animated, Easing, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    // Start the animation
    Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();


    const timeout = setTimeout(() => {
      navigation.navigate('List');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [progress, navigation]);

  const animatedWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
  
      <Text style={styles.loadingText}>Loading...</Text>
      <View style={styles.progressBarContainer}>
        <Animated.View style={[styles.progressBar, { width: animatedWidth }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  birdImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  loadingText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  progressBarContainer: {
    width: '80%',
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3a3a3a',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
    backgroundColor: '#71DA71',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 145
  },
});

export default LoadingScreen;