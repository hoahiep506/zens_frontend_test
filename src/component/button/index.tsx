import { memo, useMemo } from 'react';

interface IButtonProps {
  label?: string;
  color?: string;
  onClick?: () => void;
}

const Button = (props: IButtonProps) => {
  const finalClass = useMemo(() => {
    const bgColors = props?.color || 'bg-green-base';
    return `w-52 h-10 text-white flex justify-center items-center ${bgColors}`;
  }, [props.color]);

  return (
    <button className={finalClass} onClick={props.onClick}>
      <span>{props?.label}</span>
    </button>
  );
};

export default memo(Button);
