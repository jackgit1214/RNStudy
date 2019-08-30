import React from 'react';

import {SearchBar, Text} from 'react-native-elements';
import {ScrollView, View} from 'react-native';

const dummySearchBarProps = {
    showLoading: true,
    onFocus: () => console.log('focus'),
    onBlur: () => console.log('blur'),
    onCancel: () => console.log('cancel'),
    onClearText: () => console.log('cleared'),
    onChangeText: text => console.log('text:', text),
};

class ButtonsDetail extends React.Component {

  render() {
      const {navigation} = this.props;
      const paramName = navigation.getParam("name");
      const banner = this.props.banner;
    return (
        <View>
            <Text>Buttons detail view {paramName},{banner}, {this.props.data_Param}</Text>
            <SearchBar placeholder="Default searchbar" {...dummySearchBarProps} />
            <SearchBar
                placeholder="iOS searchbar"
                platform="ios"
                {...dummySearchBarProps}
            />
            <SearchBar
                placeholder="Android searchbar"
                platform="android"
                {...dummySearchBarProps}
            />
        </View>
    );
  }
}

export default ButtonsDetail;
