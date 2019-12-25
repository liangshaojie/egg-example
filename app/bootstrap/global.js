const _ = require('lodash');
const shortid = require('shortid');
const moment = require('moment');

global.getContentListFields = (type = '') => {
    let files = null;
    if (type == 'normal') {
        files = '_id title stitle sImg uAuthor date updateDate discription clickNum roofPlacement type videoImg state dismissReason categories isTop'
    } else if (type == 'simple') {
        files = '_id title stitle sImg stitle date updateDate clickNum roofPlacement type videoImg state dismissReason';
    } else if (type == 'stage1') {
        files = '_id title stitle sImg uAuthor date updateDate discription comments clickNum roofPlacement type videoImg state dismissReason categories isTop'
    } else {
        files = '_id title stitle sImg uAuthor date discription clickNum roofPlacement type appShowType imageArr videoArr duration simpleComments comments videoImg state dismissReason categories isTop'
    }
    // console.log('--files----', files)
    return files;
}

global.getDateStr = (addDayCount) => {
    var dd = new Date();
    dd.setDate(dd.getDate() + addDayCount); //获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1); //获取当前月份的日期，不足10补0
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
    let endDate = moment().format("YYYY-MM-DD");
    return {
        startTime: y + "-" + m + "-" + d + ' 23:59:59',
        endTime: endDate + ' 23:59:59'
    }
}