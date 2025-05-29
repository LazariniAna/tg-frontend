import React, { useRef, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import { useRouter } from "next/navigation";

export default function CalendarComponent({ data }: { data: any }) {
    const calendarRef = useRef(null);
    const router = useRouter()

    // const handleDateClick = (arg) => {
    //     alert(arg.dateStr);
    // };

    // const handleSelectedDates = (info) => {
    //     alert("selected " + info.startStr + " to " + info.endStr);
    //     const title = prompt("What's the name of the title");
    //     if (title != null) {
    //         const newEvent = {
    //             title,
    //             start: info.startStr,
    //             end: info.endStr,
    //         };
    //         setEvents((prevEvents) => [...prevEvents, newEvent]);
    //     }
    // };

    const handleEventClick = (event: any) => {
        if (event.event._def.extendedProps.valueRedirect)
            router.push(`/agendamentos/agendar/${event.event._def.extendedProps.valueRedirect}`)
    };

    return (
        <div className="w-full mb-10">
            <FullCalendar
                schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
                ref={calendarRef}
                initialView="dayGridMonth"
                // dateClick={handleDateClick}
                displayEventTime={true}
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                }}
                selectable={true}
                plugins={[
                    dayGridPlugin,
                    interactionPlugin,
                    timeGridPlugin,
                    resourceTimeGridPlugin,
                ]}
                events={data}
                eventClick={handleEventClick}
                // select={handleSelectedDates}
                dayMaxEvents={10}
                locale={ptBrLocale}
            />
        </div>
    );
};
