import { useState } from "react";
import styled from "styled-components";
import { BsCalendarEvent } from "react-icons/bs";
import { convertDateFormat } from "@/service/convert.jts";
import Calendar from "./Calendar";

const DatePickerWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const DatePickerBox = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const DateValueBox = styled.span`
    margin-right: 10px;
    font-weight: 500;
`;

const CalendarWrapper = styled.div`
    position: relative;
    width: 0;
    height: 0;
    transition-property: width, height;
    transition-duration: 0s, 0.5s;
    transition-delay: 0.6s, 0s;

    &.on {
        width: 240px;
        height: 220px;
        transition-property: width, height;
        transition-duration: 0s, 0.5s;
        transition-delay: 0s, 0.1s;
    }
`;

const CalendarBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 10px;
    right: 0;
`;

const DatePicker = (props) => {
    const [showDate, setShowDate] = useState(null);
    const [isShowCalendar, setIsShowCalendar] = useState(true);
    const currentDate = convertDateFormat(new Date(), ".");

    const setValue = (value) => {
        setShowDate(value);
        props.setValue(value);
        setIsShowCalendar(false);
    };

    return (
        <DatePickerWrapper>
            <DatePickerBox onClick={() => setIsShowCalendar(!isShowCalendar)}>
                <DateValueBox>{showDate}</DateValueBox>
                <BsCalendarEvent />
            </DatePickerBox>
            <CalendarWrapper className={isShowCalendar ? "on" : ""}>
                {/* {isShowCalendar && ( */}
                <CalendarBox>
                    <Calendar currentDate={currentDate} setValue={setValue}></Calendar>
                </CalendarBox>
                {/* )} */}
            </CalendarWrapper>
        </DatePickerWrapper>
    );
};

export default DatePicker;
