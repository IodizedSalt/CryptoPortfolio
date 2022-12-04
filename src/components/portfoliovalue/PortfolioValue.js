/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import styles from './PortfolioValue.style.js'


class PortfolioValue extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      portfolioValue: "Dollar",
      currencySelection: 0
    };
  }

  onPressTitle = () => {

    this.setState((prevState, props) => ({
        currencySelection: prevState.currencySelection + 1
    }), () =>{
        if(this.state.currencySelection == 1){
            this.setState({portfolioValue: 'EURO'})
        }else if(this.state.currencySelection == 2){
          this.setState({portfolioValue: 'DKK'})
        }else{
          this.setState({portfolioValue: 'Dollar', currencySelection: 0})
        }
    });



  };
    render(){
      return (
        <View
          style={styles.portfolio_value_container}
        >
            <Text onPress={this.onPressTitle}>{this.state.portfolioValue}</Text>
        </View>
      );
    }
}

export default PortfolioValue

