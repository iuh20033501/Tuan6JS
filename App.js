import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,TouchableOpacity,TextInput} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screen4_a from './demo/Screen4_a'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Screen4_b from './demo/Screen4_b';
export default function App() {
  const stack = createNativeStackNavigator()
  return (
    <NavigationContainer>    
      <stack.Navigator initialRouteName='Screen4_a'>
        <stack.Screen
          name='Screen4_a'
          component={Screen4_a}
        
          options={{
            headerTitle: 'Chat',
            headerTitleAlign: 'center',
            headerRight: () => (
              <Image source={require('./demo/img/item1.png')} style={{height:30,width:30,marginRight: 10 }}></Image>
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() =>navigation.goBack()}>
                <Image source={require('./demo/img/Vector2.png')} style={{ height: 30, width: 30, marginLeft: 10 }} />
              </TouchableOpacity>
            ),
            headerStyle:{
              backgroundColor:'blue',
            },
            headerTitleStyle: {
              color: 'white', 
            },
          }}
        />

      <stack.Screen name='Screen4_b' component={Screen4_b} 
      
      options={{
        headerTitle: (props) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', width: 200, height: '50%' }}>
            <Icon name="search" size={20} color="gray" style={{ paddingLeft: 10 }} />
            <TextInput
            style={{ width: 200,height:'100%',backgroundColor:'white' }} // Kiểu dáng của TextInput
            placeholder="Dây cáp usb"
            placeholderTextColor="gray"
            
          />
          </View>
          
        ),
        headerTitleAlign: 'center',
        headerRight: () => (
          
          <View style={{flexDirection:'row'}}>
            <Image source={require('./demo/img/item1.png')} style={{height:30,width:30, marginLeft:'-80px'}}></Image>
          <Image source={require('./demo/img/3cham.png')} style={{ height: 5, width:5, marginTop:'15px',marginLeft:'20px' }} />
          <Image source={require('./demo/img/3cham.png')} style={{ height: 5, width:5,marginTop:'15px'  }} />
          <Image source={require('./demo/img/3cham.png')} style={{ height: 5, width:5,marginTop:'15px'  }} />
          </View>
      ),
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('./demo/img/Vector2.png')} style={{ height: 30, width: 30, marginLeft: 10 }} />
           
          </TouchableOpacity>
        ),
        headerStyle:{
          backgroundColor:'blue',
        },
        headerTitleStyle: {
          color: 'white', 
        },
      }}
      />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
