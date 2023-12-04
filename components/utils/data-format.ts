export function obterPrimeiroNome(frase: string): string {
    // Dividir a frase em partes usando o espaço como delimitador
    const partesDaFrase: string[] = frase.split(' ');
  
    // Retornar o primeiro elemento do array, que é o primeiro nome
    const primeiroNome: string = partesDaFrase[0];
  
    return primeiroNome;
  }


  export function converterFormatoData(dataString: string): string {
    const dataObj = new Date(dataString);
    
    const dia = String(dataObj.getUTCDate()).padStart(2, '0');
    const mes = String(dataObj.getUTCMonth() + 1).padStart(2, '0'); // Adicionando 1, pois os meses começam do zero
    const ano = dataObj.getUTCFullYear();
  
    const dataFormatada = `${dia}/${mes}/${ano}`;
  
    return dataFormatada;
  }