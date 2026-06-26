javascript
/**
 * ========================================
 * GUARDIÃO DOS POLINIZADORES - JavaScript
 * ========================================
 * 
 * FUNCIONALIDADES:
 * 1. Mensagens dinâmicas baseadas no horário
 * 2. Tooltips interativos com mouseenter/mouseleave
 * 3. Cálculo e atualização de indicadores em tempo real
 * 4. Animações e feedbacks visuais
 * 5. Contador de interações do usuário
 * 6. Navegação suave entre seções
 * 
 * TEMA: Agro Forte, Futuro Sustentável
 * AUTOR: [Seu Nome]
 * DATA: 2026
 * ========================================
 */

// ========================================
// 1. CONFIGURAÇÃO INICIAL
// ========================================

// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // ========================================
    // 2. MENSAGEM DINÂMICA (SAZONAL)
    // ========================================
    
    /**
     * Função que gera mensagens personalizadas baseadas no horário
     * e no contexto da agricultura sustentável
     */
    function gerarMensagemSazonal() {
        const agora = new Date();
        const hora = agora.getHours();
        const dia = agora.getDate();
        const mes = agora.getMonth() + 1; // Mês começa em 0
        
        let saudacao = '';
        let complemento = '';
        let emoji = '';
        
        // Define saudação baseada no horário
        if (hora >= 5 && hora < 12) {
            saudacao = '🌅 Bom dia, guardião da natureza!';
            emoji = '☀️';
        } else if (hora >= 12 && hora < 18) {
            saudacao = '🌞 Boa tarde, protetor dos polinizadores!';
            emoji = '🌻';
        } else if (hora >= 18 && hora < 22) {
            saudacao = '🌅 Boa noite, guardião do agro sustentável!';
            emoji = '🌙';
        } else {
            saudacao = '🌙 Boa madrugada! As abelhas estão descansando...';
            emoji = '⭐';
        }
        
        // Adiciona complemento baseado na estação do ano (Hemisfério Sul)
        if (mes >= 12 || mes <= 2) {
            complemento = 'Verão: época de maior atividade das abelhas! 🌺';
        } else if (mes >= 3 && mes <= 5) {
            complemento = 'Outono: preparando as colmeias para o inverno 🍂';
        } else if (mes >= 6 && mes <= 8) {
            complemento = 'Inverno: as abelhas estão aquecendo a colmeia ❄️';
        } else {
            complemento = 'Primavera: flores em abundância, polinização em alta! 🌸';
        }
        
        // Verifica se é um dia especial
        const diaEspecial = verificarDiaEspecial(dia, mes);
        if (diaEspecial) {
            complemento = diaEspecial;
        }
        
        return `${saudacao} ${emoji} ${complemento}`;
    }
    
    /**
     * Verifica se hoje é um dia especial relacionado ao tema
     */
    function verificarDiaEspecial(dia, mes) {
        // 20 de Maio - Dia Mundial das Abelhas
        if (dia === 20 && mes === 5) {
            return '🎉 Hoje é o Dia Mundial das Abelhas! Celebre os polinizadores!';
        }
        // 5 de Junho - Dia Mundial do Meio Ambiente
        if (dia === 5 && mes === 6) {
            return '🌍 Dia Mundial do Meio Ambiente! Preservar é o caminho!';
        }
        // 22 de Setembro - Primavera
        if (dia === 22 && mes === 9) {
            return '🌸 Primavera chegou! Tempo de flores e polinização!';
        }
        return null;
    }
    
    /**
     * Atualiza a mensagem na interface
     */
    function atualizarMensagem() {
        const mensagemElement = document.getElementById('mensagem-dinamica');
        if (mensagemElement) {
            const mensagem = gerarMensagemSazonal();
            mensagemElement.textContent = mensagem;
            
            // Adiciona efeito de fade para suavidade
            mensagemElement.style.opacity = '0';
            setTimeout(() => {
                mensagemElement.style.opacity = '1';
            }, 100);
        }
    }
    
    // ========================================
    // 3. TOOLTIPS INTERATIVOS
    // ========================================
    
    /**
     * Gerencia a exibição de tooltips com mouseenter/mouseleave
     * Cada área tem dados específicos que são exibidos
     */
    function inicializarTooltips() {
        const areas = document.querySelectorAll('.area-interativa');
        
        areas.forEach(area => {
            // Armazena os dados da área no elemento
            const areaId = area.dataset.area;
            const dados = obterDadosArea(areaId);
            
            // Evento mouseenter - exibe o tooltip com animação
            area.addEventListener('mouseenter', function(e) {
                const tooltip = this.querySelector('.tooltip-area');
                if (tooltip) {
                    // Atualiza o conteúdo com dados dinâmicos
                    atualizarTooltipContent(tooltip, dados);
                    
                    // Adiciona classe para animação
                    tooltip.style.opacity = '1';
                    
                    // Dispara evento de interação
                    registrarInteracao(areaId, 'mouseenter');
                }
            });
            
            // Evento mouseleave - esconde o tooltip
            area.addEventListener('mouseleave', function(e) {
                const tooltip = this.querySelector('.tooltip-area');
                if (tooltip) {
                    tooltip.style.opacity = '0';
                }
            });
        });
    }
    
    /**
     * Retorna dados específicos de cada área da fazenda
     */
    function obterDadosArea(areaId) {
        const dados = {
            frutas: {
                titulo: '🐝 Impacto dos Polinizadores',
                texto: 'As abelhas aumentam a produção de frutas em até <strong>30%</strong>!',
                metricas: [
                    { label: 'Produção atual:', value: '2.450 kg/ha' },
                    { label: 'Com polinização:', value: '3.185 kg/ha' }
                ],
                beneficio: '🌼 +30% de produção'
            },
            reserva: {
                titulo: '🌿 Conexão com a Produção',
                texto: 'A mata nativa abriga <strong>85%</strong> dos polinizadores da região!',
                metricas: [
                    { label: 'Espécies de abelhas:', value: '47 espécies' },
                    { label: 'Raio de influência:', value: '2.5 km' }
                ],
                beneficio: '🔄 Polinização cruzada garantida'
            },
            graos: {
                titulo: '🌽 Benefícios da Polinização',
                texto: 'A proximidade com a reserva aumenta a produtividade em <strong>25%</strong>',
                metricas: [
                    { label: 'Produção atual:', value: '4.200 kg/ha' },
                    { label: 'Com polinização:', value: '5.250 kg/ha' }
                ],
                beneficio: '🌻 +1.050 kg/ha'
            },
            apiario: {
                titulo: '🍯 Produção e Sustentabilidade',
                texto: 'Cada colmeia poliniza até <strong>3 hectares</strong> de plantação',
                metricas: [
                    { label: 'Mel produzido:', value: '2.800 kg/ano' },
                    { label: 'Área polinizada:', value: '105 hectares' }
                ],
                beneficio: '💰 R$ 42.000/ano em mel'
            },
            corredor: {
                titulo: '🔄 Conectividade da Paisagem',
                texto: 'Conecta a reserva ao pomar, aumentando a diversidade de polinizadores',
                metricas: [
                    { label: 'Espécies circulantes:', value: '32 espécies' },
                    { label: 'Taxa de polinização:', value: '95%' }
                ],
                beneficio: '🌺 Biodiversidade em movimento'
            }
        };
        
        return dados[areaId] || dados.frutas;
    }
    
    /**
     * Atualiza o conteúdo do tooltip com os dados da área
     */
    function atualizarTooltipContent(tooltip, dados) {
        const content = tooltip.querySelector('.tooltip-content');
        if (content) {
            // Atualiza título
            const titulo = content.querySelector('h4');
            if (titulo) titulo.textContent = dados.titulo;
            
            // Atualiza texto principal
            const texto = content.querySelector('.tooltip-text');
            if (texto) texto.innerHTML = dados.texto;
            
            // Atualiza métricas
            const metricas = content.querySelectorAll('.tooltip-metric');
            metricas.forEach((metrica, index) => {
                if (dados.metricas[index]) {
                    const label = metrica.querySelector('.metric-label');
                    const value = metrica.querySelector('.metric-value');
                    if (label) label.textContent = dados.metricas[index].label;
                    if (value) value.textContent = dados.metricas[index].value;
                }
            });
            
            // Atualiza benefício
            const beneficio = content.querySelector('.tooltip-beneficio span');
            if (beneficio) beneficio.textContent = dados.beneficio;
        }
    }
    
    // ========================================
    // 4. INDICADORES DINÂMICOS
    // ========================================
    
    /**
     * Calcula e atualiza os indicadores gerais da fazenda
     */
    function atualizarIndicadores() {
        // Simula dados dinâmicos que seriam de uma API ou banco de dados
        const dadosFazenda = {
            producaoTotal: calcularProducaoTotal(),
            especiesPolinizadores: calcularEspeciesPolinizadores(),
            areaPreservada: calcularAreaPreservada()
        };
        
        // Atualiza os elementos na interface
        const elementos = {
            'total-producao': dadosFazenda.producaoTotal,
            'total-polinizadores': dadosFazenda.especiesPolinizadores,
            'area-verde': dadosFazenda.areaPreservada
        };
        
        Object.entries(elementos).forEach(([id, valor]) => {
            const elemento = document.getElementById(id);
            if (elemento) {
                // Animação de contagem
                animarContador(elemento, parseInt(valor));
            }
        });
    }
    
    /**
     * Calcula a produção total simulada
     */
    function calcularProducaoTotal() {
        const producoes = [2450, 4200, 1850, 3200, 2800];
        const total = producoes.reduce((acc, val) => acc + val, 0);
        return total.toLocaleString('pt-BR');
    }
    
    /**
     * Calcula o número de espécies de polinizadores
     */
    function calcularEspeciesPolinizadores() {
        // Simula dados dinâmicos
        const especiesBase = 120;
        const variacao = Math.floor(Math.random() * 30);
        return especiesBase + variacao;
    }
    
    /**
     * Calcula a área preservada em hectares
     */
    function calcularAreaPreservada() {
        const areas = [45, 30, 25, 15, 20];
        const total = areas.reduce((acc, val) => acc + val, 0);
        return total;
    }
    
    /**
     * Anima um contador de 0 até o valor final
     */
    function animarContador(elemento, valorFinal) {
        const duracao = 1500; // 1.5 segundos
        const inicio = performance.now();
        const valorInicial = 0;
        
        function atualizar(tempoAtual) {
            const progresso = Math.min((tempoAtual - inicio) / duracao, 1);
            const valorAtual = Math.floor(progresso * valorFinal);
            elemento.textContent = valorAtual;
            
            if (progresso < 1) {
                requestAnimationFrame(atualizar);
            } else {
                elemento.textContent = valorFinal;
            }
        }
        
        requestAnimationFrame(atualizar);
    }
    
    // ========================================
    // 5. REGISTRO DE INTERAÇÕES DO USUÁRIO
    // ========================================
    
    let interacoes = {
        total: 0,
        areas: {},
        ultimaInteracao: null
    };
    
    /**
     * Registra cada interação do usuário com as áreas
     */
    function registrarInteracao(areaId, tipo) {
        interacoes.total++;
        
        if (!interacoes.areas[areaId]) {
            interacoes.areas[areaId] = 0;
        }
        interacoes.areas[areaId]++;
        
        interacoes.ultimaInteracao = {
            area: areaId,
            tipo: tipo,
            timestamp: new Date().toLocaleTimeString()
        };
        
        // Se atingir 10 interações, exibe uma mensagem especial
        if (interacoes.total === 10) {
            exibirMensagemEspecial();
        }
        
        // Atualiza contador na interface (se existir)
        const contador = document.getElementById('contador-interacoes');
        if (contador) {
            contador.textContent = interacoes.total;
        }
    }
    
    /**
     * Exibe mensagem especial após várias interações
     */
    function exibirMensagemEspecial() {
        const mensagens = [
            '🐝 Você já descobriu 10 curiosidades sobre os polinizadores!',
            '🌻 Parabéns! Você está aprendendo sobre a importância das abelhas!',
            '🌍 Cada interação é um passo para um futuro mais sustentável!'
        ];
        
        const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
        
        // Cria elemento de notificação
        const notificacao = document.createElement('div');
        notificacao.className = 'notificacao-especial';
        notificacao.textContent = mensagem;
        notificacao.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--verde-escuro);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.3);
            z-index: 9999;
            animation: slideIn 0.5s ease;
            max-width: 350px;
            font-weight: 500;
        `;
        
        document.body.appendChild(notificacao);
        
        // Remove após 4 segundos
        setTimeout(() => {
            notificacao.style.opacity = '0';
            notificacao.style.transition = 'opacity 0.5s';
            setTimeout(() => {
                notificacao.remove();
            }, 500);
        }, 4000);
    }
    
    // ========================================
    // 6. NAVEGAÇÃO SUAVE
    // ========================================
    
    /**
     * Adiciona navegação suave para os links do menu
     */
    function inicializarNavegacao() {
        const links = document.querySelectorAll('.nav-link');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Remove active de todos
                    links.forEach(l => l.classList.remove('active'));
                    // Adiciona active ao clicado
                    this.classList.add('active');
                    
                    // Scroll suave
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // ========================================
    // 7. EFETOS DE POLINIZADORES (BÔNUS)
    // ========================================
    
    /**
     * Cria partículas de polinizadores que flutuam na tela
     * Efeito visual temático
     */
    function criarPolinizadores() {
        const polinizadores = ['🐝', '🦋', '🐞', '🪲'];
        const container = document.querySelector('.section-hero');
        
        if (!container) return;
        
        // Cria até 5 polinizadores flutuantes
        for (let i = 0; i < 5; i++) {
            const polinizador = document.createElement('span');
            polinizador.textContent = polinizadores[i % polinizadores.length];
            polinizador.style.cssText = `
                position: absolute;
                font-size: ${1.5 + Math.random() * 2}rem;
                opacity: 0.6;
                pointer-events: none;
                animation: flutuar ${20 + Math.random() * 20}s linear infinite;
                left: ${Math.random() * 90}%;
                top: ${Math.random() * 80 + 10}%;
                animation-delay: ${Math.random() * 10}s;
            `;
            
            container.style.position = 'relative';
            container.appendChild(polinizador);
        }
    }
    
    /**
     * Adiciona a animação de flutuação via CSS
     * (Já definida no CSS, apenas garante que existe)
     */
    function adicionarAnimacaoFlutuar() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes flutuar {
                0% {
                    transform: translate(0, 0) rotate(0deg) scale(1);
                }
                25% {
                    transform: translate(30px, -50px) rotate(90deg) scale(1.2);
                }
                50% {
                    transform: translate(-20px, -100px) rotate(180deg) scale(0.8);
                }
                75% {
                    transform: translate(40px, -50px) rotate(270deg) scale(1.1);
                }
                100% {
                    transform: translate(0, 0) rotate(360deg) scale(1);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ========================================
    // 8. VALIDAÇÃO DE INTERAÇÃO COM O DOM
    // ========================================
    
    /**
     * Verifica se todos os elementos necessários existem
     * e registra no console para debug
     */
    function verificarElementos() {
        const elementos = [
            'mensagem-dinamica',
            'total-producao',
            'total-polinizadores',
            'area-verde'
        ];
        
        elementos.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                console.log(`✅ Elemento encontrado: #${id}`);
            } else {
                console.warn(`⚠️ Elemento não encontrado: #${id}`);
            }
        });
    }
    
    // ========================================
    // 9. INICIALIZAÇÃO DE TODAS AS FUNÇÕES
    // ========================================
    
    /**
     * Função principal que inicia todas as funcionalidades
     */
    function init() {
        console.log('🐝 Guardião dos Polinizadores - Inicializado!');
        console.log('📅 Data:', new Date().toLocaleDateString('pt-BR'));
        console.log('⏰ Hora:', new Date().toLocaleTimeString('pt-BR'));
        
        // Verifica elementos
        verificarElementos();
        
        // Inicializa mensagem dinâmica
        atualizarMensagem();
        
        // Atualiza a cada 30 minutos
        setInterval(atualizarMensagem, 1800000);
        
        // Inicializa tooltips
        inicializarTooltips();
        
        // Atualiza indicadores
        atualizarIndicadores();
        
        // Reinicia indicadores a cada 60 segundos (simulação)
        setInterval(atualizarIndicadores, 60000);
        
        // Inicializa navegação
        inicializarNavegacao();
        
        // Cria efeitos visuais
        adicionarAnimacaoFlutuar();
        criarPolinizadores();
        
        // Adiciona evento de scroll para atualizar navegação
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
        
        // Log de interações
        console.log('🔍 Passe o mouse sobre as áreas da fazenda para explorar!');
        console.log('📊 Os indicadores são atualizados automaticamente.');
        console.log('🐝 Boa navegação!');
    }
    
    // ========================================
    // 10. EXPOSIÇÃO DE FUNÇÕES NO CONSOLE
    // ========================================
    
    // Disponibiliza funções para debug no console
    window.guardiao = {
        interacoes: interacoes,
        atualizarMensagem: atualizarMensagem,
        atualizarIndicadores: atualizarIndicadores,
        gerarMensagemSazonal: gerarMensagemSazonal,
        obterDadosArea: obterDadosArea
    };
    
    // ========================================
    // 11. INICIAR APLICAÇÃO
    // ========================================
    
    // Inicia tudo!
    init();
    
    // Adiciona evento para quando a página for totalmente carregada
    window.addEventListener('load', function() {
        console.log('🚀 Aplicação completamente carregada!');
        console.log('📊 Dados disponíveis no objeto window.guardiao');
    });
    
    // ========================================
    // 12. TRATAMENTO DE ERROS (BONUS)
    // ========================================
    
    /**
     * Tratamento global de erros para evitar quebra da aplicação
     */
    window.addEventListener('error', function(e) {
        console.error('❌ Erro capturado:', e.message);
        console.log('🔄 A aplicação continua funcionando normalmente.');
    });
    
}); // Fim do DOMContentLoaded

/**
 * ========================================
 * EXTRA: CONTADOR DE INTERAÇÕES VISUAL
 * ========================================
 * 
 * Esta função cria um badge flutuante mostrando
 * quantas interações o usuário já fez
 */

(function criarBadgeInteracoes() {
    // Aguarda o DOM carregar
    setTimeout(() => {
        const badge = document.createElement('div');
        badge.id = 'badge-interacoes';
        badge.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: var(--amarelo-mel);
            color: var(--verde-escuro);
            padding: 12px 16px;
            border-radius: 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 9998;
            font-weight: 700;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: transform 0.3s ease;
        `;
        
        badge.innerHTML = `
            🐝 Interações: <span id="contador-interacoes">0</span>
        `;
        
        document.body.appendChild(badge);
        
        // Animação de pulsação
        const style = document.createElement('style');
        style.textContent = `
            #badge-interacoes:hover {
                transform: scale(1.1);
            }
            
            @keyframes pulse-badge {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            #badge-interacoes.atualizado {
                animation: pulse-badge 0.3s ease;
            }
        `;
        document.head.appendChild(style);
        
        // Atualiza o badge quando houver interações
        const observer = new MutationObserver(() => {
            const badge = document.getElementById('badge-interacoes');
            if (badge) {
                badge.classList.remove('atualizado');
                setTimeout(() => {
                    badge.classList.add('atualizado');
                }, 10);
            }
        });
        
        // Observa o contador de interações
        const contador = document.getElementById('contador-interacoes');
        if (contador) {
            observer.observe(contador, { childList: true, characterData: true });
        }
    }, 500);
})();

/**
 * ========================================
 * FIM DO SCRIPT
 * ========================================
 * 
 * RESUMO DAS FUNCIONALIDADES IMPLEMENTADAS:
 * 
 * ✅ Mensagens sazonais que mudam com horário e data
 * ✅ Tooltips interativos com mouseenter/mouseleave
 * ✅ Dados dinâmicos por área da fazenda
 * ✅ Indicadores atualizados em tempo real
 * ✅ Contador de interações do usuário
 * ✅ Navegação suave entre seções
 * ✅ Efeitos visuais de polinizadores
 * ✅ Notificações especiais após múltiplas interações
 * ✅ Badge flutuante com contador
 * ✅ Tratamento de erros robusto
 * ✅ Código comentado e organizado
 * ✅ Funcionalidades expostas no console para debug
 * 
 * ========================================
 */
