import  { useState, useEffect, useRef } from 'react';
import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';

export default function RangePicker(props: RangePickerProps) {
    const [ open, setOpen ] = useState(props.open || false);
    const { RangePicker } = DatePicker;
    useEffect(() => {
        setOpen(props.open || false);
    }, [ props.open ]);
    /**
     * 只改动一个日期时自动失焦
     */
    const shouldBlur = useRef(false);
    const ref = useRef<any>();
    useEffect(() => {
        if (shouldBlur.current) {
            const refCurrent = ref.current;
            const timer = setTimeout(() => {
                refCurrent.blur();
                shouldBlur.current = false;
            });
            return () => {
                clearTimeout(timer);
            };
        }
    }, [ open ]);

    return (
        <RangePicker
            {...props}
            open={open}
            onOpenChange={setOpen}
            ref={ref}
        />
    );
}
