import { OptionsRadio } from '@/utils/types';
import { useEffect, useState } from 'react';

interface CheckboxInputProps {
  options: OptionsRadio[];
  answers?: any;
  checkedItemsDt?: any;
  setCheckedItemsDt?: any;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ options, answers, checkedItemsDt, setCheckedItemsDt }) => {
  const [checkedItems, setCheckedItems] = useState<string[]>(checkedItemsDt || []);

  const handleChange = (option: OptionsRadio) => {
    const index = checkedItems.indexOf(option.id.toString());
    const updatedCheckedItems = [...checkedItems];

    if (index > -1) {
      updatedCheckedItems.splice(index, 1);
    } else {
      updatedCheckedItems.push(option.id.toString());
    }

    setCheckedItems(updatedCheckedItems);
    setCheckedItemsDt(updatedCheckedItems);
  };

  useEffect(() => {
    const answerOptionIds = answers?.map((answer: any) => answer.option_id);
    const filteredOptions = options?.filter(option => answerOptionIds?.includes(option.id));
    const initialCheckedItems = filteredOptions?.map(option => option.id.toString()) || [];
    
    setCheckedItems(initialCheckedItems);
    setCheckedItemsDt(initialCheckedItems);
  }, [options]);

  useEffect(() => {
    setCheckedItems(checkedItemsDt)
  }, [checkedItemsDt])
  return (
    <div>
      {options?.map((option, index) => (
        <div key={index} className="flex items-center justify-start p-2">
          <input
            type="checkbox"
            className="max-h-5 max-w-5 min-h-5 min-w-5"
            checked={checkedItems.includes(option.id.toString())}
            onChange={() => handleChange(option)}
          />
          <label className="ml-2">{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxInput;
