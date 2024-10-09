
import React from 'react';
import MyText from './components/MyText/MyText';
import Items from'./Items/items';

import {
  SafeAreaView, Text, View,
} from 'react-native';


// const App = () =>{
//   return (
//     <SafeAreaView>
//      {/* Common MyText component is used from Components folder for re-usability*/}
//       <View>
//         <Text>
//           Test
//         </Text>
//       </View>
//
//       <View style={{backgroundColor: 'blue', height: 50}}>
//         <Text>
//           Test2
//         </Text>
//       </View>
//
//       <View>
//         <Text>
//           <MyText/>
//         </Text>
//       </View>
//      <MyText/>
//     </SafeAreaView>
//   );
// };

// const App = () =>{
//   return (
//     <SafeAreaView>
//
//       {/*For Dynamice Usage for the components*/}
//       <Items name={'Table'} price = {20}/>
//       <Items name={'Chair'} price = {100}/>
//       <Items name={'bench'} price = {500}/>
//     </SafeAreaView>
//   );
// };
// export default App;

const App = () =>{
  return (
    <SafeAreaView>
      <MyText/>
    </SafeAreaView>
  );
};
export default App;
