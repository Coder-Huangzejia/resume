import moment, { Moment, MomentInput } from "moment";
import transitionTimeZone from "./transitionTimeZone";
import dayjs from "dayjs";

export function formatJobPeriod(arr: Array<any>) {
  console.log(arr);
  return arr
    ? `${simpleMonth(arr[0])} - ${
        moment().diff(arr[1], "days") ? simpleMonth(arr[1]) : "至今"
      }`
    : "";
}
export function simpleDate(
  date: MomentInput
): string | MomentInput | null | undefined {
  if (date === undefined || date === null || date === "") {
    return date;
  } else {
    return moment(transitionTimeZone({ date: date })).format("YYYY-MM-DD");
  }
}

export function simpleMonth(
  date: MomentInput
): string | MomentInput | null | undefined {
  if (date === undefined || date === null || date === "") {
    return date;
  } else {
    return moment(transitionTimeZone({ date: date })).format("YYYY年MM月");
  }
}

export function simpleTime(date: MomentInput): string | MomentInput {
  if (date === undefined || date === null || date === "") {
    return date;
  } else {
    return moment(transitionTimeZone({ date: date })).format(
      "YYYY-MM-DD HH:mm:ss"
    );
  }
}

export function format(
  date: MomentInput,
  formater: string
): string | MomentInput | null | undefined {
  if (date === undefined || date === null || date === "") {
    return date;
  } else {
    return moment(transitionTimeZone({ date: date })).format(formater);
  }
}

export function fromNow(date: MomentInput): string | MomentInput {
  if (date === undefined || date === null || date === "") {
    return date;
  } else {
    return moment(transitionTimeZone({ date: date })).fromNow();
  }
}

export const quickPickTimeRange = {
  今天: [moment().startOf("day"), moment().endOf("day")],
  昨天: [
    moment().subtract(1, "days").startOf("day"),
    moment().subtract(1, "days").endOf("day"),
  ],
  本周: [moment().startOf("weeks"), moment().endOf("weeks")],
  本月: [moment().startOf("months"), moment().endOf("months")],
  本年: [moment().startOf("year"), moment().endOf("year")],
  最近三天: [
    moment().subtract(2, "days").startOf("day"),
    moment().endOf("day"),
  ],
  最近一周: [moment().subtract(6, "days"), moment()],
  最近一个月: [moment().subtract(1, "month"), moment()],
  最近三个月: [moment().subtract(3, "month"), moment()],
  最近半年: [moment().subtract(6, "month"), moment()],
  最近一年: [moment().subtract(1, "year"), moment()],
  最近两年: [moment().subtract(2, "year"), moment()],
  最近三年: [moment().subtract(3, "year"), moment()],
  最近五年: [moment().subtract(5, "year"), moment()],
} as any;
export const jobPickTimeRange = [
  { label: "三个月", value: [dayjs().subtract(3, "month"), dayjs()] },
  { label: "半年", value: [dayjs().subtract(6, "month"), dayjs()] },
  { label: "一年", value: [dayjs().subtract(1, "year"), dayjs()] },
  { label: "两年", value: [dayjs().subtract(2, "year"), dayjs()] },
  { label: "三年", value: [dayjs().subtract(3, "year"), dayjs()] },
  { label: "五年", value: [dayjs().subtract(5, "year"), dayjs()] },
] as any;

export const quickFuturePickTimeRange = {
  今天: [moment().startOf("day"), moment().endOf("day")],
  明天: [
    moment().add(1, "days").startOf("day"),
    moment().add(1, "days").endOf("day"),
  ],
  未来一周: [
    moment().add(1, "days").startOf("day"),
    moment().add(8, "days").endOf("day"),
  ],
  未来一个月: [
    moment().add(1, "days").startOf("day"),
    moment().add(1, "months").endOf("day"),
  ],
  未来三个月: [
    moment().add(1, "days").startOf("day"),
    moment().add(3, "months").endOf("day"),
  ],
  未来半年: [
    moment().add(1, "days").startOf("day"),
    moment().add(6, "months").endOf("day"),
  ],
  未来一年: [
    moment().add(1, "days").startOf("day"),
    moment().add(1, "year").endOf("day"),
  ],
} as any;

export const quickFuturePickTimeRangeExceptToday = {
  明天: [
    moment().add(1, "days").startOf("day"),
    moment().add(1, "days").endOf("day"),
  ],
  未来一周: [
    moment().add(1, "days").startOf("day"),
    moment().add(8, "days").endOf("day"),
  ],
  未来一个月: [
    moment().add(1, "days").startOf("day"),
    moment().add(1, "months").endOf("day"),
  ],
  未来三个月: [
    moment().add(1, "days").startOf("day"),
    moment().add(3, "months").endOf("day"),
  ],
  未来半年: [
    moment().add(1, "days").startOf("day"),
    moment().add(6, "months").endOf("day"),
  ],
  未来一年: [
    moment().add(1, "days").startOf("day"),
    moment().add(1, "year").endOf("day"),
  ],
} as any;

/**
 * 主播日期计算；2点(含2点)之前的算前一天的日期
 * 2021-11-10T02:00:00Z => 2021-11-09
 * @return string
 */
export function calc2ClockDate(date?: string) {
  if (date === undefined || date === null || date === "") {
    return date;
  } else {
    const currentDay = moment(date);
    const today2Clock = currentDay
      .clone()
      .set({ hour: 2, minute: 0, second: 0 });

    if (currentDay.isSameOrBefore(today2Clock)) {
      return currentDay.subtract("day", 1).format("YYYY-MM-DD");
    } else {
      return currentDay.format("YYYY-MM-DD");
    }
  }
}

/**
 * 设置时间为00:00:00并格式化为YYYY-MM-DD HH:mm:ss
 */
export function setStartTimeAndFormat(date: Moment) {
  const formatString = date
    .set({ hour: 0, minute: 0, second: 0 })
    .format("YYYY-MM-DD HH:mm:ss");
  return formatString;
}

/**
 * 设置时间为23:59:59并格式化为YYYY-MM-DD HH:mm:ss
 */
export function setEndTimeAndFormat(date: Moment) {
  const formatString = date
    .set({ hour: 23, minute: 59, second: 59 })
    .format("YYYY-MM-DD HH:mm:ss");
  return formatString;
}

/**
 * 设置时间为00:00:00并格式化为Utc时间串
 */
export function setUtcStartTimeAndFormat(date: Moment) {
  const formatString = date
    .clone()
    .set({ hour: 0, minute: 0, second: 0 })
    .utc()
    .format();
  return formatString;
}

/**
 * 设置时间为23:59:59并格式化为Utc时间串
 */
export function setUtcEndTimeAndFormat(date: Moment) {
  const formatString = date
    .clone()
    .set({ hour: 23, minute: 59, second: 59 })
    .utc()
    .format();
  return formatString;
}

/**
 * 转换中国标准时间，不使用moment会受全局设置时区影响
 */
export function timeForFull(time: Date, format = "YYYY-MM-DD HH:mm:ss") {
  //当前GMT转年月日时分秒
  return `${
    format === "YYYY-MM-DD HH:mm:ss"
      ? time.getFullYear() +
        "-" +
        (time.getMonth() + 1 < 10
          ? "0" + (time.getMonth() + 1)
          : time.getMonth() + 1) +
        "-" +
        (time.getDate() < 10 ? "0" + time.getDate() : time.getDate()) +
        " " +
        (time.getHours() < 10 ? "0" + time.getHours() : time.getHours()) +
        ":" +
        (time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()) +
        ":" +
        (time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds())
      : time.getFullYear() +
        "-" +
        (time.getMonth() + 1 < 10
          ? "0" + (time.getMonth() + 1)
          : time.getMonth() + 1) +
        "-" +
        (time.getDate() < 10 ? "0" + time.getDate() : time.getDate())
  }`;
}

/**
 * 格式化时间为Utc时间串
 */
export function setUtcFormat(date: Moment) {
  let formatString = "";
  try {
    formatString = date.clone().utc().format();
  } catch (e) {
    console.error("格式化时间为Utc时间错误:", e);
  }
  return formatString;
}
