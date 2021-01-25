import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from '../StyleSheet'

export class Job extends Component{
  render() {
    return(
      <TouchableOpacity style={{marginTop: 5, marginHorizontal: 5, borderRadius: 25 / 2, flexDirection: 'row', borderWidth: 2, borderColor: 'steelblue', backgroundColor: 'white'}}>
          <View style={{width: 70, height: '100%', alignItems: 'center', marginTop: 10}}>
            {this.props.status == 'Chưa thực hiện' ? <Image source={require('../pictures/chua_thuc_hien.png')} style={{width: 50, height: 50}}/>
            :this.props.status == 'Đã thực hiện' ? <Image source={require('../pictures/da_thuc_hien.png')} style={{width: 50, height: 50}}/>
            :this.props.status == 'Đang thực hiện' ? <Image source={require('../pictures/dang_thuc_hien.png')} style={{width: 50, height: 50}}/>
            :this.props.status == 'Đã hủy' ? <Image source={require('../pictures/da_huy.png')} style={{width: 50, height: 50}}/>
            :this.props.status == 'Tạm dừng' ? <Image source={require('../pictures/tam_dung.png')} style={{width: 50, height: 50}}/>
            :<Image source={require('../pictures/qua_han.png')} style={{width: 50, height: 50}}/>}
          </View>
          <View style={{width: '75%'}}>
            <Text style={styles.jobName}>{this.props.work_name}</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                {this.props.work_level > 0 ? <View style={{width: 15, height: 2, marginRight: 2, backgroundColor: 'orange'}}/> : null}
                {this.props.work_level > 1 ? <View style={{width: 15, height: 2, marginRight: 2, backgroundColor: 'darkorange'}}/> : null}
                {this.props.work_level > 2 ? <View style={{width: 15, height: 2, marginRight: 2, backgroundColor: 'orangered'}}/> : null}
                {this.props.work_level > 3 ? <View style={{width: 15, height: 2, marginRight: 2, backgroundColor: 'red'}}/> : null}
            </View>
            <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 5}}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../pictures/user_den.png')} style={{width: 10, height: 10}} resizeMode="contain"/>
                    <Text style={{fontSize: 12, marginLeft: 5}}>{this.props.create_by}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../pictures/dongho_den.png')} style={{width: 10, height: 10}} resizeMode="contain"/>
                    <Text style={{fontSize: 12, marginLeft: 5}}>{this.props.create_date}</Text>
                </View>
            </View>
          </View>
          <View style={{width: 30, justifyContent: 'center'}}>
            <Image source={require('../pictures/vector.png')} style={{width: 10, height: 10}} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
    )
  }
}