/* 该组件主要是用于将10，13位时间戳，日期时间字符串按照时区转化
    排查项目中new Date()使用的情况：
    new Date().getTime(),new Date().valueOf()都是返回时间戳，不用再处理
    new Date().toISOString()返回根据当前电脑系统时区得到的0时区时间也不用处理，'2022-02-08T10:14:12.928Z'
    除非说要特别指明时哪个时区的时间就用moment(new Date().getTime()).format()'2022-02-08T11:27:55+01:00'
    moment(new Date()).format('YYYY-MM-DD HH:mm:ss')和moment().format('YYYY-MM-DD HH:mm:ss')一样，不用处理，

    其余utc时间由全局moment.tz.setDefault(区域名称))设置
    没找到设置全局转utc时的偏移量，现在都是moment转utc是按零时区的
    只找到单个的moment('2022-01-05 13:43:51').utc().utcOffset(-8).format()
    moment().format();是获取当前的utc时间是按本地时区8的
    moment().format('YYYY-MM-DD HH:mm:ss');得到的是当前的选择的时间，不会受全局设置时区影响
    moment().utc().format();是获取当前的utc时间不过也是按零时区的,会受全局设置时区影响
    所以要想得到按设置时区的日期时间字符串应该moment().utc().format('YYYY-MM-DD HH:mm:ss')
    
    注：moment().utc().format()和new Date().toISOString()得到的都是本地时区8减的零时区时间全局影响不了
        moment('2022-01-21 05:38:12').utc().format()就是全局设置的时区加减到零时区时间
        所以要得到当前时区的被影响的utc时间可以
        moment(new Date().getTime()).format()
        实际上moment().utc().format()和new Date().toISOString()得到的0时区最后根据全局设置的时区来
        显示是一样的，只是moment(new Date().getTime()).format()是告知了当前是几区的utc时间

    所以后台utc都是零时区，日期时间字符串按东8时区转化
    // 获取当前全局设置的时区号 moment().utcOffset() / 60; 480/60
    // 获取当前的区域名称 moment.tz.guess()

    new Date()获取的是电脑系统的时区时间.toISOString()是解析的零时区的utc
    .getTime()是获取的系统的时区时间戳
    不管是几区的时间戳，用moment解析出来的时候都是按全局设置的时区解析

    antd的时间选择组件都是会被全局设置影响，里面的时区是全局设置的，当moment转成utc（零时区）时间时
    会自动加减小时，回显时utc和时间错都会回显被加减后的值
    所以只要传参数是utc时间或者时间错，会按照时区设置正常操作

    遇到想得到按全局时区设置的各种格式时，可以先转utc()再转格式如moment().utc().format('YYYY-MM-DD HH:mm:ss')
    时间戳转utc：moment(1546325890000).utc().format()
    日期字符串转utc：timestamp = moment('2019-01-01 08:58:10').valueOf()
    moment(timestamp).utc().format()

    系统内接口参数有带timeZone指明的就改成全局设置的mobox值就行，不用再改时间

    date: '2021-12-09T08:08:33Z' '2021-12-09T08:08:33z' '2021-12-09 16:08:33'
    formatDetail:'YYYY-MM-DD HH:mm:ss'
    时间戳，日期字符串2022-01-05 13:43:51，utc参数按时区回显成日期字符串
*/
import moment, { MomentInput } from 'moment';

// 电脑系统时区
let timeZoneSystem: number = 8 ?? -new Date().getTimezoneOffset() / 60;

// useRouteConfig 获取权限路由信息
export default function transitionTimeZone({
    defaultZone = timeZoneSystem, // 默认后台返回的日期时间字符串和时间戳是按东八区的
    date,
    formatDetail = 'YYYY-MM-DD HH:mm:ss'
}: {
    date: string | number | MomentInput;
    formatDetail?: string;
    defaultZone?: number;
}) {
    // const { defaultZone = 8 } = props;
    // let timeZone = store.Setting.timeZone;
    // 后台给的日期时间字符串转utc0时区时间
    // const utcTransition = props.date && moment.utc(props.date.replaceAll('z', 'Z')).format();
    let transitionDate = '--';
    // console.log(moment(props.date).format(props.formatDetail), 'lastTimestamp', props.date);
    if (date && date > 0) {
        // 时间戳 默认后台返回的时间戳是按东八区的
        // const lastTimestamp = Number(date) + (defaultZone! - timeZone) * 3600000;
        transitionDate = moment(Number(date)).format(formatDetail);
    } else {
        // 日期时间字符串或utc时间
        if (!(date as string).includes('T')) {
            // 2021-03-04 14:30:33
            // 日期时间字符串 东-小时，西+小时 默认后台返回的是东8区的
            // const dateTmp = (date as string).replace(/-/g, '/'); // 兼容ios
            // const timestamp = Date.parse(dateTmp); // 返回时间戳
            // 默认后台返回的日期时间字符串是按东八区的，不转化成时间戳去剪了，直接转成带有时区字符串
            // const timestamp = moment.tz(date, getTimeZoneCity(defaultZone)).valueOf();
            // const lastTimestamp = timestamp - (defaultZone! - timeZone) * 3600000;
            // transitionDate = moment(lastTimestamp).format(formatDetail);
            if (date) {
                const zoneDate = date + `${defaultZone >= 0 ? '+' + defaultZone : defaultZone}:00`;
                transitionDate = moment(zoneDate).format(formatDetail);
            }
        } else {
            // 2021-02-07T06:00:00.0000000 2022-01-30T04:00:00+00:00
            const str = (date as string).charAt((date as string).length - 1);
            // console.log(date, 'dddddd');
            if (
                [ 'z', 'Z' ].indexOf(str) === -1 &&
                !(date as string).includes('+') &&
                !(date as string).split('T')[1].includes('-')
            ) {
                date = date + 'Z';
            }
            transitionDate = moment(date).format(formatDetail);
        }
    }
    return transitionDate;
}
