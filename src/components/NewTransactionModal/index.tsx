import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import  closeImg  from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState, useContext } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface Props{
    isNewTransactionModalOpen: boolean;
    handleCloseNewTransactionModal: () => void,
}

export function NewTransactionModal({isNewTransactionModalOpen, handleCloseNewTransactionModal} : Props){
    Modal.setAppElement('#root');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');
    const {createTransaction} = useTransactions();

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title, 
            value, 
            category, 
            type
        });

        setTitle('');
        setValue(0);
        setCategory('');
        setType('deposit');
        handleCloseNewTransactionModal();
    }

    return(
        <Modal 
                isOpen={isNewTransactionModalOpen} 
                onRequestClose={handleCloseNewTransactionModal}
                overlayClassName="react-modal-overlay"
                className = "react-modal-content"          
                >           
            
            <button type="button" 
            onClick={handleCloseNewTransactionModal} 
            className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                    <h2>Cadastrar transação</h2>

                    <input
                        placeholder="Título"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />

                    <input 
                        type="number"
                        placeholder="Valor"
                        value={value===0 ? '' : value}
                        onChange={event => setValue(Number(event.target.value))}
                    />

                    <TransactionTypeContainer>

                        <RadioBox 
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type==='deposit'}
                        activeColor="green"
                        >
                            <img src={incomeImg} alt="Entrada" />
                            <span>Entrada</span>
                        </RadioBox>

                        <RadioBox 
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type==='withdraw'}
                        activeColor="red"
                        >
                            <img src={outcomeImg} alt="Saída" />
                            <span>Saída</span>
                        </RadioBox>

                    </TransactionTypeContainer>

                    <input
                        placeholder="Categoria"
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                    />
                    
                    <button type="submit">
                        Cadastrar
                    </button>
            </Container>
      </Modal>
    );
}