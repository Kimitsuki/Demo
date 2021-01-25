import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../StyleSheet';
import JobList from '../component/JobList'

let {height, width} = Dimensions.get('window');

export default class MainPage extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor='transparent' translucent={true}/>
                <ImageBackground source={require('../pictures/background.png')} style={{width: '100%', height: 90, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.bigWhite}>Trang chủ</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('JobList')}>
                        <Image source={require('../pictures/dong_bo.png')} style={{width: 60, height: 50, marginTop: 30, marginRight: 10}}/>
                    </TouchableOpacity>
                </ImageBackground>
                <View style={{height: '100%', backgroundColor: 'white'}}>
                    <View style={{flexDirection: 'row', marginTop: height/10}}>
                        <View style={{flex: 4, alignItems: 'center'}}>
                            <TouchableOpacity style={styles.bigCircle}>
                                <LinearGradient style={styles.bigCircle} colors={['#ffffff', '#5196db']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}>
                                    <Image source={require('../pictures/cong_ty.png')} style={{width: 160, height: 100}}/>
                                </LinearGradient>
                            </TouchableOpacity>
                            <Text style={styles.smallBlue}>Công ty</Text>
                        </View>
                        <View style={{flex: 3, alignItems: 'center'}}>
                            <TouchableOpacity>
                                <LinearGradient style={styles.smallCircle} colors={['#ffffff', '#5196db']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}>
                                    <Image source={require('../pictures/sang_kh.png')} style={{width: 120, height: 90}}/>
                                </LinearGradient>
                            </TouchableOpacity>
                            <Text style={styles.smallBlue}>Sang khách hàng</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: height/10}}>
                        <View style={{flex: 3, alignItems: 'center'}}>
                            <TouchableOpacity>
                                <LinearGradient style={styles.smallCircle} colors={['#ffffff', '#5196db']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}>
                                    <Image source={require('../pictures/sang_kh.png')} style={{width: 120, height: 90}}/>
                                </LinearGradient>
                            </TouchableOpacity>
                            <Text style={styles.smallBlue}>Nghỉ phép</Text>
                        </View>
                        <View style={{flex: 4, alignItems: 'center'}}>
                            <TouchableOpacity>
                                <LinearGradient style={styles.bigCircle} colors={['#ffffff', '#5196db']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}>
                                    <Image source={require('../pictures/lam_vc_tai_nha.png')} style={{width: 160, height: 120}}/>
                                </LinearGradient>
                            </TouchableOpacity>
                            <Text style={styles.smallBlue}>Làm tại nhà</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


