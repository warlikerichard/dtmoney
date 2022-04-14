import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Element } from './element';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary(){
    const {transactions} = useTransactions();
    
    const {deposit:input, withdraw:output} = transactions.reduce((acc, transaction) => {
        if(transaction.type==='deposit'){
            acc.deposit += transaction.value;
        } else{
            acc.withdraw += transaction.value;
        }

        return acc;
    }, {
        deposit:0,
        withdraw:0,
    });
    
    console.log(transactions);

    return(
        <Container>
            <Element img={incomeImg} title="Entradas" content={new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                        }).format(input)}/>

            <Element img={outcomeImg} title="Saídas" content={new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                        }).format(output)}/>

            <Element img={totalImg} title="Total" content={new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                        }).format(input - output)} class="result"/>
        </Container>
    );
}