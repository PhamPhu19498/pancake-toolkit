import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import { useTheme } from "styled-components";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const theme = useTheme();
  const textColor = theme.isDark ? "#fff" :  "#191A3A";
  return (
    <Svg  width="233" height="43" viewBox="0 0 233 43" {...props}>
<path d="M30.2886 0H18.172L24.2686 10.6712L30.2886 0Z" fill="#890E00"/>
<path d="M24.2303 10.6709H12.1137L18.2102 21.3421L24.2303 10.6709Z" fill="#B20E02"/>
<path d="M18.172 21.3423H6.05832L12.1519 32.0135L18.172 21.3423Z" fill="#EC261B"/>
<path d="M12.1136 32.0137H0L6.09362 42.6849L12.1136 32.0137Z" fill="#F46809"/>
<path d="M24.2303 32.0137H12.1137L18.2102 42.6849L24.2303 32.0137Z" fill="#F79D0B"/>
<path d="M12.1137 10.6712H24.2303L18.1337 0L12.1137 10.6712Z" fill="#9A0F08"/>
<path d="M6.05832 21.3421H18.172L12.0783 10.6709L6.05832 21.3421Z" fill="#D41C12"/>
<path d="M0 32.0135H12.1136L6.02002 21.3423L0 32.0135Z" fill="#AE4501"/>
<path d="M6.05832 42.6849H18.172L12.0783 32.0137L6.05832 42.6849Z" fill="#D38306"/>
<path d="M42.2874 10.6709H30.1737L36.2703 21.3421L42.2874 10.6709Z" fill="#01DAF9"/>
<path d="M48.3456 21.3423H36.2291L42.3256 32.0135L48.3456 21.3423Z" fill="#01B2D3"/>
<path d="M42.3463 32.0137H30.2297L36.3263 42.6849L42.3463 32.0137Z" fill="#37EAFF"/>
<path d="M54.4629 32.0137H42.3463L48.4429 42.6849L54.4629 32.0137Z" fill="#008DA9"/>
<path d="M30.1737 10.6712H42.2874L36.1938 0L30.1737 10.6712Z" fill="#3DE8F9"/>
<path d="M36.288 21.3421H48.4046L42.308 10.6709L36.288 21.3421Z" fill="#22C8D8"/>
<path d="M42.3463 32.0135H54.4629L48.3663 21.3423L42.3463 32.0135Z" fill="#019ABC"/>
<path d="M30.1737 32.0135H42.2874L36.1938 21.3423L30.1737 32.0135Z" fill="#00E5FD"/>
<path d="M24.1743 42.6849H36.288L30.1914 32.0137L24.1743 42.6849Z" fill="#7AF3FC"/>
<path d="M60.789 10.562H63.2176C63.8392 10.6375 64.4061 10.9548 64.7955 11.4451C65.1121 11.8579 65.282 12.3645 65.2783 12.8846V22.8935C65.2655 23.7927 65.3029 24.692 65.3901 25.587C65.4298 26.0434 65.576 26.484 65.817 26.8735C66.2412 27.5294 66.8785 28.019 67.6215 28.26C68.4348 28.4741 69.2741 28.5732 70.1149 28.5544C71.1746 28.5544 72.2374 28.5544 73.303 28.5544C73.8431 28.5918 74.3531 28.8168 74.7449 29.1903C75.1368 29.5639 75.3858 30.0626 75.449 30.6003C75.4843 31.1125 75.449 31.6247 75.4637 32.1369H69.0375C68.1619 32.1367 67.2878 32.0668 66.4234 31.9279C65.1299 31.6989 63.9362 31.083 62.9998 30.1617C62.1995 29.4124 61.5985 28.4756 61.2512 27.4357C60.9602 26.3102 60.805 25.1539 60.789 23.9915V10.562Z" fill={theme.colors.text}/>
<path d="M79.9295 10.562H80.4947C80.9676 10.6152 81.4136 10.809 81.7752 11.1184C82.0237 11.3309 82.2241 11.5938 82.3632 11.8897C82.5022 12.1856 82.5768 12.5077 82.5818 12.8346V29.8791C82.5752 30.237 82.4863 30.5887 82.3219 30.9067C82.1575 31.2247 81.9221 31.5006 81.6339 31.713C81.3014 31.9531 80.9135 32.105 80.5065 32.1546H79.9795C79.5098 32.103 79.0656 31.9147 78.7019 31.613C78.4434 31.3919 78.2359 31.1174 78.0936 30.8084C77.9513 30.4994 77.8776 30.1633 77.8777 29.8231V12.9494C77.8668 12.3608 78.0769 11.7894 78.4664 11.348C78.8469 10.9179 79.3693 10.639 79.9383 10.562" fill={theme.colors.text}/>
<path d="M83.8741 10.562H87.651C88.0668 10.6081 88.4625 10.7656 88.7962 11.018C89.1299 11.2703 89.3892 11.6081 89.5468 11.9956C91.4956 16.8764 93.4473 21.7582 95.402 26.6409C97.4057 21.7543 99.4084 16.8646 101.41 11.9721C101.569 11.5877 101.828 11.2535 102.162 11.0052C102.495 10.7569 102.889 10.6037 103.303 10.562H106.786C104.038 17.2071 101.291 23.8551 98.543 30.5061C98.416 30.8645 98.2155 31.1924 97.9542 31.4687C97.5735 31.8625 97.0656 32.1086 96.5206 32.1635H94.5041C94.0906 32.1305 93.6938 31.9857 93.3562 31.7446C93.0186 31.5035 92.753 31.1751 92.5877 30.7946C89.6891 24.0514 86.7846 17.3072 83.8741 10.562Z" fill={theme.colors.text}/>
<path d="M115.997 10.562H124.119V12.0339C124.109 12.6173 123.884 13.1764 123.486 13.6029C123.275 13.8254 123.023 14.0038 122.743 14.1276C122.463 14.2515 122.161 14.3183 121.855 14.3242H116.945C115.913 14.2654 114.883 14.4679 113.951 14.9129C113.231 15.2992 112.652 15.9029 112.296 16.638C111.904 17.482 111.689 18.3979 111.666 19.3286H118.664C118.963 19.3265 119.256 19.411 119.509 19.5719C119.761 19.7327 119.961 19.9631 120.086 20.2353C120.286 20.6562 120.209 21.1361 120.224 21.5894C120.212 21.9831 120.051 22.3577 119.773 22.637C119.496 22.9164 119.122 23.0797 118.728 23.0937H111.637C111.637 24.2565 111.752 25.4723 112.343 26.4996C112.804 27.2908 113.557 27.8699 114.439 28.1128C115.711 28.4955 117.056 28.3836 118.366 28.4072H121.799C122.256 28.4029 122.705 28.5362 123.085 28.7899C123.398 29.0011 123.655 29.2844 123.836 29.6158C124.016 29.9473 124.114 30.3173 124.121 30.6945V32.1664H115.879C114.75 32.1706 113.625 32.0241 112.535 31.7307C111.604 31.443 110.736 30.9816 109.977 30.3707C109.143 29.7228 108.449 28.9127 107.937 27.9892C106.95 26.2229 106.615 24.1623 106.571 22.1634C106.519 20.4365 106.701 18.7105 107.112 17.0324C107.539 15.4134 108.328 13.8384 109.606 12.7227C110.563 11.904 111.696 11.3167 112.917 11.0065C113.929 10.7495 114.965 10.6015 116.008 10.565" fill={theme.colors.text}/>
<path d="M150.192 10.562H159.697C160.943 10.5735 162.179 10.7964 163.35 11.2214C164.234 11.5483 165.004 12.1226 165.57 12.8758C166.276 13.8561 166.559 15.0778 166.638 16.2671C166.758 17.5498 166.59 18.8432 166.147 20.0528C165.795 20.9403 165.195 21.7078 164.419 22.2635C163.797 22.6911 163.097 22.9913 162.358 23.1467C164.124 26.1532 165.903 29.1598 167.695 32.1664H163.756C163.448 32.1387 163.148 32.0481 162.876 31.9003C162.603 31.7525 162.364 31.5505 162.173 31.3068C161.956 30.9866 161.759 30.6534 161.584 30.3089C160.359 28.1011 159.133 25.8903 157.904 23.6765H152.605V29.0961C152.605 29.623 152.658 30.1705 152.452 30.671C152.298 31.0716 152.037 31.4224 151.698 31.6855C151.358 31.9485 150.954 32.1138 150.527 32.1635H148.104V12.8935C148.103 12.5409 148.182 12.1926 148.335 11.8749C148.488 11.5572 148.711 11.2784 148.988 11.0595C149.335 10.7854 149.752 10.6132 150.192 10.562ZM152.611 14.4154V19.8467H157.08C158.257 19.8467 159.456 19.8997 160.586 19.5523C161.044 19.4354 161.445 19.1587 161.716 18.7722C162.029 18.1973 162.163 17.5425 162.102 16.8911C162.105 16.2986 161.896 15.7245 161.513 15.2721C161.1 14.867 160.563 14.6112 159.988 14.5449C159.305 14.4569 158.617 14.4175 157.928 14.4272H152.6" fill={theme.colors.text}/>
<path d="M178.849 10.5621H180.866C181.18 10.5853 181.486 10.6737 181.764 10.8217C182.043 10.9697 182.287 11.174 182.482 11.4216C182.695 11.7208 182.863 12.0502 182.979 12.399C185.705 18.9872 188.431 25.5753 191.157 32.1635H187.739C187.431 32.1416 187.131 32.0572 186.857 31.9154C186.583 31.7737 186.34 31.5777 186.144 31.3393C185.889 30.9919 185.69 30.6064 185.555 30.1971C183.624 25.487 181.696 20.777 179.771 16.0669C177.822 20.9575 175.873 25.8403 173.924 30.7152C173.769 31.1086 173.509 31.4518 173.172 31.7073C172.835 31.9627 172.434 32.1206 172.014 32.1635H168.252C171.076 25.6166 173.897 19.0657 176.715 12.5109C176.863 12.0791 177.081 11.6744 177.36 11.3127C177.742 10.88 178.274 10.6077 178.849 10.5503" fill={theme.colors.text}/>
<path d="M195.861 10.562H204.225C205.224 10.5981 206.217 10.7351 207.189 10.9712C208.389 11.2585 209.51 11.8084 210.471 12.5814C211.805 13.6706 212.641 15.2573 213.091 16.9C213.379 17.9761 213.557 19.0789 213.621 20.1911C213.745 22.2105 213.668 24.2771 213.059 26.22C212.71 27.3743 212.125 28.4431 211.34 29.358C210.271 30.5798 208.855 31.4466 207.28 31.8426C206.304 32.0554 205.309 32.163 204.31 32.1635H195.879C195.3 32.0907 194.77 31.8061 194.389 31.3645C194.008 30.923 193.805 30.3559 193.818 29.7731C193.818 24.1446 193.818 18.5161 193.818 12.8876C193.818 12.5338 193.897 12.1844 194.05 11.8654C194.202 11.5464 194.425 11.2659 194.701 11.0448C195.039 10.7854 195.439 10.619 195.861 10.562ZM198.302 14.333C198.302 19.0195 198.302 23.706 198.302 28.3925C200.03 28.4131 201.758 28.3925 203.48 28.3925C204.525 28.3925 205.617 28.2983 206.562 27.8037C207.333 27.3687 207.914 26.6625 208.193 25.8225C208.512 24.8533 208.69 23.8429 208.72 22.8228C208.794 21.5562 208.772 20.2856 208.652 19.0224C208.589 18.0886 208.352 17.1748 207.951 16.3289C207.573 15.6024 206.946 15.0361 206.185 14.7333C205.155 14.3242 204.027 14.3006 202.947 14.3094C201.404 14.3094 199.862 14.2947 198.319 14.3094" fill={theme.colors.text}/>
<path d="M224.928 10.5621H233V12.2165C232.944 12.7201 232.732 13.1935 232.394 13.5706C232.19 13.7962 231.943 13.9786 231.667 14.1071C231.392 14.2355 231.093 14.3074 230.789 14.3183C229.023 14.3183 227.257 14.3183 225.508 14.3183C224.591 14.302 223.683 14.5038 222.859 14.9071C222.176 15.2641 221.615 15.8166 221.248 16.4938C220.802 17.3777 220.56 18.3505 220.539 19.3404C222.894 19.3404 225.249 19.3404 227.604 19.3404C227.994 19.3518 228.364 19.5097 228.643 19.7825C228.921 20.0553 229.086 20.4231 229.105 20.8123C229.105 21.2686 229.17 21.7514 228.982 22.1782C228.864 22.4489 228.672 22.6803 228.427 22.8451C228.183 23.01 227.896 23.1013 227.601 23.1085H220.518C220.518 24.1947 220.624 25.3222 221.107 26.3083C221.495 27.0887 222.165 27.692 222.982 27.9951C224.139 28.4396 225.396 28.4014 226.609 28.3984H229.983C230.495 28.3984 231.031 28.3454 231.516 28.5485C231.915 28.7087 232.262 28.9741 232.521 29.3163C232.78 29.6585 232.942 30.0647 232.988 30.4915V32.1606H224.737C223.321 32.1252 221.867 31.9987 220.557 31.4099C218.844 30.6382 217.451 29.2974 216.615 27.6154C215.714 25.7961 215.437 23.7355 215.437 21.7278C215.428 20.4201 215.547 19.1146 215.794 17.8303C216.069 16.2391 216.737 14.7417 217.736 13.4735C218.498 12.5799 219.462 11.8806 220.548 11.4334C221.942 10.8772 223.425 10.578 224.925 10.5503" fill={theme.colors.text}/>
<path d="M127.454 10.5977C133.624 10.5977 139.793 10.5977 145.961 10.5977C145.961 11.0981 145.961 11.5956 145.961 12.0931C145.95 12.5139 145.825 12.9237 145.599 13.2792C145.374 13.6347 145.057 13.9226 144.681 14.1125C144.315 14.2905 143.91 14.3725 143.503 14.351H139.02C139.02 19.5301 139.02 24.7092 139.02 29.8882C139.013 30.2189 138.935 30.5443 138.793 30.8427C138.65 31.1412 138.446 31.4058 138.193 31.6192C137.84 31.91 137.413 32.0966 136.959 32.1579H136.453C136.025 32.1105 135.618 31.9466 135.276 31.684C134.935 31.4214 134.672 31.07 134.516 30.6683C134.377 30.2384 134.325 29.7851 134.363 29.3348V14.3539C132.788 14.3539 131.216 14.3539 129.653 14.3539C129.1 14.323 128.577 14.0958 128.177 13.7131C127.777 13.3304 127.527 12.8175 127.472 12.2668C127.445 11.7134 127.472 11.157 127.472 10.6006" fill={theme.colors.text}/>
<path d="M91.001 11.5396H99.7352C98.281 15.2075 96.8258 18.8745 95.3696 22.5404C93.9095 18.8725 92.4533 15.2055 91.001 11.5396Z" fill="#ED1C24"/>
<path d="M175.375 31.1835C176.847 27.5214 178.272 23.8535 179.744 20.1914C181.194 23.8594 182.648 27.5234 184.104 31.1835C181.195 31.1835 178.281 31.1835 175.375 31.1835Z" fill="#41A347"/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
