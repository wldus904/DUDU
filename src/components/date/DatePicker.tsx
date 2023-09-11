import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BsCalendarEvent } from "react-icons/bs";
import { convertDateFormat } from "@/service/convert.ts";
import Calendar from "./Calendar";
import { clickOutSide } from "@/service/event.ts";

const DatePickerWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const DatePickerBox = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 14px;
    cursor: pointer;
`;

const DateValueBox = styled.span`
    margin: 10px;
    font-weight: 500;
`;

const Placeholder = styled.span`
    margin: 10px;
    color: #e6e6e6;
`;

const CalendarBox = styled.div`
    @keyframes fade-in-dropdown-animation {
        0% {
            transform: scale(0);
        }

        100% {
            transform: scale(1);
        }
    }

    @keyframes fade-out-dropdown-animation {
        0% {
            transform: scale(1);
        }

        100% {
            transform: scale(0);
        }
    }
    position: absolute;
    width: 300px;
    height: 300px;
    top: 25px;
    left: 0;
    animation: fade-out-dropdown-animation 0.4s ease;
    animation-fill-mode: forwards;
    transform-origin: ${(props) => props.aligns};

    &.on {
        animation: fade-in-dropdown-animation 0.4s ease;
    }
`;

const DatePicker = (props) => {
    const calendarRef = useRef(null);
    const [showDate, setShowDate] = useState(null);
    const [isShowCalendar, setIsShowCalendar] = useState(true);
    const currentDate = convertDateFormat(new Date(), ".");

    useEffect(() => {
        clickOutSide(calendarRef, () => {
            setIsShowCalendar(!isShowCalendar);
        });
    }, [calendarRef]);

    const setValue = (value) => {
        setShowDate(value);
        props.setValue(value);
        setIsShowCalendar(false);
    };

    return (
        <DatePickerWrapper ref={calendarRef}>
            <DatePickerBox onClick={() => setIsShowCalendar(!isShowCalendar)}>
                <BsCalendarEvent />
                {showDate ? (
                    <DateValueBox>{showDate}</DateValueBox>
                ) : (
                    <Placeholder>{props.placeholder}</Placeholder>
                )}
            </DatePickerBox>
            <CalendarBox aligns={props.aligns} className={isShowCalendar ? "on" : ""}>
                <Calendar
                    currentDate={currentDate}
                    setValue={setValue}
                    className="calendar"
                ></Calendar>
            </CalendarBox>
        </DatePickerWrapper>
    );
};

export default DatePicker;
