/*
    Fill this array with a list of names of images
    to be pre-loaded.
*/
var preload = [
  "bg.jpg",
  "cheff.png",
];

/*
    This section pre-loads your images.
    Don't change it unless you know what you're doing.
*/
var preloadObj = new Array(preload.length);
for (var i = 0; i < preload.length; i++)
{
    preloadObj[i] = new Image();
    preloadObj[i].src = preload[i];
}

/* Declare variables for characters, positions, and text blocks here */
var script; // this variable will hold your script
var n; // short for "narrator"
var chefe;

var leftSide;
var rightSide;
var upperCenter;
var rightTop;

sessionStorage.setItem("equilibrioEmocional",0);
sessionStorage.setItem("trabalhoEquipe",0);
sessionStorage.setItem("resiliencia",0);
sessionStorage.setItem("visaoFutura",0);
sessionStorage.setItem("gestaoTempo",0);
sessionStorage.setItem("comunicacao",0);
sessionStorage.setItem("void",0);

/*
    This function must exist, and must have this name
*/
function prepareNovel()
{
    novel.imagePath = "images/"; // path to your image directory
    
    // initialize your characters, positions, and text blocks here
    n = new Character("");
	chefe = new Character("Chefe",{color: "rgb(64, 204, 64)"});
	Homem_Bravo = new Character("Homem Bravo",{color: "rgb(189, 15, 23)"});
    
    leftSide = new Position(0, .75, 0, 1);
    rightSide = new Position(800, 450, 1, 1);
    upperCenter = new Position(0.5, 0.3, 0.5, 0.5);
    rightTop = new Position(1, 0.1, 1, 0);
	centerC = new Position(200,0,0,0);
	
    novel.userVar.nome = sessionStorage.getItem("nome");
    // and put your script commands into this array
    script = [
        label, "start",
        scene, "bg.jpg",
		n, "Hoje é seu primeiro dia na pizzaria. Seu chefe está se aproximando...",
		chefe, {image: "cheff.png", position: centerC},
		chefe, "Olá rapaz! Você é novo aqui, não é mesmo?",
		chefe, "Prazer em conhecê-lo, {{novel.userVar.nome}}. Como hoje é seu primeiro dia irei ajudá-lo.",
		chefe, "A pizzaria está bem cheia hoje! E parece que o queijo mussarela está prestes a acabar...",
		
		label, "menu1",
		menu, [
            "O que você irá fazer?",
            "Substituir o queijo por catupiry.", [jsCall,  { fcn: somarHabilidades, params: [8,4,4,0,6,0] }, jump, "continua1"], 
            "Não fazer nada.", [jsCall,  { fcn: somarHabilidades, params: [6,2,2,0,7,0] }, jump, "continua1"], 
			"Parar a produção de pizzas com queijo.", [jsCall,  { fcn: somarHabilidades, params: [3,3,5,0,3,4] }, jump, "continua1"],
			"Fechar a pizzaria por algumas horas até que seja comprado mais queijo.", [jsCall,  { fcn: somarHabilidades, params: [5,8,9,2,3,4] }, jump, "continua1"],
        ],
		
		label,"continua1",
		chefe, "Certo, agora que resolvemos isso, precisamos nos preocupar com as entregas.",
		chefe, "Parece que os entregadores não estão dando conta, pois temos muitos pedidos para entrega hoje!",
		label, "menu2",
		menu, [
            "O que você irá dizer?",
            "Vamos contratar mais entregadores!", [jsCall,  { fcn: somarHabilidades, params: [5,3,6,0,6,1] }, jump, "continua2"], 
            "Não vamos mais aceitar entregas hoje.", [jsCall,  { fcn: somarHabilidades, params: [3,2,3,0,2,6] }, jump, "continua2"], 
			"Eu ajudarei a entregar as pizzas.", [jsCall,  { fcn: somarHabilidades, params: [9,5,2,0,1,1] }, jump, "continua2"],
			"Vamos avisar a todos que os pedidos vão demorar! ", [jsCall,  { fcn: somarHabilidades, params: [7,2,7,0,8,9] }, jump, "continua2"],
        ],

		label, "continua2",
		chefe, "Certo, agora resolvemos as entregas.",
		chefe, "Um cliente raivoso apareceu!",

		Homem_Bravo, "Meu pedido está errado! Eu pedi quatro-queijos e recebi peperoni!",
		
		label, "menu3",
		menu, [
            "O que você irá dizer?",
            "O erro foi do garçom! Culpe ele!", [jsCall,  { fcn: somarHabilidades, params: [0,-4,-4,0,5,0] }, jump, "continua3"], 
            "Você pediu uma pizza de peperoni! O erro foi seu!", [jsCall,  { fcn: somarHabilidades, params: [2,5,0,6,0,4] }, jump, "continua3"], 
			"Eu irei providenciar uma pizza nova para o senhor!", [jsCall,  { fcn: somarHabilidades, params: [9,3,0,8,0,4] }, jump, "continua3"],
			"Eu não irei providenciar uma pizza nova para o senhor! ", [jsCall,  { fcn: somarHabilidades, params: [6,6,0,7,0,6] }, jump, "continua3"],
        ],

		label, "continua3",
		chefe, "Certo, Resolvido!",
		chefe, "Parece que alguns funcionarios não gostaram de suas atitudes!",
		label, "menu3",
		menu, [
            "O que você irá dizer?",
            "Não posso agradar todos!", [jsCall,  { fcn: somarHabilidades, params: [3,1,4,0,5,2] }, jump, "continua4"], 
            "Diga quem não gostou de minhas atitudes!", [jsCall,  { fcn: somarHabilidades, params: [3,4,5,0,3,7] }, jump, "continua4"], 
			"Então tentarei ser uma pessoa melhor! ", [jsCall,  { fcn: somarHabilidades, params: [3,8,0,0,8,6] }, jump, "continua4"],
			"Não me importo com opinião alheia!", [jsCall,  { fcn: somarHabilidades, params: [3,0,0,0,0,0] }, jump, "continua4"],
        ],

		label, "continua4",
		chefe, "Ufa! Acho que terminamos por hoje. Foi um dia e tanto!",
		chefe, "Bem, estive te observando durante o trabalho. Eu pude traçar um gráfico com as qualidades que notei em você...",
		chefe, "Dê uma olhada no gráfico abaixo!",
		jsCall, { fcn: mostrarGrafico, params: [] },
    ];
}

function somarHabilidades(equilibrioEmocional, trabalhoEquipe, resiliencia, visaoFutura, gestaoTempo, comunicacao){
	equilibrioEmocional = equilibrioEmocional + parseInt(sessionStorage.getItem("equilibrioEmocional"));
	sessionStorage.setItem("equilibrioEmocional",equilibrioEmocional);
	
	trabalhoEquipe = trabalhoEquipe + parseInt(sessionStorage.getItem("trabalhoEquipe"));
	sessionStorage.setItem("trabalhoEquipe",trabalhoEquipe);
	
	resiliencia = resiliencia + parseInt(sessionStorage.getItem("resiliencia"));
	sessionStorage.setItem("resiliencia",resiliencia);
	
	visaoFutura = visaoFutura + parseInt(sessionStorage.getItem("visaoFutura"));
	sessionStorage.setItem("visaoFutura",visaoFutura);
	
	gestaoTempo = gestaoTempo + parseInt(sessionStorage.getItem("gestaoTempo"));
	sessionStorage.setItem("gestaoTempo",gestaoTempo);
	
	comunicacao = comunicacao + parseInt(sessionStorage.getItem("comunicacao"));
	sessionStorage.setItem("comunicacao",comunicacao);

}


function mostrarGrafico(){
	
	postarDados(); 
	
	var radarData = {
		labels : ["Equilibrio Emocional","Trabalho em Equipe","Resiliência","Visão Futura","Gestão do Tempo","Comunicação"],
		datasets : [
			{
				fillColor: "rgba(63,169,245,.1)",
				strokeColor: "rgba(63,169,245,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				data : [sessionStorage.getItem("equilibrioEmocional"),sessionStorage.getItem("trabalhoEquipe"),sessionStorage.getItem("resiliencia"),sessionStorage.getItem("visaoFutura"),sessionStorage.getItem("gestaoTempo"),sessionStorage.getItem("comunicacao")]
			}
		]
	}

	//Chart
	var ctx2 = document.getElementById("radarChart").getContext("2d");
	var myNewChart = new Chart(ctx2).Radar(radarData);
	
	var options = {
		onAnimationComplete: done  /// calls function done() {} at end
	};

	new Chart(ctx2).Radar(radarData,options);
}

function setarGrafico(){
	sessionStorage.setItem("equilibrioEmocional",0);
	sessionStorage.setItem("trabalhoEquipe",0);
	sessionStorage.setItem("resiliencia",0);
	sessionStorage.setItem("visaoFutura",0);
	sessionStorage.setItem("gestaoTempo",0);
	sessionStorage.setItem("comunicacao",0);
}

function postarDados(){
	//https://docs.google.com/forms/d/1JPXhcxJ7kKzYtlYwpDPVmyaHoNp6WKQDQs8fY1DyTz0/viewform
	//https://docs.google.com/spreadsheets/d/1_UycrVzV2rUJlUhYKf-nY8_Xgxu0lBdleRDZqruPTvA/edit#gid=559348360
	nome = sessionStorage.getItem("nome");
	curso = sessionStorage.getItem("curso");
	equilibrio = sessionStorage.getItem("equilibrioEmocional");
	equipe = sessionStorage.getItem("trabalhoEquipe");
	resiliencia = sessionStorage.getItem("resiliencia");
	futura = sessionStorage.getItem("visaoFutura");
	tempo = sessionStorage.getItem("gestaoTempo");
	comunicacao = sessionStorage.getItem("comunicacao");
	email = sessionStorage.getItem("email");
	
	$.post("https://docs.google.com/forms/d/1JPXhcxJ7kKzYtlYwpDPVmyaHoNp6WKQDQs8fY1DyTz0/formResponse", {'entry.1807555282': nome, 'entry.564851120': curso, 'entry.690376126': equilibrio, 'entry.1447559487': equipe, 'entry.481108950': resiliencia, 'entry.883123785': futura, 'entry.541218016': tempo, 'entry.1460838744': comunicacao, 'entry.1626436170': email, 'entry.227566405': 0}, function(data){

	});
}

