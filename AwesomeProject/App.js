import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import RootDrawer from './DrawerNavigator';


// const SimpleApp = DrawerNavigator({
//     Home: { screen: RootDrawer,
//         navigationOptions: {
//             title: 'Home',
//         },
//     },
//     Chat: { screen: ChatScreen },
// });

export default class App extends React.Component {
    render() {
        return <RootDrawer />;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//           <Text>Shake your phone to open the developer menu.</Text>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }
