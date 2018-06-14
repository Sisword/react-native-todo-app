import React from 'react';
import {StatusBar, I18nManager, Platform, Text} from 'react-native'
import {Font, AppLoading, Asset} from 'expo'
import RootNavigator from "./src/navigations/index";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
            logged: false,
            isReady: false
        }
    }


    async componentDidMount() {
        try {
            Platform.OS === 'ios' ? StatusBar.setHidden(false) : StatusBar.setHidden(false);
            I18nManager.allowRTL(false);
            I18nManager.forceRTL(false);
            StatusBar.setBackgroundColor('#80808080');
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        if (!this.state.fontLoaded && !this.state.isReady) {
            return (
                <AppLoading startAsync={() => this._cacheResourcesAsync()}
                            onFinish={() => this.setState({isReady: true})}
                            onError={console.warn}/>
            )
        }
        return (
            <RootNavigator/>
        )
    }

    async _cacheResourcesAsync() {
        const images = [];
        await Font.loadAsync({
            ProductSansRegular: require('./src/assets/fonts/ProductSansRegular.ttf'),
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        this.setState({fontLoaded: true});
        const cacheImages = images.map((image) => {
            return Asset.fromModule(image).downloadAsync()
        });

        return Promise.all(cacheImages)
    }
}

