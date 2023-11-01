import { ButtonHTMLAttributes } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './styles.module.css';

type ButtonProps =  ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: IconProp | any;
    action?: string;
    type_button: string;
    active?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
}

const StyledButton: React.FC<ButtonProps> = ({icon, action, type_button, active = false, type, ...rest}) => {
    return (
        <Button 
            className={`
                ${(type_button == "red") ? styles.red_button : styles.blue_button} 
                ${active ? 'active' : ''}
            `
            }
            type={type}
            // {...rest}
            >
            { icon && <FontAwesomeIcon icon={icon} className={action && "mr-2"} /> } {action}
        </Button>
    )
}

export default StyledButton;