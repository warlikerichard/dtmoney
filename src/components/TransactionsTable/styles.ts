import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    table{
        width: 100%;
        border-spacing: 0 0.5rem; //É o que faz as linhas se separarem e abrirem espaço pro background.

        th{
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            border-radius: 0.25rem;
            background: var(--shape);
            color: var(--text-body);

            &:first-child{
            color: var(--text-title);
            
            transition: filter 0.25s;
            &:hover{
                filter: brightness(0.9);
                cursor: pointer;
             }
            }

            &.withdraw{
                color: var(--red);
            }
            &.deposit{
                color: var(--green);
            }
        }

    }
`;