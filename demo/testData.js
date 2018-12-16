/**
 * Created by s on 2018/5/26.
 */

//ztree的测试数据
var testData = [{
    id: 1000,
    pId: 0,
    label: '用户',
    name: 'user',
    flag: 'table',
    checked: false,
    columns: [{
        pId: 1000,
        id: '1000@user_name',
        checked: false,
        name: 'user_name',
        type: 'String',
        label: '用户名'
    }]
}, {
    id: 2000,
    pId: 0,
    label: '机构',
    name: 'dept',
    flag: 'table',
    checked: false,
    columns: [{
        pId: 2000,
        id: '2000@id',
        checked: false,
        label: 'id',
        name: 'id',
        flag: 'column',
        type: 'Long'
    }, {
        pId: 2000,
        id: '2000@simpleName',
        checked: false,
        label: '机构简称',
        name: 'simpleName',
        flag: 'column',
        type: 'String'
    }, {
        pId: 2000,
        id: '2000@leader',
        checked: false,
        flag: 'column',
        label: '机构负责人',
        name: 'leader',
        type: 'Long'
    }]
}, {
    id: 3000,
    pId: 0,
    label: '客户',
    name: 'client',
    flag: 'table',
    checked: false,
    columns: [{
        pId: 3000,
        id: '3000@id',
        checked: false,
        label: 'id',
        name: 'id',
        flag: 'column',
        type: 'Long'
    }, {
        pId: 3000,
        id: '3000@name',
        label: '名称',
        checked: false,
        name: 'name',
        flag: 'column',
        type: 'String'
    }, {
        pId: 3000,
        id: '3000@adress',
        flag: 'column',
        checked: false,
        label: '地址',
        name: 'address',
        type: 'String'
    }]
}];