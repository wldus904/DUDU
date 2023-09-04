import { useState, useEffect } from "react";
import styled from "styled-components";
import { convertDateFormat, convertDayOfWeek } from "@/service/convert.jts";

const CalendarWrapper = styled.div`
    background-color: #fff;
    box-shadow: 0 0 4px #d0d5dc;
    width: 100%;
    height: 100%;
    padding: 15px;
`;

const CalendarHeader = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;

const Year = styled.span`
    font-size: 13px;
    font-weight: 500;
    margin: 0 5px;
`;

const Month = styled.span`
    font-size: 14px;
    font-weight: 700;
    margin: 0 5px;
`;

const DateTable = styled.table`
    width: 100%;
    height: 100%;
`;
const DataBody = styled.tbody``;
const WeekRow = styled.tr``;
const DateCol = styled.td`
    text-align: center;
    vertical-align: center;
`;
const DateBox = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50%;

    &:hover {
        background-color: #ffefef;
    }

    &.today {
        box-shadow: 0 0 0 1px #ef5350 inset;
    }

    &.active {
        background-color: #ef5350;
        color: #fff;
    }

    &.disabled {
        color: #dbdbdb;
    }
`;

const Calendar = (props) => {
    let today = new Date(props.currentDate);
    let [calendarDates, setCalendarDates] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedNode, setSelectedNode] = useState(null);

    useEffect(() => {
        updateCalendarDates();
    }, []);

    const isToday = (year, month, date) => {
        return (
            year === today.getFullYear() && month === today.getMonth() && date === today.getDate()
        );
    };

    const updateCalendarDates = (updateDate = null) => {
        const prevDate = updateDate ? new Date(updateDate) : new Date();
        prevDate.setDate(1);
        prevDate.setMonth(prevDate.getMonth());
        prevDate.setDate(0);

        const currentDate = updateDate ? new Date(updateDate) : new Date();
        currentDate.setDate(1);
        let firstDay = currentDate.getDay();
        currentDate.setMonth(currentDate.getMonth() + 1);
        currentDate.setDate(0);
        let lastDate = currentDate.getDate();

        setSelectedYear(currentDate.getFullYear());
        setSelectedMonth((currentDate.getMonth() + 1).toString().padStart(2, "0"));

        const calendar = [];
        let week = [];

        const setCalendar = () => {
            calendar.push(week);
            week = [];
        };

        for (let date = firstDay; date > 0; date--) {
            week.push({
                value: prevDate.getDate() - date + 1,
                isActive: false,
                today: isToday(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate()),
            });
        }

        if (week.length === 7) setCalendar();

        for (let date = 1; date <= lastDate; date++) {
            week.push({
                value: date,
                isActive: true,
                today: isToday(currentDate.getFullYear(), currentDate.getMonth(), date),
            });

            if (week.length === 7) setCalendar();

            if (date === lastDate) {
                const pushWeek = [];
                let lastPushDate = null;

                for (let pushDate = 0; pushDate < 7 - week.length; pushDate++) {
                    pushWeek.push({
                        value: pushDate + 1,
                        isActive: false,
                        today: isToday(
                            currentDate.getFullYear(),
                            currentDate.getMonth(),
                            pushDate + 1
                        ),
                    });
                }

                lastPushDate = 7 - week.length;
                week = [...week, ...pushWeek];
                setCalendar();

                if (calendar.length < 6) {
                    for (
                        let remainingWeek = 0;
                        remainingWeek < 6 - calendar.length;
                        remainingWeek++
                    ) {
                        for (let pushDate = lastPushDate; pushDate < lastPushDate + 7; pushDate++) {
                            week.push({
                                value: pushDate + 1,
                                isActive: false,
                                today: isToday(
                                    currentDate.getFullYear(),
                                    currentDate.getMonth() + 1,
                                    pushDate + 1
                                ),
                            });
                        }
                        setCalendar();
                    }
                }
            }
        }

        setCalendarDates(calendar);
    };

    const selectDate = (node, date) => {
        if (!date.isActive) return;
        setSelectedDate(date.value);
        setSelectedNode(node);
        props.setValue(
            `${selectedYear}.${selectedMonth}.${date.value.toString().padStart(2, "0")}`
        );
    };

    const getDateClass = (node, date) => {
        let className = "";

        if (date.today) className = "today";
        if (selectedNode === node) className = "active";
        if (!date.isActive) className = "disabled";

        return className;
    };

    return (
        <CalendarWrapper>
            <CalendarHeader>
                <Year>{selectedYear}년</Year>
                <Month>{selectedMonth}월</Month>
            </CalendarHeader>
            <DateTable>
                <DataBody>
                    {calendarDates.map((week, weekIdx) => {
                        return (
                            <WeekRow key={`week-${weekIdx}`}>
                                {week.map((date, dateIdx) => {
                                    return (
                                        <DateCol key={`${weekIdx}-${date.value}`}>
                                            <DateBox
                                                onClick={() =>
                                                    selectDate(`${weekIdx}-${date.value}`, date)
                                                }
                                                className={getDateClass(
                                                    `${weekIdx}-${date.value}`,
                                                    date
                                                )}
                                            >
                                                {date.value}
                                            </DateBox>
                                        </DateCol>
                                    );
                                })}
                            </WeekRow>
                        );
                    })}
                </DataBody>
            </DateTable>
        </CalendarWrapper>
    );
};

export default Calendar;
