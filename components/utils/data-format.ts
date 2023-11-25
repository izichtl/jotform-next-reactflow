export function obterPrimeiroNome(frase: string): string {
    // Dividir a frase em partes usando o espaço como delimitador
    const partesDaFrase: string[] = frase.split(' ');
  
    // Retornar o primeiro elemento do array, que é o primeiro nome
    const primeiroNome: string = partesDaFrase[0];
  
    return primeiroNome;
  }