import react from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

/*Dynamic usage for the components use some values in return statement*/

/*To use prop-types, we must need to install the prop-types in the terminal.
* npm install prop-types*/
const Item = ({name, price}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  );
};
/*PropTypes are used to define the value whether its integer or string.
* Based on the type we must provide inputs*/
Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};
export default Item;
