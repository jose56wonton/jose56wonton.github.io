import { css } from 'styled-components/macro';
import { keyframes } from 'styled-components';
import { mobile, desktop } from 'mediaQueries';

const animations = {
    yellowBlock: css`
        ${desktop(css`
            animation: ${keyframes`
                0% { 
                    transform:  rotate(6.5deg) translateY(-50%);                  
                }
                50% {                
                    transform:  rotate(10.5deg) translateY(-50%);                
                }
                100% { 
                    transform:  rotate(6.5deg) translateY(-50%);                  
                }
        `} 4s infinite;
        `)};

        ${mobile(css`
            animation: ${keyframes`
                0% {
                     transform:  rotate(-1.5deg) translateY(-50%);
                }
                50% {
                     transform:  rotate(-5.5deg) translateY(-50%);
                }
                100% {
                    transform:  rotate(-1.5deg) translateY(-50%);
                }
            `} 4s infinite;
        `)};
    `,
    blueCircle: css`
        ${desktop(css`
            animation: ${keyframes`
              0% { 
                  transform:  scale(1) translateY(0%);
              }
              23% {                
                  transform:  scale(.97) translateY(1%);
              }
               63% {                
                  transform:  scale(1.03) translateY(-2%);
              }
              100% { 
                  transform:  scale(1) translateY(0%);
              }
        `} 4s infinite;
        `)};
        ${mobile(css`
            animation: ${keyframes`
              0% { 
                  transform:  scale(1) translateY(5%);
              }
              23% {                
                  transform:  scale(1.03) translateY(7%);
              }
               63% {                
                  transform:  scale(.97) translateY(4%);
              }
              100% { 
                  transform:  scale(1) translateY(5%);
              }
        `} 4s infinite;
        `)};
    `,
    emailTooltip: css`
        animation: ${keyframes`
              0% { 
                  transform:  rotate(-8deg);
              }
              23% {                
                  transform:  rotate(-5deg);
              }
              63% {
                  transform:  rotate(-1deg);
              }
              100% { 
                  transform:  rotate(-8deg);
              }
        `} 4s infinite;
    `,
};
export default animations;
