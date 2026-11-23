# O Projeto é uma calculadora báica com aepnas duas secoes:
  1. Display: Mostra as interacoes do usuario com os botoes
  2. Botoes: Mostra os botoes disponiveis para serem utilziados pelo usuario


# A calculadora terá um formato de tela dividida, na parte de acima estara o display, na tela de embaixo estarao os botoes.

1. Eu tenho que disenar a logica dos botoe, primeiro criarei os botoes basicos de qualquer jeito, loo criarei uma funcionalidade que mostre os botoes presionados na tela (nao precisa refinamento apenas verificar que a loica de presionar esteja funcioanando).
2. Logo eu tenho que adicionar a funcionalidade onde os numeros presionados serao mostrados e almacenados, logo quando um operador for presioando o operador sera adicionado ao arreglo de operacaomatematica e a logica seguinte ficara esperando por um numero para ser precionado, neste paso a regra é simples apos ter apertado um operador nenhum botao fora de um numero será permitido.
3. A primeira operacao de teste sera simples apenas uma soma, logo testaremos a funcionaldiade de Calcular Representada com o simbolo de iual (=).
4. A funcao de calcular devera calcular a operacao matematica criada pelo usuario.
5. Com isso teremos o projeto piloto rodando e poderemos continuar.



# FLUXO DE TRABALHO:

1. Desenvovler: implementar uma nova funcionaldiade
2. Testar: verificar se esta funcionando corretamente

3. Registrar a alteracao no Git:
git add .
git commit -m "[v0.2.0] Implementado: Nova Funcionalidade Implementada"

4. Publicar:
git push

5. Quando concluir um marco de versao importante:
git tag -a v0.2.0 -m "[v0.2.0]: Descrição da versão"
git push origin v0.2.0


