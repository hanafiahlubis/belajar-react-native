// // // import { StyleSheet, Button, Image, Text, TouchableOpacity, View } from 'react-native'
// // // import React, { Component } from 'react'

import { Text, View } from "react-native"
import Routing from "./pages/Routing";
// import { NavigationContainer } from "@react-navigation/native";

// // // // import { Component } from "react";
// // // // import { Dimensions, StyleSheet, View } from "react-native";

// // // function colek_aku_mas() {
// // //   alert("ihhh abang nakal deh");
// // // }

// // // export default class App extends Component {
// // //   render() {
// // //     return (
// // //       <View>
// // //         <Text style={style.ukuranTulisan}><Text style={style.tulisanTebal} >Ali Ganteng</Text> <Text style={style.tulisanMiring} >banget</Text> deh </Text>
// // //         <Button title="Klik untuk lihat kegantengan Ali" onPress={colek_aku_mas} />
// // //         <Image source={require('./melani.png')} style={style.ukuranFoto}/>
// // //         {/* <Image source={{ uri: 'https://th.bing.com/th?id=OIP.gkTRzdsdjBjGamNYoEiZsgAAAA&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' }} style={style.ukuranFoto} /> */}
// // //         <TouchableOpacity onPress={colek_aku_mas} style={style.colekAkuMas}>
// // //           <Text style={style.gayaText}>colek aku lagi dong yang wkkwk</Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //     )
// // //   }
// // // }

// // // const style = StyleSheet.create({
// // //   tulisanTebal: {
// // //     fontWeight: "bold"
// // //   },
// // //   tulisanMiring: {
// // //     fontStyle: "italic"
// // //   },
// // //   ukuranTulisan: {
// // //     fontSize: 20
// // //   },
// // //   ukuranFoto: {
// // //     height: 400,
// // //     width: 400
// // //   },
// // //   colekAkuMas: {
// // //     backgroundColor: '#f00',
// // //     padding: 5
// // //   },
// // //   gayaText: {
// // //     color: '#fff', textAlign: 'center'
// // //   }

// // // })

// // // // const screenHeight = Dimensions.get("window").height;


// // // // export default class App extends Component {

// // // //   render() {
// // // //     return (
// // // //       <View style={style.area}>
// // // //         <View>
// // // //           <View style={style.kotakMerah}></View>
// // // //           <View style={style.kotakKuning}></View>
// // // //           <View style={style.kotakHijau}></View>
// // // //         </View>
// // // //         <View>
// // // //           <View style={style.kotakMerah}></View>
// // // //           <View style={style.kotakKuning}></View>
// // // //           <View style={style.kotakHijau}></View>
// // // //         </View>
// // // //         <View>
// // // //           <View style={style.kotakMerah}></View>
// // // //           <View style={style.kotakKuning}></View>
// // // //           <View style={style.kotakHijau}></View>
// // // //         </View>
// // // //       </View>
// // // //     )
// // // //   }
// // // // }

// // // // const style = StyleSheet.create({
// // // //   area: {
// // // //     display :"flex",
// // // //     flexDirection: "row",
// // // //     // gap: 8,
// // // //     height: screenHeight,
// // // //     // flex: 1,
// // // //     backgroundColor: '#000',
// // // //     justifyContent: "center",
// // // //     alignItems: 'center'
// // // //   },
// // // //   kotakMerah: {
// // // //     backgroundColor: '#f00',
// // // //     width: 100,
// // // //     height: 100
// // // //   },
// // // //   kotakKuning: {
// // // //     backgroundColor: '#FF0',
// // // //     width: 100,
// // // //     height: 100
// // // //   },
// // // //   kotakHijau: {
// // // //     backgroundColor: '#0f0',
// // // //     width: 100,
// // // //     height: 100
// // // //   },
// // // // });


// // import { Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native'
// // import React, { Component } from 'react'

// // export default class App extends Component {
// //   // state = {
// //   //   namaHewan: [
// //   //     {
// //   //       id: 0,
// //   //       name: "Cat"
// //   //     },
// //   //     {
// //   //       id: 1,
// //   //       name: "Dog"
// //   //     },
// //   //     {
// //   //       id: 2,
// //   //       name: "Fish"
// //   //     },
// //   //     {
// //   //       id: 3,
// //   //       name: "Gorila"
// //   //     },
// //   //   ]
// //   // }
// //   // klikAku = (namaHewan) => {
// //   //   alert("Ini Hewan " + namaHewan);
// //   // }

// //   state = [{
// //     nama: "hanafiah",
// //     umur: 17
// //   }]

// //   gantiData = () => {
// //   this.setState([{
// //     nama : "Ali ",
// //     umur :16
// //   }])
// //   }
// //   render() {
// //     return (
// //       <View>
// //         {/* {
// //           this.state.namaHewan.map((item, index) => (
// //             <TouchableOpacity onPress={() => this.klikAku(item.name)}>
// //               <Text key={index} style={styles.textNameHewan}>{item.id + 1} {item.name}</Text>
// //             </TouchableOpacity>
// //           ))
// //         } */}
// //         < View >
// //           <Text>Nama saya : {this.state[0].nama}</Text>
// //           <Text>Umur saya : {this.state[0].umur}</Text>
// //           <Button title='Ubah Data' onPress={() => this.gantiData()} />
// //         </View >
// //       </View>
// //     )
// //   }
// // }

// // const styles = StyleSheet.create({
// //   textNameHewan: {
// //     fontSize: 30,
// //     padding: 5,
// //     backgroundColor: '#f00',
// //     marginBottom: 2,
// //     color: '#fff'

// //   }
// // })


// // import React, { useState } from 'react';
// // import { View, TextInput, Button, Text } from 'react-native';

// // const MyTextInputComponent = () => {
// //   const [textInputValue, setTextInputValue] = useState('');

// //   const handleTextInputChange = (text) => {
// //     setTextInputValue(text);
// //   };

// //   const handleButtonPress = () => {
// //     // Lakukan sesuatu dengan nilai input teks di sini
// //   };

// //   return (
// //     <View>
// //       <TextInput
// //         placeholder="Masukkan teks di sini"
// //         onChangeText={handleTextInputChange}
// //         value={textInputValue}
// //       />
// //       <Text>{textInputValue}</Text>
// //       <Button title="Submit" onPress={handleButtonPress} />
// //     </View>
// //   );
// // };

// // export default MyTextInputComponent;

// import React, { useState } from 'react';
// import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';
// import Anak from './components/Anak';

// const App = () => {
//   const [name, setName] = useState('Ali Hanafiah');
//   const [email, setEmail] = useState('hanafiaha308@gmail.com');
//   const [detail, setDetail] = useState({
//     umur: 17,
//     status: "single"
//   });

//   const handleButtonPress = () => {
//     // Lakukan sesuatu ketika tombol ditekan
//     // Misalnya, mengubah data
//     setName('Ali');
//     setEmail('ali@gmail.com');
//     setDetail({
//       umur: 16,
//       status: "taken"
//     });
//   };

//   return (
//     <View style={styles.countainer}>
//       <Anak susunan="1" name="Ali hanafiah" age="17" />
//       <Anak susunan="1" name="Ali hanafiah" age="17" />
//       <Anak susunan="1" name="Ali hanafiah" age="17" />
//       <Anak susunan="1" name="Ali hanafiah" age="17" />
//       {/* <Text>Nama: {name}</Text>
//       <Text>Email: {email}</Text>
//       <Text>Umur: {detail.umur}</Text>
//       <Text>Status: {detail.status}</Text> */}
//       <Button title='UBAH DATA' onPress={handleButtonPress} />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   countainer : {
//     gap : 16,
//     display : "flex",
//     padding : 2,
//     flex : 1,
//     backgroundColor : "yellow",
//     alignItems: 'center',
//     justifyContent : "center"
//   }
// });


// export default App;

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();

// const HalamanDepan = () => {
//   return (
//     <View >
//       <Text>
//         Halaman Depan
//       </Text>
//     </View>
//   )
// }


// const HalamanDetail = () => {
//   return (
//     <View >
//       <Text>
//         Halaman Detail
//       </Text>
//     </View>
//   )
// }

// import { NavigationContainer } from "@react-navigation/native";


// const App = () => {
//   return (
//   <NavigationContainer>
//     <Routing />
//   </NavigationContainer>
//   )
// }

// export default App;

// App.js

import React from 'react';
// import { View } from 'react-native';
// import Routing from './Routing'; // Ubah sesuai dengan nama file komponen navigasi Anda

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Routing />
    </View>
  );
}

export default App;
