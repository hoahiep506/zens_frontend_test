import { memo, useMemo } from 'react';

interface IButtonProps {
  label?: string;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = (props: IButtonProps) => {
  const finalClass = useMemo(() => {
    const bgColors = props?.color || 'bg-green-base';
    return `btn ${bgColors}`;
  }, [props.color]);

  return (
    <button
      className={finalClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span>{props?.label}</span>
    </button>
  );
};

export default memo(Button);
