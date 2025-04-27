import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function TabOneScreen() {
  const [number, setNumber] = useState("");
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>👋 Welcome to My First App!</Text>
        <Button
          title="Click Me"
          onPress={() => Alert.alert("You clicked the button!")}
        />
        {/* <View style={styles.title }>
        <Text style={styles.title}>
          This is the first app that I have built in React Native. You can say this is my first app!
        </Text>
      </View> */}
        <TouchableOpacity onPress={() => alert("Pressed")}>
          <Text>Tap Me</Text>
        </TouchableOpacity>
        {/* await AsyncStorage.setItem('key', 'value');
        const value = await AsyncStorage.getItem('key'); */}
        <TextInput
          keyboardType="numeric"
          placeholder="Type here..."
          value={number}
          onChangeText={setNumber}
        />
        <Text>You entered: {number}</Text>

        <TextInput
          placeholder="Enter the Username" keyboardType='default'
          style={{
            height: 40,
            borderColor: "black",
            borderWidth: 2,
            margin: 10,
          }}
        />
        <Button
          title="submit data"
          onPress={() => alert("you have submitated data")}
        />
        {/* <Button title="Press Me" onPress={() => alert('Button Pressed')} /> */}

        <View style={{ marginTop: 20 }}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
            }}
            style={{ width: 330, height: 550, padding: 10 }}
          />
        </View>
        {/* <FlatList
          data={[
            { key: "nikhil" },
            { key: "patkal" },

          ]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    backgroundColor: "#f3f3",
  },
});
