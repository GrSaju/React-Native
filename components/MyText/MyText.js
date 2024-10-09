import React from 'react';
import {Text} from 'react-native';
import style from './style';

const MyText = () => {

  /*onPressHandler method to call alert dialogue*/
  const onPressHandler = () => {
    alert('Button Pressed');
  };
  return(
    /* Array for the style is user if the text wants to have multiple styles.
    Inline styles can also be used. Inline styles causes performance issues
    */

    /*Added function for clicklistners. onPress for the text. Method name onPressHandler */
    <Text
      style={[style.text, style.text1, {color : 'green'}]}
      onPress={() => onPressHandler()}

    >Hello React Native World!
    </Text>
    );

};

export default MyText;
