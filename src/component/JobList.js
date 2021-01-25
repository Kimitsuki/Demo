import React, { Component } from 'react';
import { Text, TextInput, View, ScrollView, Image, ImageBackground, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../StyleSheet'
import { Job } from '../common/Common'
import MainPage from '../component/MainPage'
let data=[
    {
        "id": "2941",
        "work_code": "KH_20200629_3",
        "work_name": "Sửa phân quyền CR tối ưu hóa (mail Huynh gửi)",
        "module_id": 465,
        "work_type": "2",
        "work_level": "Khẩn cấp",
        "work_group": "Làm mới, phát sinh",
        "nguoi_thuc_thi": "doai.nguyenhuu",
        "nguoi_theo_doi": null,
        "nguoi_giao": "anh.nguyentuan",
        "tester": null,
        "customer": "huynh.nguyenchi",
        "assign_sdate": "2020-06-29 00:00:00.0",
        "assign_edate": "2020-06-29 00:00:00.0",
        "actual_sdate": "2020-06-29 00:00:00.0",
        "actual_edate": "2020-06-30 16:09:24.0",
        "content_plan": "Sửa phân quyền CR tối ưu hóa (mail Huynh gửi)",
        "file_id": "1261,",
        "status": "Đã hoàn thành",
        "progress": "0",
        "note": null,
        "create_by": "doai.nguyenhuu",
        "create_date": "2020-06-29 11:11:32.0",
        "modify_by": "doai.nguyenhuu",
        "modify_date": "2020-06-30 16:09:24.0",
        "project_id": 61,
        "work_parent_id": null,
        "rate": 0,
        "file_id_finish": "1281,"
    },
    {
        "id": "2881",
        "work_code": "KH_20200625_1",
        "work_name": "Sửa lại công thức tính 5 cột KPI sự cố",
        "module_id": 562,
        "work_type": "1",
        "work_level": "Khẩn cấp",
        "work_group": "Làm mới, phát sinh",
        "nguoi_thuc_thi": "doai.nguyenhuu",
        "nguoi_theo_doi": null,
        "nguoi_giao": "anh.nguyentuan",
        "tester": null,
        "customer": null,
        "assign_sdate": "2020-06-25 00:00:00.0",
        "assign_edate": "2020-06-25 00:00:00.0",
        "actual_sdate": "2020-06-25 00:00:00.0",
        "actual_edate": "2020-06-25 11:44:46.0",
        "content_plan": "Sửa lại công thức tính 5 cột KPI sự cố\r\nTT_PENDING_3DAY, TT_N_V_CRI_OVERDUE, TT_N_CRITICAL_OVERDUE, TT_NUM_MAJOR_OVERDUE, TT_NUM_MINOR_OVERDUE\r\n",
        "file_id": null,
        "status": "Đã hoàn thành",
        "progress": "0",
        "note": null,
        "create_by": "doai.nguyenhuu",
        "create_date": "2020-06-25 10:01:15.0",
        "modify_by": "doai.nguyenhuu",
        "modify_date": "2020-06-25 11:44:46.0",
        "project_id": 61,
        "work_parent_id": null,
        "rate": 0,
        "file_id_finish": "1241,"
    },
    {
        "id": "2821",
        "work_code": "KH_20200622_2",
        "work_name": "Sửa lại giao diện dashboard now (lần 1)",
        "module_id": 162,
        "work_type": "3",
        "work_level": "Khẩn cấp",
        "work_group": "Sửa lỗi",
        "nguoi_thuc_thi": "doai.nguyenhuu",
        "nguoi_theo_doi": null,
        "nguoi_giao": "anh.nguyentuan",
        "tester": null,
        "customer": null,
        "assign_sdate": "2020-06-22 00:00:00.0",
        "assign_edate": "2020-06-23 00:00:00.0",
        "actual_sdate": "2020-06-22 00:00:00.0",
        "actual_edate": "2020-06-25 09:58:43.0",
        "content_plan": "Sửa lại giao diện dashboard now theo file đính kèm",
        "file_id": "1102,",
        "status": "Đã hoàn thành",
        "progress": "0",
        "note": null,
        "create_by": "doai.nguyenhuu",
        "create_date": "2020-06-22 16:29:07.0",
        "modify_by": "doai.nguyenhuu",
        "modify_date": "2020-06-25 09:58:43.0",
        "project_id": 61,
        "work_parent_id": null,
        "rate": 0,
        "file_id_finish": "1221,"
    },
    {
        "id": "2763",
        "work_code": "KH_20200619_8",
        "work_name": "Sửa quy trình sự kiện (file n11)",
        "module_id": 462,
        "work_type": "4",
        "work_level": "Khẩn cấp",
        "work_group": "Làm mới, phát sinh",
        "nguoi_thuc_thi": "doai.nguyenhuu",
        "nguoi_theo_doi": null,
        "nguoi_giao": "anh.nguyentuan",
        "tester": null,
        "customer": null,
        "assign_sdate": "2020-06-20 00:00:00.0",
        "assign_edate": "2020-06-20 00:00:00.0",
        "actual_sdate": "2020-06-20 00:00:00.0",
        "actual_edate": "2020-06-22 16:25:09.0",
        "content_plan": "Sửa gộp cảnh báo, xuất file, thêm tab RAN TICKET, chi tiết file đính kèm",
        "file_id": "983,",
        "status": "Đã hoàn thành",
        "progress": "0",
        "note": null,
        "create_by": "doai.nguyenhuu",
        "create_date": "2020-06-19 14:57:52.0",
        "modify_by": "doai.nguyenhuu",
        "modify_date": "2020-06-22 16:25:09.0",
        "project_id": 61,
        "work_parent_id": null,
        "rate": 0,
        "file_id_finish": "1101,"
    },
    {
        "id": "2762",
        "work_code": "KH_20200619_7",
        "work_name": "Sửa quy trình vấn đề (file n11)",
        "module_id": 464,
        "work_type": "2",
        "work_level": "Khẩn cấp",
        "work_group": "Làm mới, phát sinh",
        "nguoi_thuc_thi": "doai.nguyenhuu",
        "nguoi_theo_doi": null,
        "nguoi_giao": "anh.nguyentuan",
        "tester": null,
        "customer": null,
        "assign_sdate": "2020-06-20 00:00:00.0",
        "assign_edate": "2020-06-20 00:00:00.0",
        "actual_sdate": "2020-06-20 00:00:00.0",
        "actual_edate": "2020-06-20 16:30:12.0",
        "content_plan": "Phân quyền thêm mới cho BO, cụ thể file đính kèm",
        "file_id": "982,1041,",
        "status": "Đã hoàn thành",
        "progress": "0",
        "note": null,
        "create_by": "doai.nguyenhuu",
        "create_date": "2020-06-19 14:56:13.0",
        "modify_by": "doai.nguyenhuu",
        "modify_date": "2020-06-20 16:30:12.0",
        "project_id": 61,
        "work_parent_id": null,
        "rate": 0,
        "file_id_finish": "1061,"
    }]

export default class JobList extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor='transparent' translucent={true}/>
                <ImageBackground source={require('../pictures/background.png')} style={{width: '100%', height: 150}}>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={styles.bigWhite}>Danh sách công việc</Text>
                    </View>
                    <View style={styles.findingBox}>
                        <View style={{flex: 1}}>
                            <Image source={require('../pictures/search.png')} style={{width: 20, height: 20}}/>
                        </View>
                        <View style={{flex: 12}}>
                            <TextInput
                            style={{}}
                                placeholder="Nhập từ khóa tìm kiếm"
                            />
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('MainPage')}>
                                <Image source={require('../pictures/filter.png')} style={{width: 25, height: 25}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
                <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
                    <FlatList data={data}
                        renderItem={({item}) => <Job status={item.status} work_name={item.work_name} work_level={item.work_level} create_by={item.create_by} create_date={item.create_date}/>}
                    />
                    <View style={{height: 155}}/>
                </ScrollView>
            </View>
        );
    }
}