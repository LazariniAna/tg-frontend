import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
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
    return (
        <div className={`flex flex-col w-1/3 ${className}`}>
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
                            value={dayjs(value, 'DD/MM/YYYY HH:mm')}
                            onChange={onChange}
                            className={`-pt-4 border ${error ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
                        />
                    </DemoItem>
                    <DemoItem>
                        <StaticDateTimePicker 
                         value={dayjs(value, 'DD/MM/YYYY HH:mm')}
                         onChange={onChange}/>
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </div>

    );
};

export default DateTimeInput;
