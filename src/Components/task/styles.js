import Styled from 'styled-components';


export const TaskContainer = Styled.div`
    min-width: 350px;
    border-bottom: 1px solid rgb(8, 8, 8);
    display: flex;
    flex-direction: column;
`;

export const TitleTask = Styled.h2 `
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #1B42A5;
`;

export const TextTask = Styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #000000;
`;

export const Icon = Styled.div`
    width: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
    gap: 10px;
`;