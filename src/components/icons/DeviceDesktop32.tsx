import { h } from 'preact'

export default function DeviceDesktop32 (props: {background: Boolean}) {
    if(props.background) {
        return (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7" y="10" width="17.5963" height="11" rx="1" fill="#ACACAC" stroke="#2C3A42" stroke-width="0.85"/>
            </svg>
        )
    } else {
        return (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7" y="10" width="17.5963" height="11" rx="1" stroke="#2C3A42" stroke-width="0.85"/>
                <path d="M16.9312 17.9206L16.0906 15.7259L15.9809 15.9404L17.1437 16.0137C17.1951 16.0171 17.2363 16.0023 17.2674 15.9692C17.2986 15.936 17.3149 15.8951 17.3165 15.8462C17.318 15.7974 17.3001 15.7512 17.2628 15.7076L14.9512 13.0603C14.917 13.0202 14.8788 13.0001 14.8368 13.0001C14.7963 12.9984 14.7613 13.0132 14.7317 13.0446C14.7037 13.076 14.6889 13.1187 14.6874 13.1728L14.65 16.856C14.6485 16.917 14.664 16.9641 14.6967 16.9972C14.7294 17.0304 14.7683 17.0469 14.8135 17.0469C14.8586 17.0452 14.8983 17.0216 14.9325 16.9763L15.682 16.045L15.4649 15.9823L16.2774 18.2267C16.293 18.2703 16.3187 18.3008 16.3545 18.3183C16.3903 18.3374 16.4261 18.3383 16.4619 18.3209L16.8658 18.1351C16.9032 18.1195 16.9273 18.0907 16.9382 18.0488C16.9507 18.007 16.9483 17.9642 16.9312 17.9206Z" fill="#2C3A42"/>
            </svg>
        )
    }
}