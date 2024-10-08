import React, { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker, StaticDateTimePicker } from '@mui/x-date-pickers';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import "./style.css"

interface DateTimeInputProps {
    className?: string;
    value: string;
    error?: string;
    onChange: (newValue: any) => void;
}

dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('pt-br');

const DateTimeInput: React.FC<DateTimeInputProps> = ({ value, onChange, className, error }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; // Atrasando a renderização

    const parsedValue = value ? dayjs(value, 'DD/MM/YYYY HH:mm') : dayjs();

    return (
        <div className={`flex flex-col md:w-1/3 w-full ${className}`}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'DateTimePicker',
                        'MobileDateTimePicker',
                        'DesktopDateTimePicker',
                        'StaticDateTimePicker',
                    ]}
                >
                    <DemoItem label={<label className="font-bold text-base">Data e hora</label>}>
                        <MobileDateTimePicker
                            value={parsedValue}
                            onChange={onChange}
                            className={`-pt-4 border ${error ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
                        />
                    </DemoItem>
                    <DemoItem>
                        <StaticDateTimePicker 
                            value={parsedValue}
                            onChange={onChange} />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </div>
    );
};

export default DateTimeInput;
