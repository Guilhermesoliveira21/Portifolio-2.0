import { createGlobalStyle } from "styled-components";


export const StyleGlobal = createGlobalStyle`

    * {
        scroll-behavior: smooth;
    }

    body {
        
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text_primary};

        transition: .2s;

        padding: 2rem 12rem;

        @media (max-width: 1599px) {
            padding: 2rem 6rem;
        }

        @media (max-width: 1229px) {
            padding: 2rem 4rem;
        }

        @media (max-width: 768px) {
            padding: 1rem;
        }
    
        }



`;