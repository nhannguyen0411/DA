import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { CartContext } from '../contexts/Cart';
import DetailItem from '../Components/DetailItem';
export default class DetailScreen extends Component {

    static navigationOptions = {
        headerTitleAlign: {
            textAlign: 'center'
        }
    };

    state = {
        product: {},
        err: 'Error'
    }

    render() {
        const { navigation } = this.props;
        return (
            // <>
            // {
            //     product.length ? 
            //     <View style={[styles.container_indicator, styles.horizontal]}>
            //         <ActivityIndicator size="large" color="#0000ff" />
            //         {/* <Text style={{color: '#000'}}>{err}</Text> */}
            //     </View> :
            //     <ScrollView style={styles.container}>
            //         <DetailItem item={product}/>
            //     </ScrollView>
            // }
            // </>
            <View style={styles.container}>
                <CartContext.Consumer>
                    {
                        ({ addToCart }) => (
                            <DetailItem addToCart={addToCart} item={navigation.getParam('product')}/>
                        )
                    }
                </CartContext.Consumer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    container_indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})