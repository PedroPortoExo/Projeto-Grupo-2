import styles from './container.module.css';

export default function Container(props) {
    return (
        <div className={`${styles.container} ${props.customClass ? styles[props.customClass] : ''}`}>
            {props.children}
        </div>
    );
}
