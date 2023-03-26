import { Container } from './styles';
import { Header } from '../../components/Header';

//Regra - Components sempre começaram com letras Maiusculas

//As propriedades de Components pode ser passadas e capturadas no componentes
//Caso a propriedade seja do tipo boolean ela não precisa receber nenhum valor exemplo: loading
export function Details() {
    return (
        <Container>
            <Header />
        </Container>
    )
}

