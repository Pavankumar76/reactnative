import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <Text testID="title" style={styles.text}>
          Hello there
        </Text>
        <TextInput
          testID="input"
          style={styles.inputText}
          placeholder="Name"
          value={input}
          onChangeText={setInput}
        />
        <Button
          testID="button"
          title="Submit"
          onPress={() => Alert.alert(input)}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    textAlign: 'center',
  },
  inputText: {
    padding: 5,
  },
});

export default App;
