import React, { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDateTimePicker, MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/pt-br';
import './style.css';
import localeData from 'dayjs/plugin/localeData';
import { ptBR } from '@mui/x-date-pickers/locales';
interface DateTimeInputProps {
    title?: string;
    className?: string;
    value: string | null;
    error?: string;
    onChange: (newValue: dayjs.Dayjs | null) => void;
    disabledDates: dayjs.Dayjs[];
}

dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localeData);

// Extensão segura do locale 'pt-br'
const customLocale = {
    // name: 'pt-br',
    ...dayjs.Ls['pt-br'],
    weekdaysMin: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
};

// Registra novamente o locale com o nome 'pt-br'
dayjs.locale(customLocale, undefined, true);

// Define como padrão
dayjs.locale('pt-br');
const DateTimeInput: React.FC<DateTimeInputProps> = ({ value, onChange, className, error, disabledDates, title }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    const parsedValue = value ? dayjs(value, 'DD/MM/YYYY HH:mm') : null;

    const shouldDisableDate = (date: dayjs.Dayjs) => {
        const today = dayjs().startOf('day');
        const isWeekend = date.day() === 0 || date.day() === 6;
        const isTodayOrBefore = date.isSame(today, 'day') || date.isBefore(today, 'day');

        return isWeekend || isTodayOrBefore;
    };


    const shouldDisableTime = (time: dayjs.Dayjs) => {
        const hour = time.hour();
        return hour < 7 || hour > 17 || disabledDates?.some(disabledDate => disabledDate?.isSame(time, 'minute'));
    };

    return (
        <div className={`flex flex-col md:w-5/12 w-full ${className}`}>
            <label className="font-bold">{title}</label>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br" localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}>
                <MobileDateTimePicker
                    value={parsedValue}
                    onChange={onChange}
                    shouldDisableDate={shouldDisableDate}
                    shouldDisableTime={shouldDisableTime}
                    minutesStep={30}
                    views={['day', 'hours', 'minutes']}
                    format="dddd, DD/MM/YYYY HH:mm"
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
