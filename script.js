const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao acompanhar uma competição esportiva, você conhece uma nova tecnologia: uma inteligência artificial capaz de responder dúvidas, gerar análises em tempo real, criar imagens e até simular jogadas com áudio e visual hiper-realistas. Qual é o seu primeiro pensamento sobre o impacto disso no futuro dos esportes?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Ficou com medo de que a IA mude demais o jeito como os esportes funcionam e acabe substituindo profissionais da área. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Ficou animado com o potencial da IA nos esportes e quis aprender como aplicá-la no dia a dia das práticas esportivas."
            }
        ]
    },
    {
        enunciado: "Com o avanço da Inteligência Artificial no mundo esportivo, um especialista da área propôs uma atividade: produzir um trabalho sobre como a IA está transformando os esportes. Agora é sua vez de agir — qual atitude você toma?",
        alternativas: [
            {
                texto: "Recorreu a uma plataforma com inteligência artificial para localizar conteúdos e exemplos sobre a aplicação da IA nos esportes, com explicações claras e acessíveis.",
                afirmacao: "Usou a IA para encontrar informações importantes sobre a transformação dos esportes."
            },
            {
                texto: "Produziu o trabalho reunindo discussões com o grupo, buscas na internet e sua experiência sobre a influência da IA no esporte.",
                afirmacao: "Notou que apoiar-se nos seus próprios recursos tornou a elaboração do trabalho mais simples"
            }
        ]
    },
    {
        enunciado: "Após a entrega do trabalho, o grupo participou de uma discussão para explicar como desenvolveram a pesquisa e a redação. Durante o debate, foi levantada uma questão importante: como a inteligência artificial pode afetar as carreiras no mundo dos esportes no futuro. Como você se posiciona nesse diálogo?",
        alternativas: [
            {
                texto: "Defende que a inteligência artificial pode criar novas vagas no setor esportivo e aprimorar as habilidades dos profissionais envolvidos.",
                afirmacao: "Tem impulsionado o desenvolvimento da IA no esporte e trabalha para ampliar as chances de emprego nessa área."
            },
            {
                texto: "Preocupa-se com os profissionais do esporte que podem ser substituídos por máquinas e defende a necessidade de garantir a segurança dos trabalhadores.",
                afirmacao: "Essa preocupação levou à criação de um grupo entre atletas e técnicos para debater o uso ético da IA no esporte."
            }
        ]
    },
    {
        enunciado: "Após o debate, foi solicitado que você produzisse uma imagem digital que expressasse sua visão sobre o papel da inteligência artificial no esporte. Como você procede?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Observou que várias pessoas ainda não dominam as ferramentas digitais convencionais e decidiu apoiar, compartilhando seu conhecimento em design básico para quem está começando."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Agilizou a produção dos trabalhos usando geradores de imagens por IA e agora ajuda quem tem dificuldade com desenhos manuais a aprender a usar essas ferramentas."
            }
        ]
    },
    {
        enunciado: "Você faz parte de um grupo com prazo para entregar um projeto na semana que vem, mas o trabalho está atrasado. Um integrante usou a IA para auxiliar, porém o resultado final ficou idêntico ao conteúdo produzido pela ferramenta. O que você faz?",
        alternativas: [
            {
                texto: "Usar comandos para a IA é uma maneira válida de colaborar nas análises esportivas, por isso não vê problema em utilizar o conteúdo gerado integralmente.",
                afirmacao: "Com o tempo, passou a depender da IA para todas as tarefas relacionadas ao esporte e agora sente dificuldade em atuar sem essa tecnologia."
            },
            {
                texto: "Apesar de o chat ser uma tecnologia sofisticada, é essencial ficar atento, pois máquinas podem falhar; por isso, revisar o trabalho e acrescentar suas próprias ideias é fundamental.",
                afirmacao: "Entende que a IA pode cometer erros e que os textos gerados devem ser usados apenas como suporte, complementando suas próprias ideias."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();