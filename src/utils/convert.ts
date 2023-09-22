export const convertDateFormat = (date, pattern = null) => {
    const dateString = typeof date === "string" ? date : date.toISOString();
    const splitDate = dateString.split("T")[0];
    return pattern ? splitDate.replaceAll("-", pattern) : splitDate;
};

export const convertDayOfWeek = (date, isFullName = false) => {
    const day = typeof date === "number" ? date : date.getDay();
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const suffix = isFullName ? "요일" : "";
    return week[day] + suffix;
};
