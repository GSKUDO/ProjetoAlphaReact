import Styled from 'styled-components';

export const Container = Styled.section`
    display: flex;
    flex-direction: column;
`;

export const LabelBoard  = Styled.label`
    font-family: Roboto;
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: #26038A;

    background-color: white;
    border-bottom: 1px solid #26038A;
    margin: 30px;
`;

export const LabelInputGroup  = Styled.label`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400:
    font-size: 40px;
    line-height: 30px;
    color: #26038A;
`;

export const InputGroup = Styled.section`   
    margin: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 20px;
`;

export const InputEach = Styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const Button = Styled.button`
    margin: auto;
    background-color: #1B42A5;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;

    border: none;
    text-align: center;
    cursor: pointer;

    width: 532px;
    height: 40px;
    box-shadow: inset 2px 2px 4px 0px rgb(69 53 104 / 20%);

    font-family: Roboto;
    font-size: 25px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;

`;

export const Input = Styled.input`
    margin-top: 0;
    padding-top:0;
    padding-left: 30px;
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: #26038A;
    border-radius: 10px;
    height: 50px;
    width: 370px;
    left: 64px;
`;

export const Select = Styled.select`
    margin-top: 0;
    padding-top:0;
    padding-left: 30px;
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: #26038A;
    border-radius: 10px;
    height: 50px;
    width: 370px;
    left: 64px;
    top: 200px;
`;

export const Board = Styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 20px;
`;

export const CardSection = Styled.section`
    width:370px;
    background-color: ${props => props.background || "palevioletred"};
    border: 1px solid ${props => props.border || "palevioletred"};
`;

export const Card = Styled.h2`
    margin-top: 0;
    padding-top: 30px;
    height: 76px;
    color: white;
    text-align: center;
    background-color: ${props => props.inputColor || "palevioletred"};
`;