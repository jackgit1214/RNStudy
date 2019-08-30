import React from 'react';
import { Dimensions, Animated } from 'react-native';
import { View, Text } from 'react-native';
//import store from 'react-native-simple-store';
import SplashScreen from 'react-native-splash-screen';
const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const splashImg = require('../img/splash.jpg');
class Splash extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
         super(props);
        this.state = {
          //  bounceValue: new Animated.Value(1)
        };
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    componentDidMount() {
        const { navigate } = this.props.navigation;
        // Animated.timing(this.state.bounceValue, {
        //     toValue: 1.2,
        //     duration: 1000
        // }).start();

        this.timer = setTimeout(() => {
            SplashScreen.hide();
            navigate('Home',{
                 itemId: 86,
                 otherParam: 'anything you want here'
             })

            // store.get('isInit').then((isInit) => {
            //     if (!isInit) {
            //         navigate('Category', { isFirst: true });
            //     } else {
            //         //NavigationUtil.reset(this.props.navigation, 'Home');
            //     }
            // });
        }, 5000);
    }
  render() {
    return (
        <View>
            <Text>this</Text>
        </View>
        // <Animated.Image
        //     style={{
        //         width: maxWidth,
        //         height: maxHeight,
        //         transform: [{ scale: this.state.bounceValue }]
        //     }}
        //     source={splashImg}
        // />
    );
  }
}

export default Splash;
