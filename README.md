MobileApp desenvolvido para desafio de processo seletivo.

Aplicativo para resolver questões de um simulado. Ao carregar a página inicial o app faz uma requisição ao banco de dados e recebe todas as questões disponíveis.
O usuário então escolhe quantas questões quer resolver (máximo de 40 questões) e inicia o teste.
Na página seguinte é mostrado o enunciado da questão, um botao para voltar para questão anterior e um para pular para a próxima questão( o usuário pode navegar 
livremente entre as questões através do botão pular e voltar), um botão para sair e um botão para ver as alternativas, um mostrador do tempo decorrido desde o início do teste
e a matéria da questão. 

Ao tocar no botão de ver as alternativas o usuário navega para outra tela onde tem as alternativas. Usuário pode tocar numa alternativa e ao confirmar é mostrado se a resposta
está certa ou não, e mostra a resposta certa caso o usuário tenha escolhido a errada. Após confirmar a escolha da resposta o usuário tem acesso à resolução da questão, caso ela
esteja correta.

Durante o desenvolvimento desse app eu tive dificuldade com o gerenciamento dos estados. Poderia otimizar com o uso de alguma ferramenta como Redux, que ainda não possuo
conhecimento mas está no topo da minha lista de estudos. Acabei criando muitos estados e precisei passar para dentro de muitos componentes. 

Para executar esse aplicativo no seu celular é necessário o download do aplicativo Expo da sua loja de aplicativos ( AppStore ou PlayStore) e acessar esse 
link em seguida: https://exp.host/@lucaspb/FB-Quest

