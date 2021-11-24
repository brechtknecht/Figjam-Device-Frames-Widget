/** @jsx figma.widget.h */

import { h } from 'preact'

const { widget } = figma
const { AutoLayout, SVG } = widget

const deviceWidth = 179
const deviceHeight = 361

const borderlessWidth = 159
const borderlessHeight = 281

export default function DeviceiPhone8 (props: {scale : number, border: boolean}) {
    return (
        <AutoLayout 
            width = {
                (props.border ? deviceWidth : borderlessWidth) * props.scale
            } 
            height = {
                (props.border ? deviceHeight : borderlessHeight) * props.scale
            } stroke="#eaeaea" strokeWidth={0}
        >
            <SVG src={props.border ? SVGiPhone8 : SVGiPhone8Borderless} width="fill-parent" height="fill-parent" fill="#FFF"/>
        </AutoLayout>
    )
}


const SVGiPhone8 = `<svg width="179" height="361" viewBox="0 0 179 361" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.6632 1C19.9489 1.00562 16.2564 1.92316 12.9808 3.67548C9.90924 5.31853 7.23702 7.66861 5.21238 10.504C3.17809 13.3522 1.8203 16.6752 1.27718 20.1325C1.05142 21.5674 1 23.008 1 24.4566C1 25.6859 1 26.9144 1 28.1436C1 30.2945 1 32.4445 1 34.5953C1 37.5665 1 40.5384 1 43.5096C1 47.2343 1 50.9591 1 54.6847C1 59.0651 1 63.4455 1 67.8259C1 72.755 1 77.6842 1 82.6125C1 88.0165 1 93.4205 1 98.8245C1 104.637 1 110.448 1 116.26C1 122.373 1 128.486 1 134.599C1 140.901 1 147.204 1 153.506C1 159.955 1 166.402 1 172.851C1 179.311 1 185.772 1 192.232C1 198.661 1 205.091 1 211.52C1 217.785 1 224.05 1 230.316C1 236.373 1 242.429 1 248.486C1 254.224 1 259.96 1 265.698C1 271.009 1 276.319 1 281.63C1 286.448 1 291.265 1 296.083C1 300.332 1 304.582 1 308.832C1 312.407 1 315.983 1 319.559C1 322.363 1 325.167 1 327.971C1 329.934 1 331.899 1 333.862C1 334.886 1 335.909 1 336.933C1 339.101 1.23539 341.246 1.81226 343.341C2.71612 346.623 4.36476 349.685 6.60553 352.249C8.86478 354.835 11.7186 356.892 14.8849 358.222C17.721 359.413 20.7588 359.987 23.8311 359.992C25.4886 359.994 27.1453 359.992 28.8028 359.992C32.3933 359.992 35.9838 359.992 39.5735 359.992C44.6191 359.992 49.6646 359.992 54.7102 359.992C60.6982 359.992 66.6861 359.992 72.6741 359.992C79.0791 359.992 85.4832 359.992 91.8882 359.992C98.2529 359.992 104.619 359.992 110.983 359.992C116.783 359.992 122.584 359.992 128.384 359.992C133.103 359.992 137.82 359.992 142.539 359.992C145.699 359.992 148.86 359.992 152.019 359.992C153.282 359.992 154.545 360.013 155.808 359.987C159.5 359.91 163.153 358.919 166.378 357.12C169.398 355.436 172.017 353.057 173.982 350.213C176.003 347.289 177.318 343.893 177.795 340.371C177.972 339.064 178 337.756 178 336.441C178 335.178 178 333.914 178 332.651C178 330.476 178 328.301 178 326.125C178 323.115 178 320.103 178 317.092C178 313.34 178 309.589 178 305.836C178 301.449 178 297.061 178 292.674C178 287.727 178 282.779 178 277.832C178 272.394 178 266.954 178 261.516C178 255.691 178 249.866 178 244.04C178 237.94 178 231.838 178 225.738C178 219.407 178 213.076 178 206.745C178 200.294 178 193.842 178 187.392C178 180.932 178 174.471 178 168.012C178 161.608 178 155.205 178 148.802C178 142.521 178 136.241 178 129.96C178 123.914 178 117.868 178 111.822C178 106.118 178 100.414 178 94.7108C178 89.4161 178 84.1206 178 78.8259C178 74.0116 178 69.1974 178 64.3831C178 60.1578 178 55.9324 178 51.7071C178 48.1703 178 44.6336 178 41.0976C178 38.3137 178 35.5289 178 32.745C178 30.8159 178 28.8868 178 26.957C178 25.9735 178 24.9893 178 24.0059C178 21.7321 177.727 19.4833 177.086 17.2971C176.131 14.0335 174.435 10.9965 172.154 8.47366C169.835 5.90745 166.933 3.89 163.72 2.60931C160.976 1.51582 158.059 1.00482 155.109 1.00161C153.366 0.999999 151.623 1.00161 149.879 1.00161C146.208 1.00161 142.537 1.00161 138.866 1.00161C133.791 1.00161 128.715 1.00161 123.64 1.00161C117.648 1.00161 111.656 1.00161 105.663 1.00161C99.2291 1.00161 92.7953 1.00161 86.3614 1.00161C80.0087 1.00161 73.6559 1.00161 67.304 1.00161C61.5546 1.00161 55.8045 1.00161 50.0551 1.00161C45.3832 1.00161 40.7112 1.00161 36.0393 1.00161C32.9356 1.00161 29.832 1.00161 26.7283 1.00161C25.7063 0.999999 24.6852 1 23.6632 1Z" stroke="#2C3A42" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M101 337.999C100.994 335.534 100.229 333.104 98.8097 331.087C97.3941 329.076 95.3594 327.529 93.0435 326.7C90.7277 325.871 88.1744 325.775 85.8034 326.431C83.4309 327.088 81.2876 328.48 79.7253 330.383C78.1687 332.279 77.2206 334.642 77.0343 337.088C76.8463 339.55 77.4362 342.047 78.7043 344.166C79.9676 346.276 81.8807 347.971 84.1293 348.969C86.3715 349.964 88.8996 350.25 91.307 349.778C93.7226 349.304 95.9647 348.078 97.6672 346.299C99.3631 344.528 100.487 342.243 100.86 339.819C100.953 339.216 100.998 338.607 101 337.999Z" stroke="#2C3A42" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M74.1043 20.0138C72.6551 20.0412 72.6284 23.6364 74.0469 23.8835C75 23.9989 78.5 23.9989 78.5 23.9989C78.5 23.9989 92.1137 23.9989 99 23.9989C100.843 23.9989 102.944 24.0193 104.785 23.8862C105.95 23.8011 106.543 21.1202 105.337 20.1881C104.999 19.9273 104.582 20.0138 104.221 20.0138C103.292 20.0138 102.364 20.0138 101.435 20.0138C98.18 20.0138 94.9247 20.0138 91.6694 20.0138C85.9188 20.0138 80.1682 20.0138 74.4169 20.0138C74.3127 20.0138 74.2085 20.0138 74.1043 20.0138Z" stroke="#2C3A42" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M92 11.9911C91.9839 10.1713 89.6562 9.28941 88.4663 10.6896C87.284 12.0813 88.5146 14.2666 90.3161 13.9732C91.2804 13.8166 91.9915 12.9641 92 11.9911Z" stroke="#2C3A42" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M62 21.9834C61.9989 19.1337 58.2545 17.9029 56.5705 20.1934C55.0102 22.316 56.8723 25.3839 59.4745 24.9604C60.909 24.7273 61.9989 23.4388 62 21.9834Z" stroke="#2C3A42" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M168 41H11V320H168V41Z" stroke="#2C3A42" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const SVGiPhone8Borderless = `<svg width="159" height="281" viewBox="0 0 159 281" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M158 1H1V280H158V1Z" stroke="#2C3A42" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;



