import {FC} from 'react';
import {cssIf} from "@/shared/utils";

export const ApIcon: FC<{ className?: string }> = ({className}) => {
    return (
        <svg className={cssIf(className)}
             width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_675_99865)">
                <g clipPath="url(#clip0_675_99865)">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                          fill="url(#paint0_linear_675_99865)"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                          fill="#924FFF"/>
                </g>
            </g>
            <defs>
                <filter id="filter0_i_675_99865" x="0" y="0" width="24" height="28" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_675_99865"/>
                </filter>
                <linearGradient id="paint0_linear_675_99865" x1="22" y1="20" x2="3.5" y2="2.5"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9D60FF"/>
                    <stop offset="1" stopColor="#FFD747"/>
                </linearGradient>
                <clipPath id="clip0_675_99865">
                    <rect width="24" height="24" rx="12" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
};
