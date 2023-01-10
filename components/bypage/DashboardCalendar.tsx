import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  add,
  sub,
  differenceInCalendarDays,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { DUMMY_MEETINGS } from "projConstants";
import { useState } from "react";
import { classNames } from "utils/classes";

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

const DashboardCalendar = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const d1 = startOfMonth(firstDayCurrentMonth);
  const d2 = endOfMonth(firstDayCurrentMonth);
  const d3 = startOfWeek(d1);
  const d4 = endOfWeek(d2);

  const days = eachDayOfInterval({
    start: sub(startOfMonth(firstDayCurrentMonth), { days: differenceInCalendarDays(d1, d3) }),
    end: add(endOfMonth(firstDayCurrentMonth), { days: differenceInCalendarDays(d4, d2) }),
  });

  const previousMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  return (
    <div className='w-full mx-auto px-10 py-4'>
      <div className='grid grid-cols-1 divide-x divide-gray-800'>
        <div
          className='bg-white text-[#0d1626] rounded-[1.5rem] 
            px-4 pb-2 pt-4 shadow-lg dark:shadow-white/50'
        >
          <div className='flex items-center'>
            <h2
              onClick={() => {
                setSelectedDay(today);
                setCurrentMonth(format(new Date(), "MMM-yyyy"));
              }}
              className='flex-auto font-bold ml-3 text-[1.3rem] cursor-pointer'
            >
              <div className='tooltip' data-tip='Jump to Today'>
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </div>
            </h2>
            <button
              type='button'
              onClick={previousMonth}
              className='-my-1.5 font-bold flex flex-none 
              items-center justify-center p-1.5 
              text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>Previous month</span>
              <ChevronLeftIcon className='w-6 h-6' aria-hidden='true' />
            </button>
            <button
              onClick={nextMonth}
              type='button'
              className='-my-1.5 font-bold mr-1.5 flex flex-none 
              items-center justify-center p-1.5
            text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>Next month</span>
              <ChevronRightIcon className='w-6 h-6' aria-hidden='true' />
            </button>
          </div>

          <div
            className='grid grid-cols-7 mt-7 leading-3 
            text-center text-gray-400/70 font-bold text-[0.8rem]'
          >
            <div>SUN</div>
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
          </div>

          <div className='grid grid-cols-7 mt-2 text-md'>
            {days.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={classNames(dayIdx === 0 && colStartClasses[getDay(day)])}
              >
                <button
                  type='button'
                  onClick={() => setSelectedDay(day)}
                  className={classNames(
                    isEqual(day, selectedDay) && "text-white",
                    !isEqual(day, selectedDay) && isToday(day) && "bg-violet-500/30",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      "text-gray-900",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      "text-gray-400",
                    isEqual(day, selectedDay) && isToday(day) && "bg-violet-700",
                    isEqual(day, selectedDay) && !isToday(day) && "bg-violet-500",
                    !isEqual(day, selectedDay) && "hover:bg-gray-200",
                    (isEqual(day, selectedDay) || isToday(day)) && "font-bold",
                    "mx-auto p-[1.1rem] flex h-5 w-5 items-center justify-center rounded-full"
                  )}
                >
                  <time dateTime={format(day, "yyyy-MM-dd")}>{format(day, "d")}</time>
                </button>

                <div className='w-1 h-1 mx-auto mt-1'>
                  {DUMMY_MEETINGS.some((meeting) =>
                    isSameDay(parseISO(meeting.startDatetime), day)
                  ) && <div className='w-1 h-1 rounded-full bg-green-500'></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCalendar;
