function exercise05(){
    //Antecessor
    let n1 = parseInt(prompt("leia um numero: "));
    let resultado = n1 -1;
    alert ("o antecessor de "+ n1 + " é: " + resultado );
    //Sucessor
    let n2 = parseInt(prompt("Digite um numero: "));
    let Resultado = n2 +1;
    alert ("o sucessor de " + n2 + " é: " + Resultado );
}

//
function exercise06(){
 //Retângulo
    let base = parseInt(prompt("A base do retângulo? "));
    let altura = parseInt(prompt("Altura do retângulo? "));
    let area = (2*base)+(2*altura);
    alert ("A area total de um retângulo e " + area);
//Triângulo
    let Base = parseInt(prompt("Qual a base do triângulo?"));
    let Altura = parseInt(prompt("Qual a altura do triângulo?"));
    let Area = (Base * Altura) /2;
    alert ("A area total de um triângulo e " + Area);
//Circulo
let raio = parseInt(prompt("Digite o raio: "));
let comprimento = (raio * raio) * Math.PI;
alert ("O raio total do circulo é: " + comprimento); 

//Losango
let diagonal_maior = parseInt(prompt("A digonal maior? "));
    let diagonal_menor = parseInt(prompt("Qual a diagona menor?? "));
    let area_ = (diagonal_maior)+(diagonal_menor)/2;
    alert ("A area total de um losango é: " + area_);
}

//Ditar o tanto de tempo de vida de uma pessoa em dias
function exercise07(){
    let idade = parseInt(prompt("Quantos anos essa pessoa tem? "));
    let ano = parseInt(prompt("Em que ano nasceu?"));
    let mes = parseInt(prompt("E mes?"));
    dias = (idade * 365) + (mes * 30);
    alert ("Em um total de: " + dias + " dias essa pessoa existe no mundo"); 
}

//dar o total em porcentagem em votos de um municipio
function exercise08(){
    let votos_brancos = parseInt(prompt("Em um municipio os votos brancos foram: "));
    let votos_nulos = parseInt(prompt("Os votos nulos deu um total de:"));
    let votos_validos = parseInt(prompt("E Votos validos? "));
    let total_eleitores = parseInt(prompt("O total de eleitores foram: "));
    
    let percentual_b = ((votos_brancos * 100.0) / total_eleitores);    
    let percentual_n = ((votos_nulos * 100.0) / total_eleitores);    
    let percentual_v = ((votos_validos * 100.0) / total_eleitores);
    
    alert ("O percentual de votos brancos foi de: " + percentual_b + "% ");
    alert ("O percentual de votos nulos foi de: " + percentual_n + "% ");
    alert ("O percentual de votos validos foi de: " + percentual_v + "% ");
}

//Reajuste do salario de um funcionario
function exercise09(){
    let salario = parseInt(prompt("O salario do funcionario no mes e: "));
    let percentual = parseInt(prompt("O reajuste do salario no proximo mes vai ser: "));
    reajuste_salarial = (salario + percentual)/ 100.0;
    total = (reajuste_salarial + salario);
    alert ("O salario ira Ter uma mudança de um total de: R$"+ total + "no mes que vem")
}


//calcular o valor total do preço de um veiculo novo
function exercise10(){
    let custo_fabrica = parseInt(prompt("Quanto a fabrica vai gastar para começar a construção do veiculo veiculo?"));
    let imposto = (45 * custo_fabrica) / 100.0;
    let distribuidora = (28 * custo_fabrica) / 100.0;
    let total = custo_fabrica + distribuidora + imposto;
    alert ("O custo total de um carro vai ser: " + total);
}

//Calcular a temperatura usando o Fahrenheint e convertendo em Celsius
function exercise11(){
    let fahrenheint = parseInt(prompt("Digite a temperatura atual em F: "));
    let celsius = (fahrenheint - 32) * 5 / 9;
    alert ("A temperatura em graus Celsius é: " + celsius);
}

//Calcule a nota total de um aluno usando tres provas como comparação
function exercise12(){
    let n1 = parseInt(prompt("Na primeira prova o aluno tirou: "));
    let n2 = parseInt(prompt("Na segunda prova ele tirou: "));
    let n3 = parseInt(prompt("Na terceira: "));
    nota_total = ((n1 * 2) + (n2 * 3) + (n3 * 5)) /10;
    alert ("A nota total do aluno no total foi: " +nota_total);
    if (nota_total >=7){
        alert ("O aluno passou de ano. \n" + nota_total);
    }else{
        alert ("O aluno reprovou. \n" + nota_total);
    }
}

//Escreva um algoritmo que leia com sim ou não se o valor e maior que 10
function exercise13(){
    let valor = parseInt(prompt("digite um numero" ));
    if (valor > 10){
        alert ("O valor é maior que 10\n" + valor);
    }else{
        alert ("O valor é menor que 10\n" + valor);
    }
}

//criar um algoritmo e dizer se ele e positivo ou negativo
function exercise14(){
    let n = parseInt(prompt("Digite um numero: "));
    if (n>0){
        alert ("E positivo \n" + n );
    }else{
        alert ("E negativo \n" + n );
    }
}

//calcular o total de maças compradas e dizer o preço total
function exercise15(){
    let maças = parseInt(prompt("Quantas maças foram compradas? "));
    let total = 1.00 + (maças * 1.00);
    if(total>12){
        alert ("E mais de uma duzia (12) \n " + total + " de maças, assim sendo mais ou igual a R$1.30 ");
    }else{
        alert ("E um total de: \n " + total + " maças, assim não sendo igual ou maior do que 12 duzias assim dando menos ou igual a R$1.00");
    }
}

function exercise16(){
    let carros_vendidos = parseInt(prompt("Quantos carros o vendedor vendeu no mes?"));
    let total_vendas = carros_vendidos * 30
    let valor_comissao = total_vendas * 0.05
    alert ("Dando um total de: " +total_vendas+ " vendas no mes");

    let salario_fixo = parseInt(prompt("Qual o salario inicial do funcionario? "));
    let total = salario_fixo + valor_comissao;
    alert ("O funcionario no fim do mes vai receber um total de R$" +total); 
}

//Calcular quanto um funcionario vai ganhar no fim do mes por cada carro vendido
function exercise17(){
    let n1 = parseInt(prompt("Na primeira prova o aluno tirou: "));
    let n2 = parseInt(prompt("Na segunda prova ele tirou: "));
    nota_total = ((n1 * 2) + (n2 * 3)) /10;
    let media = (n1 + n2) /2;
    alert ("A nota total do aluno no total foi: " + nota_total +" a media total foi: " + media);
    if (media >=7){
        alert ("O aluno passou de ano. \n " + media);
    }else{
        alert ("O aluno reprovou. \n " + media);
    }
}

// Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
//poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu.

function exercise18(){
    let ano_atual = parseInt(prompt("Em que ano estamos? "));
    let ano_nascimento = parseInt(prompt("Em que ano nasceu? "));
    let idade = ano_atual - ano_nascimento;
    alert ("A pessoa tem: " + idade + " anos de idade." );
        if (idade>>=18){
            alert ("O voto é obrigatorio ");
            }else{
                alert ("Não tem idade para votar ");
            }
        }     

//Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.
function exercise19(){
    let valor_um = parseInt(prompt("Digite um numero: "));
    let Valor_dois = parseInt(prompt("Digite outro numero: "));
    
    if(valor_um == Valor_dois){
        alert("valores iguais ")
    }else if (valor_um > Valor_dois){
        alert ("O primeiro valor é maior que o segundo.")
    }else{
        alert("Segundo valor é maior que o primeiro. ")
    }
}

//Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
function exercise20(){
    let valor_um = parseInt(prompt("Digite um numero: "));
    let valor_dois = parseInt(prompt("Digite outro numero: "));
    
    if(valor_um == valor_dois){
        alert("valores iguais ")
    }else if (valor_um > valor_dois){
        alert ("O primeiro valor é maior que o segundo. "  + valor_dois + ", " + valor_um )
    }else{
        alert("Segundo valor é maior que o primeiro. "  + valor_um + ", " + valor_dois)
    }
}

// Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
//minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
//de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte

function exercise21(){
        let horaInicio = parseInt(prompt("Digite a hora de início do jogo (apenas horas inteiras):"));
        let horaFim = parseInt(prompt("Digite a hora de fim do jogo (apenas horas inteiras):"));

        let duracao;
        if (horaFim >= horaInicio) {
            duracao = horaFim - horaInicio;
        } else {

            duracao = 24 - horaInicio + horaFim;
        }
    
        alert("A duração do jogo foi de " + duracao + " horas.");
    }

// calcular o salário total do funcionário com horas extras
function exercise22(){
    let salario = parseInt(prompt("quanto o funcionario vai receber pelo trabalho?"));
    let horas_trabalho = parseInt(prompt("quantas horas trabalhadas?"));
    let acrescimo;
    if (salario >= 40){
    acrescimo = salario + (salario * 0.5) ;
    
    alert ("O funcionário vai ganhar um total de R$" + acrescimo.toFixed(2) + " por horas trabalhadas com horas extras.");    
    
}else{
        acrescimo = salario - horas_trabalho;
    }

    ("O funcionário vai ganhar um total de R$" + salario.toFixed(2) + " sem horas extras.")
        
}
//Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
//e mostre seu peso ideal, utilizando as seguintes fórmulas.
function exercise23(){
    let peso = parseInt(prompt("quanto esse homem pesa?"));
    let altura = parseInt(prompt("quanto de altura?"));
    let peso_ideal;
    peso_ideal => (72.7 * altura) - 58;

    if (peso >= peso_ideal){
    alert ("O homem tem " + peso_ideal.toFixed(2) + " kg, o peso ideal.");
}else{
    alert("Não tem o peso ideal. Peso atual: " + peso.toFixed(2) + " kg");
}
let Peso = parseInt(prompt("quanto essa mulher pesa?"));
let Altura = parseInt(prompt("quanto de altura?"));
let Peso_ideal;
Peso_ideal => (62.1 * Altura) - 44.7;

if (Peso >= Peso_ideal){
alert ("A mulher pesa " + Peso_ideal.toFixed(2) + " kg, o peso ideal.");
}else{
alert("Não tem o peso ideal. Peso atual: " + Peso.toFixed(2) + " kg");
}
}

// Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
//ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
//ultrapassar este valor, calcular e escrever o seu salário total.

function exercise24(){
    let salario_fixo = parseInt(prompt("qual o salario fixo do funcionario?"));
    let valor_total = parseInt(prompt("quanto foi vendido?"));
    let comissão;
    if (valor_total <= 1500){
        comissão = 1500 * 0.03;
    }else{
        comissão = (1500 * 0.03) + (valorVendas - 1500);
    }
    let salarioTotal = salarioFixo + comissao;

    alert("O salário total do vendedor é R$" + salarioTotal.toFixed(2));
}

//Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
//escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
//ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.

function exercise25(){
    let numeroConta = parseInt(prompt("Digite o número da conta do cliente:"));
    let saldo = parseFloat(prompt("Digite o saldo atual do cliente:"));
    let debito = parseFloat(prompt("Digite o débito do cliente:"));
    let credito = parseFloat(prompt("Digite o crédito do cliente:"));

    let saldoAtual = saldo - debito + credito;

    if (saldoAtual >= 0) {
        alert("Saldo Positivo");
    } else {
        alert("Saldo Negativo");
    }

    alert("O saldo atual do cliente é: " + saldoAtual.toFixed(2));
}

//Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
//quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
//média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
//a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
//compra'.

function exercise26(){
    let quantidade_atual = parseInt(prompt("Quanto a em estoque?"));
    let quantidade_minima = parseInt(prompt("Qual a quantidade minima suportada?"));
    let quantidade_maxima = parseInt(prompt("Qual a quantidade maxima suportada?"));
    
    let media = (quantidade_maxima + quantidade_minima + quantidade_minima) /3
    
    if (quantidade_atual >= media){
        alert ("Não sera possivel efetuar a compra"); 
    
    } else {
        alert ("Sera efetuado a compra.");
    } 

}

//Ler um valor e escrever se é positivo, negativo ou zero.

function exercise27(){
    let valor = parseInt(prompt("Digite um numero"));
    
    if(valor>0){
        alert("É Positivo")
    }else if (valor<0){
        
        alert ("É Negativo");
    }else{
        alert("E igual a Zero");
    }
    
}

//Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

function exercise28(){
    let valor_um = parseInt(prompt("Digite um valor:"));
    let valor_dois = parseInt(prompt("Digite o segundo valor:"));
    let valor_tres = parseInt(prompt("Digite o terceiro valor:"));
    
    if(valor_um > valor_dois && valor_um > valor_tres){
        alert("O valor um e maior que o dois e o três.")

    }else if (valor_dois > valor_tres && valor_dois > valor_um){
        alert ("O valor dois e maior que o valor um e três.");
    }else{
        alert("O terceiro valor e maior.");
    }
}

function exercise29(){
    let valor_um = parseInt(prompt("Digite o primeiro valor:"));
    let valor_dois = parseInt(prompt("Digite o segundo valor:"));
    let valor_tres = parseInt(prompt("Digite o terceiro valor:"));
    
    let soma = (valor_um + valor_dois + valor_tres);
    if (valor_um > valor_dois && valor_tres){
        alert ("A Soma desses dois valores e: " + soma);
        alert("O valor um e maior que o dois e o três.")
    
    }else if (valor_dois > valor_tres && valor_um){
        alert ("A soma dos dois maiores é: " +soma);
        alert ("O valor dois e maior que o valor um e três. ");
    
    }else{
        alert ("A soma total: " +soma);
        alert("O terceiro valor e maior.");
    } 
}

//Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
//crescente.

function exercise30(){
    let valor_um = parseInt(prompt("Digite o primeiro valor:"));
    let valor_dois = parseInt(prompt("Digite o segundo valor:"));
    let valor_tres = parseInt(prompt("Digite o terceiro valor:"));
    
    if (valor_um < valor_dois && valor_um < valor_tres) {
        if (valor_dois < valor_tres) {
            alert("Valores em ordem crescente: " + valor_um + ", " + valor_dois + ", " + valor_tres);
        } else {
            alert("Valores em ordem crescente: " + valor_um + ", " + valor_tres + ", " + valor_dois);
        }
    } else if (valor_dois < valor_um && valor_dois < valor_tres) {
        if (valor_um < valor_tres) {
            alert("Valores em ordem crescente: " + valor_dois + ", " + valor_um + ", " + valor_tres);
        } else {
            alert("Valores em ordem crescente: " + valor_dois + ", " + valor_tres + ", " + valor_um);
        }
    } else {
        if (valor_um < valor_dois) {
            alert("Valores em ordem crescente: " + valor_tres + ", " + valor_um + ", " + valor_dois);
        } else {
            alert("Valores em ordem crescente: " + valor_tres + ", " + valor_dois + ", " + valor_um);
        }
    }
}

// Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
//ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
//dos outros 2 lados.

function exercise31() {
    let primeiro_A = parseInt(prompt("Digite o primeiro lado:"));
    let segundo_B = parseInt(prompt("Digite o segundo lado:"));
    let terceiro_C = parseInt(prompt("Digite o terceiro lado:"));
    
    if (primeiro_A < segundo_B + terceiro_C && segundo_B < primeiro_A + terceiro_C && terceiro_C < primeiro_A + segundo_B) {
        alert("Os valores formam um triângulo.");
    } else {
        alert("Os valores não formam um triângulo.");
    }
}

//Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
//do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

function exercise32() {
    let primeiro_time = parseInt(prompt("Quantos gols do time da casa?:"));
    let segundo_time = parseInt(prompt("Quantos gols do time adversario:"));
    
    if (primeiro_time > segundo_time ) {
        alert (+primeiro_time);
        alert ("O time da casa vence a partida!");
    } else if (segundo_time > primeiro_time){
        alert (+segundo_time);
        alert ("O time adversario vence a partida!")
    
    }else{
        alert ("A partida deu Empate!");
    }
}

//Ler dois valores e imprimir uma das três mensagens a seguir:
//‘Números iguais’, caso os números sejam iguais
//‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
//‘Segundo maior’, caso o segundo seja maior que o primeiro.

function exercise33(){
    let primeiro_valor = parseInt(prompt("Primeiro valor:"));
    let segundo_valor = parseInt(prompt("Segundo valor:"));
    
    if (primeiro_valor > segundo_valor ) {
        alert (+primeiro_valor);
        alert ("O primeiro valor e o maior.");

    } else if (segundo_valor > primeiro_valor){
        alert (+segundo_valor);
        alert ("Segundo valor e o maior.")
    
    }else{
        alert ("Numeros iguais");
    }
}

//Faça um teste de mesa e complete o quadro a seguir para os seguintes valores

function exercise34() {
    let z = (x * y) + 5;
    let resposta;
    
    if (z <= 0) {
        resposta = 'A';
    } else if (z <= 100) {
        resposta = 'B';
    } else {
        resposta = 'C';
    }
    
    return resposta;
}


console.log("X = 3, Y = 2, Resposta = " + exercise34(3, 2)); 
console.log("X = 150, Y = 3, Resposta = " + exercise34(150, 3)); 
console.log("X = 7, Y = -1, Resposta = " + exercise34(7, -1)); 
console.log("X = -2, Y = 5, Resposta = " + exercise34(-2, 5)); 

//Um posto está vendendo combustíveis com a seguinte tabela de descontos:

function exercise35(){
    let precoGasolina = 3.30;
    let precoAlcool = 2.90;
    let valorAPagar = 0;

    if (tipoCombustivel === 'A') {
        if (litros <= 20) {
            valorAPagar = litros * (precoAlcool - (precoAlcool * 0.03));
        } else {
            valorAPagar = litros * (precoAlcool - (precoAlcool * 0.05));
        }
    } else if (tipoCombustivel === 'G') {
        if (litros <= 20) {
            valorAPagar = litros * (precoGasolina - (precoGasolina * 0.04));
        } else {
            valorAPagar = litros * (precoGasolina - (precoGasolina * 0.06));
        }
    } else {
        alert("Tipo de combustível inválido. Use 'A' para Álcool e 'G' para Gasolina.");
        return;
    }

    alert("Valor a ser pago: R$" + valorAPagar.toFixed(2));
}

//Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
//dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
//das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
//novo com a mulher mais velha.

function exercise36(){
    let idadeHomemMaisVelho = Math.max(idadeHomem1, idadeHomem2);
    let idadeHomemMaisNovo = Math.min(idadeHomem1, idadeHomem2);
    let idadeMulherMaisVelha = Math.max(idadeMulher1, idadeMulher2);
    let idadeMulherMaisNova = Math.min(idadeMulher1, idadeMulher2);
    let somaIdades = idadeHomemMaisVelho + idadeMulherMaisNova;
    let produtoIdades = idadeHomemMaisNovo * idadeMulherMaisVelha;
    return { somaIdades, produtoIdades };
}

{let idades = calcularIdades(30, 25, 35, 20);
alert("Soma das idades do homem mais velho com a mulher mais nova: " + idades.somaIdades);
alert("Produto das idades do homem mais novo com a mulher mais velha: " + idades.produtoIdades);
}

function exercise37(){


let precoMorangoMenor5Kg = 2.50;
let precoMorangoMaior5Kg = 2.20;
let precoMacaMenor5Kg = 1.80;
let precoMacaMaior5Kg = 1.50;
let limiteDescontoKg = 8;
let limiteDescontoValor = 25.00;
let valorTotalMorango, valorTotalMaca, valorTotalCompra;

if (kgMorangos <= 5) {
    valorTotalMorango = kgMorangos * precoMorangoMenor5Kg;
} else {
    valorTotalMorango = kgMorangos * precoMorangoMaior5Kg;
}

if (kgMaca <= 5) {
    valorTotalMaca = kgMaca * precoMacaMenor5Kg;
} else {
    valorTotalMaca = kgMaca * precoMacaMaior5Kg;
}

let (valorTotalCompra = valorTotalMorango + valorTotalMaca);

if (kgMorangos + kgMaca > limiteDescontoKg || valorTotalCompra > limiteDescontoValor) {
    valorTotalCompra *= 0.9;
}

return (valorTotalCompra.toFixed(2));
{
let kgMorangos = parseInt(prompt("Quantidade de morangos (em Kg):"));
let kgMaca = parseInt(prompt("Quantidade de maçãs (em Kg):"));
let valorFinal = calcularValorCompra(kgMorangos, kgMaca);

console.log("Valor total a ser pago pelo cliente: R$ " + valorFinal);
}
}

//Uma fruteira está vendendo frutas com a seguinte tabela de preços
function exercise38(){


    const codigoCorreto = 1234;
    const senhaCorreta = 9999;


    let codigoUsuario = parseInt(prompt("Digite o código de usuário:"));


    if (codigoUsuario !== codigoCorreto) {
        alert("Usuário inválido!");
    } else {

        let senhaUsuario = parseInt(prompt("Digite a senha:"));


        if (senhaUsuario !== senhaCorreta) {
            alert("Senha incorreta!");
        } else {
            alert("Acesso permitido");
        }
    }
}

//Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja
//diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a
//mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se
//esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a
//senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.
function exercise38(){
    let A = true; // Verdadeiro
let B = true; // Verdadeiro
let C = false; // Falso

let resultadoA = (A && B) || (A ^ B);
let resultadoB = (A || B) && (A && C);
let resultadoC = A || (C && B ^ A && !B);

console.log(resultadoA); // Saída: true
console.log(resultadoB); // Saída: false
console.log(resultadoC); // Saída: true
}

    // Ler a descrição do produto, quantidade adquirida e preço unitário
function exercise39(){
     let descricaoProduto = prompt("Digite a descrição do produto:");
     let quantidade = parseInt(prompt("Digite a quantidade adquirida:"));
     let precoUnitario = parseFloat(prompt("Digite o preço unitário:"));
 
     // Calcular o total
     let total = quantidade * precoUnitario;
 
     // Calcular o desconto com base na quantidade
     let desconto;
     if (quantidade <= 5) {
         desconto = total * 0.02;
     } else if (quantidade > 5 && quantidade <= 10) {
         desconto = total * 0.03;
     } else {
         desconto = total * 0.05;
     }
 
     // Calcular o total a pagar
     let totalAPagar = total - desconto;
 
     // Exibir os resultados
     console.log("Descrição do produto:", descricaoProduto);
     console.log("Total: R$", total);
     console.log("Desconto: R$", desconto);
     console.log("Total a pagar: R$", totalAPagar);
 }


// Ler as 3 notas e a média dos exercícios

function exercise40(){

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));

// Calcular a média de aproveitamento
let mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7;

// Atribuir o conceito de acordo com a média de aproveitamento
let conceito;
if (mediaAproveitamento >= 9.0) {
    conceito = "A";
} else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9.0) {
    conceito = "B";
} else if (mediaAproveitamento >= 6.0 && mediaAproveitamento < 7.5) {
    conceito = "C";
} else {
    conceito = "D";
}

// Exibir o resultado
alert("Média de Aproveitamento: " + mediaAproveitamento.toFixed(2));
alert("Conceito: " + conceito);
}

// Ler o número do empregado, ano de nascimento e ano de ingresso na empresa
function exercise41() {
    let codigoEmpregado = parseInt(prompt("Digite o número do empregado (código):"));
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento do empregado:"));
    let anoIngresso = parseInt(prompt("Digite o ano de ingresso na empresa do empregado:"));

    // Calcular a idade do empregado
    let idade = new Date().getFullYear() - anoNascimento;

    // Calcular o tempo de trabalho do empregado
    let tempoTrabalho = new Date().getFullYear() - anoIngresso;

    // Verificar se o empregado está qualificado para aposentadoria
    if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
        alert("Idade: " + idade + " anos");
        alert("Tempo de trabalho: " + tempoTrabalho + " anos");
        alert("Requerer aposentadoria");
    } else {
        alert("Idade: " + idade + " anos");
        alert("Tempo de trabalho: " + tempoTrabalho + " anos");
        alert("Não requerer");
    }
}

// Chamar a função para verificar a aposentadoria
exercise41();

//Triângulo
function exercise43(){
    let mensagem;

    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            mensagem = 'Triângulo Equilátero';
        } else if (a === b || b === c || a === c) {
            mensagem = 'Triângulo Isósceles';
        } else {
            mensagem = 'Triângulo Escaleno';
        }
    } else {
        mensagem = 'Não é possível formar um triângulo';
    }

    return mensagem;
}

// Teste de mesa
console.log(verificarTriangulo(1, 2, 3)); // Saída: Não é possível formar um triângulo
console.log(verificarTriangulo(3, 4, 5)); // Saída: Triângulo Escaleno
console.log(verificarTriangulo(2, 2, 4)); // Saída: Não é possível formar um triângulo
console.log(verificarTriangulo(4, 4, 4)); // Saída: Triângulo Equilátero
console.log(verificarTriangulo(5, 3, 3)); // Saída: Triângulo Isósceles

exercise43();

function exercise44() {
    let valor1, valor2, resultado;

    do {
        valor1 = parseFloat(prompt("Digite o primeiro valor:"));
        valor2 = parseFloat(prompt("Digite o segundo valor (não pode ser zero):"));
    } while (valor2 === 0);

    resultado = valor1 / valor2;

    console.log("Resultado da divisão:", resultado);
}

// Chamar a função para realizar a divisão
exercise43();

//enquanto
function exercise45() {
    let valor1, valor2, resultado;

    valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    valor2 = parseFloat(prompt("Digite o segundo valor (não pode ser zero):"));

    while (valor2 === 0) {
        valor2 = parseFloat(prompt("Digite um valor diferente de zero para o segundo número:"));
    }

    resultado = valor1 / valor2;

    console.log("Resultado da divisão:", resultado);
}

// Chamar a função para realizar a divisão
exercise45();

//Chamar a função para realizar a divisão
function exercise46() {
    let valor1, valor2, resultado;

    valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    valor2 = parseFloat(prompt("Digite o segundo valor (não pode ser zero):"));

    while (valor2 === 0) {
        valor2 = parseFloat(prompt("Digite um valor diferente de zero para o segundo número:"));
        if (valor2 === 0) {
            console.log("VALOR INVÁLIDO! O segundo valor não pode ser zero.");
        }
    }

    resultado = valor1 / valor2;

    console.log("Resultado da divisão:", resultado);
}
exercise46();

// Chamar a função para realizar a divisão
function exercise47() {
    let valor1, valor2, resultado;

    do {
        valor1 = parseFloat(prompt("Digite o primeiro valor:"));
        valor2 = parseFloat(prompt("Digite o segundo valor (não pode ser zero):"));

        if (valor2 === 0) {
            console.log("VALOR INVÁLIDO! O segundo valor não pode ser zero.");
        }
    } while (valor2 === 0);

    resultado = valor1 / valor2;

    console.log("Resultado da divisão:", resultado);
}

exercise47();

// Chamar a função para calcular a média
function exercise48() {
    let nota1, nota2, media;

    nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação (0 a 10):"));
    while (nota1 < 0 || nota1 > 10 || isNaN(nota1)) {
        nota1 = parseFloat(prompt("Nota inválida! Digite novamente a nota da 1ª avaliação (0 a 10):"));
    }

    nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação (0 a 10):"));
    while (nota2 < 0 || nota2 > 10 || isNaN(nota2)) {
        nota2 = parseFloat(prompt("Nota inválida! Digite novamente a nota da 2ª avaliação (0 a 10):"));
    }

    media = (nota1 + nota2) / 2;
    console.log("A média do aluno é:", media.toFixed(2));
}

exercise48();

// Chamar a função para calcular a média
function exercise49() {
    let nota1, nota2, media;
    let continuar = 'S'; // Inicialmente, permite continuar com novo cálculo

    while (continuar === 'S') {
        nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação (0 a 10):"));
        while (nota1 < 0 || nota1 > 10 || isNaN(nota1)) {
            nota1 = parseFloat(prompt("Nota inválida! Digite novamente a nota da 1ª avaliação (0 a 10):"));
        }

        nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação (0 a 10):"));
        while (nota2 < 0 || nota2 > 10 || isNaN(nota2)) {
            nota2 = parseFloat(prompt("Nota inválida! Digite novamente a nota da 2ª avaliação (0 a 10):"));
        }

        media = (nota1 + nota2) / 2;
        console.log("A média do aluno é:", media.toFixed(2));

        continuar = prompt("NOVO CÁLCULO (S/N)?").toUpperCase(); // Converte a resposta para maiúscula
    }
}
{
exercise49();
}

