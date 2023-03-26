import { Container } from "./styles";
// para capturar uma propriedade precisamos de colocar ela entre {}

// {...rest}, ele adiciona qualquer outra propriedade passada no component
// obs: elas não poderão ser usadas até que vc declare ela no component

// loading = false, você pode definir valores default, para os components que não estiverem mandando a propriedade
export function Button({text, loading = false, ...rest}) {
    return (
        <Container type="button" disabled={loading} {...rest}>
            {loading?'Carregando...':text}
        </Container>
    );
}
