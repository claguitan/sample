import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Sample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Local files and assets can be imported by dragging and dropping them into the editor
          <Text style={styles.span}>{"\n"}
          Local files and assets can be imported by dragging and dropping them into the editor
          </Text>
        </Text>
        
        <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 24,
    textAlign: 'left',
  },
  paragraph: {
    marginLeft: 0,
    marginBottom: 20,
    marginTop: 0,
    fontSize: 14,
    lineHeight: 28,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  span: {
    marginLeft: 0,
    marginBottom: 20,
    marginTop: 0,
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '100',
    textAlign: 'left',
    color: 'fcfcfc',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
