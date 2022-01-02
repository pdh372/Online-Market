import styled from 'styled-components';
import { Dropdown, Menu } from 'antd';

export const DropDownStyled = styled(Dropdown)`
    font-size: 30px;
    position: relative;
    top: 3px;
    cursor: pointer;
`;

export const MenuStyled = styled(Menu)`
    cursor: pointer;
    background-color: lightgray;
    color: white;
    border-radius: 5px;
    padding: 0;
    overflow: hidden;
    padding: 10px;


    .menu-item {
        background-color: gray;
        border-radius: 5px;
        width: 100%;

        &:nth-child(1){
            margin-bottom: 10px;
        }

        display: flex;
        justify-content:center;
        align-items:center;
    }
`;
