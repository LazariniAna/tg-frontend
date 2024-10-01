import { OptionsRadio } from '@/utils/types';
import { useEffect, useState } from 'react';

interface RadioButtonGroupProps {
  options: OptionsRadio[];
  answer: any;
  selectedOptionDt:any;
  setSelectedOptionDt:any;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ options, answer, selectedOptionDt, setSelectedOptionDt  }) => {
  const [selectedOption, setSelectedOption] = useState<OptionsRadio | null>(selectedOptionDt);

  const handleSelect = (option: OptionsRadio) => {
    setSelectedOption(option);
    setSelectedOptionDt(option);
    selectedOptionDt = option;
  };

  useEffect(() => {
    const optionSelected = options?.find((item: OptionsRadio | null) => item?.id == answer?.option_id)
    if (optionSelected){
      setSelectedOption(optionSelected);
      setSelectedOptionDt(optionSelected);
      selectedOptionDt = optionSelected;
    }
  }, [options])

  useEffect(() => {
    setSelectedOption(selectedOptionDt)
  }, [selectedOptionDt])

  return (
    <div>
      {options?.map((option: OptionsRadio, index: number) => (
        <div key={index} className="flex pb-2">
          <input
            type="radio"
            id={option.id.toString()}
            name="radioGroup"
            className="form-radio h-5 w-5 text-indigo-600"
            checked={selectedOption === option}
            onChange={() => handleSelect(option)}
          />
          <label htmlFor={option.label} className="ml-2">{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
