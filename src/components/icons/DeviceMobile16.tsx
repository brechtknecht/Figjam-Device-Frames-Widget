import { h } from 'preact'

export default function DeviceMobile16(props: {background: Boolean}) {
    if(props.background) {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="4.5" width="11" height="6.87645" rx="1" fill="#ACACAC" stroke="#2C3A42" stroke-width="0.85"/>
            </svg>
        )
    } else {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="4.5" width="11" height="6.87645" rx="1" stroke="#2C3A42" stroke-width="0.85"/>
            </svg>
        )
    }
}