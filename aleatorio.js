// Função auxiliar para selecionar itens aleatórios de uma lista
export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}