import { useState } from "react";
import styled from "styled-components";
import { BsCalendarEvent } from "react-icons/bs";
import { convertDateFormat } from "@/service/convert.jts";

const DatePickerWrapper = styled.div``;

const DatePickerBox = styled.div`
    width: 100%;
    text-align: right;
    cursor: pointer;
`;

const CalendarBox = styled.div`
    max-width: 300px;
    max-height: 400px;
    background-color: #fff;
    box-shadow: 0 0 4px #d0d5dc;
`;

const DatePicker = (props) => {
    const [showDate, setShowDate] = useState(null);
    const [isShowCalendar, setIsShowCalendar] = useState(false);
    const currentDate = convertDateFormat(new Date(), ".");

    console.log("isShowCalendar ::: ", isShowCalendar);

    return (
        <DatePickerWrapper>
            <DatePickerBox onClick={() => setIsShowCalendar(!isShowCalendar)}>
                {showDate}
                <BsCalendarEvent />
            </DatePickerBox>
            {isShowCalendar && <CalendarBox>달력</CalendarBox>}
        </DatePickerWrapper>
    );
};

export default DatePicker;
