import React, { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/pt-br';
import './style.css';

interface DateTimeInputProps {
    className?: string;
    value: string | null;
    error?: string;
    onChange: (newValue: dayjs.Dayjs | null) => void;
    disabledDates: dayjs.Dayjs[];
}

dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('pt-br');

const DateTimeInput: React.FC<DateTimeInputProps> = ({ value, onChange, className, error, disabledDates }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    const parsedValue = value ? dayjs(value, 'DD/MM/YYYY HH:mm') : null;

    const shouldDisableDate = (date: dayjs.Dayjs) => {
        return date.day() === 0 || date.day() === 6;
    };

    const shouldDisableTime = (time: dayjs.Dayjs) => {
        const hour = time.hour();
        return hour < 7 || hour > 17 || disabledDates.some(disabledDate => disabledDate.isSame(time, 'minute'));
    };

    return (
        <div className={`flex flex-col md:w-5/12 w-full ${className}`}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                <MobileDateTimePicker
                    value={parsedValue}
                    onChange={onChange}
                    shouldDisableDate={shouldDisableDate}
                    shouldDisableTime={shouldDisableTime}
                    minutesStep={30}
                    views={['day', 'hours', 'minutes']}
                    format="dddd, DD/MM/YYYY HH:mm" // Exibe o dia da semana no formato
                    className={`-pt-4 border ${error ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
                    slotProps={{
                        textField: {
                            placeholder: "Selecione a data e hora",
                        },
                    }}
                />
            </LocalizationProvider>
        </div>
    );
};

export default DateTimeInput;
