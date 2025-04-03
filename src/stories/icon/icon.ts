import './icon.scss';

export interface IconProps {
  name?: string;
  size?: 'small' | 'medium' | 'large';
  active ?: boolean;
  label: string;
  onClick?: () => void;
}

export const createIcon = ({
  name = '',
  size = 'medium',
}: IconProps) => {
  const icon = document.createElement('i');

  const iconName = name ?   `--${name}`: '';
  icon.className = ['c-icon', `--${size}`, iconName].join(' ');

  return icon;
};
