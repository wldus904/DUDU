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
    width: 100%;
    height: 100%;
    text-align: right;
    cursor: pointer;
`;

const CalendarWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const CalendarBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: -200px;
`;

const DatePicker = (props) => {
    const [showDate, setShowDate] = useState(null);
    const [isShowCalendar, setIsShowCalendar] = useState(true);
    const currentDate = convertDateFormat(new Date(), ".");

    return (
        <DatePickerWrapper>
            <DatePickerBox onClick={() => setIsShowCalendar(!isShowCalendar)}>
                {showDate}
                <BsCalendarEvent />
            </DatePickerBox>
            {isShowCalendar && (
                <CalendarWrapper>
                    <CalendarBox>
                        <Calendar currentDate={currentDate}></Calendar>
                    </CalendarBox>
                </CalendarWrapper>
            )}
        </DatePickerWrapper>
    );
};

export default DatePicker;
