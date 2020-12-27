// In App.js in a new project
// SP18-BCS-028
// lAB - 09

import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const home_screen = ({ navigation }) => {
  const product = [
    { name: 'iPhone Pro', prodcutId: ' SKU125' },
    { name: 'Bomber Jacket', prodcutId: ' SKU915' },
    { name: 'WB Gell', prodcutId: ' SKU725' },
  ];
  const employees = [
    { name: 'Ammar Zeb', employeeid: ' 772' },
    { name: 'Faizan Khan', employeeid: ' 569' },
    { name: 'Faheem Ahmed', employeeid: ' 398' },
  ];
  const orders = [
    { name: 'iPhone Pro', orderNumber: ' O951' , price : " $1200" },
    { name: 'Bomber Jacker', orderNumber: ' O159' , price : " $79.90" },
    { name: 'WB Gell', orderNumber: 'O357' , price : " $19.99" },
  ];

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.innercontainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Product', { product: product })}>
          <Text style={styles.mainbutton}>Manage Products </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innercontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Employee' , {employees : employees})}>
          <Text style={styles.mainbutton}>Manage Employees</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innercontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Order' , {orders : orders})}>
          <Text style={styles.mainbutton}>Manage Orders</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const product_screen = ({ navigation, route }) => {
  const products = route.params.product;
  console.log(products);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <ScrollView>
          {products.map((item, key) => (
            <TouchableOpacity
              style={{
                padding: 10,
                alignContent: 'center',
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('Product Information' ,{ itemname : item })}>
              <Text style={styles.productbutton}>
                {item.name} 
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
const product_info = ({navigation , route}) => {
  const itemname = route.params.itemname ;
  return(

    <View style = {styles.productinfo}> 
    <View style = {{padding : 10 , width :"80%"}}>
    <Text style = {styles.lastscreen} >Item Name : {itemname.name} </Text>
    </View>
    <View style = {{padding : 10 , width :"80%"}}>
    <Text style = {styles.lastscreen}> Product id :{itemname.prodcutId} </Text>

    </View>
    </View>
  )

}


const emp_screen = ({ navigation, route }) => {
  const employee = route.params.employees;
  console.log(employee);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <ScrollView>
          {employee.map((item, key) => (
            <TouchableOpacity
              style={{
                padding: 10,
                alignContent: 'center',
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('Employee Details' , {itemname : item})}>
              <Text style={styles.productbutton}>
                {item.name} 
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
const emp_details = ({navigation , route}) => {
  const employeedetil = route.params.itemname ;
  return(
    <View style = {styles.productinfo}> 
    <View style = {{padding : 10 , width : "80%"}}>
    <Text style = {styles.lastscreen}> Empolyee name : {employeedetil.name} </Text>
    </View>
    <View style = {{ padding : 10 , width: "80%"}}>
    <Text style = {styles.lastscreen}> empolyee id : {employeedetil.employeeid} </Text>
    </View>

    </View>
  )

}
const order_screen = ({ navigation, route }) => {
  const orders = route.params.orders;
  console.log(orders);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <ScrollView>
          {orders.map((item, key) => (
            <TouchableOpacity
              style={{
                padding: 10,
                alignContent: 'center',
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('Order Details' ,{itemname :item} )}>
              <Text style={styles.productbutton}>
                {item.name} {item.orderNumber} {item.price}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
const order_info = ({navigation , route}) => {
  const orderdetail = route.params.itemname ;
  return(
    <View  style = {styles.productinfo }> 
    <View style = {{ border: "1px solid black"  ,width : "80%"}}> 
    <Text style = {styles.lastscreen}>Order name: {orderdetail.name} </Text>
    </View>
    <View style = {{border: "1px solid black"  , margin: 10   , width : "80%"}}>
    <Text style = {styles.lastscreen}> Order Number :{orderdetail.orderNumber} </Text>
    </View>
    <View style = {{ border: "1px solid black" , width : "80%"}}>
    <Text style = {styles.lastscreen}>Order Price :  {orderdetail.price} </Text>
    </View>
    </View>
  )

}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={home_screen} />
        <Stack.Screen name="Product" component={product_screen} />
        <Stack.Screen name="Product Information" component={product_info} />
        <Stack.Screen name="Order" component={order_screen} />
        <Stack.Screen name="Order Information" component={order_info} />
        <Stack.Screen name="Employee" component={emp_screen} />
        <Stack.Screen name="Employee Details" component={emp_details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  mainbutton: {
    borderRadius: 20,
    padding: 15,
    backgroundColor: '#78909C',
  },
  productbutton: {
    borderRadius: 20,
    padding: 15,
    backgroundColor: '#78909C',
  },
  productinfo: {
    flex:1 , 
    padding : 15 ,
    alignItems:"center"
    ,justifyContent:"center" ,
  },
  innercontainer: {
    padding: 15,
  },
  lastscreen:{
    borderRadius: 20,
    padding: 15,
    backgroundColor: "#78909C", 
    width: "100%", 
    alignContent: "center", 
    alignItems: "center",
    textAlign: "center", 
    alignSelf:"center", 
  }
});
