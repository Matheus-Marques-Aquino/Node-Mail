var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var emails = ['ellasmar@ig.com.br', 'fabiobuso@icloud.com', 'clau.maximo@hotmail.com', 'claudiosilva20022@gmail.com', 'comercialhidroforte@gmail.com', 'deltacalhas@uol.com.br', 'fenixesquadrias@icloud.com', 'fibramar.bertioga@hotmail.com', 'grupo@danimar.com.br', 'hiltonoliveira664@gmail.com', 'ivanildo.ist@gmail.com', 'jabatista97@outlook.com', 'madesp@madespmadeiras.com.br', 'orizonsp@terra.com.br', 'otelles@terra.com.br', 'pauloaraujo_as@hotmail.com', 'plugecia.vendas@gmail.com', 'ricardo_sud1@hotmail.com', 'santos.viniciussilva1@gmail.com', 'slsalcci@uol.com.br', 'somar@somarbertioga.com.br', 'somarmc@uol.com.br', 'toni.12sf@gmail.com', 'vanderleia.conceicao@hotmail.com', 'viana.magueta@uol.com.br', 'viviane_love23@hotmail.com', 'zilmamateriais@gmail.com', 'a.f.neves@bol.com.br', 'aguadafonte@gmail.com', 'anderson.brecha@gmail.com', 'atsafuso@gmail.com', 'beto9.silva@gmail.com', 'casalustre2012@hotmail.com', 'deise2222@hotmail.com', 'drika.lovejesus@hotmail.com', 'e.tbarbosa@hotmail.com', 'ecobaixada@gmail.com', 'f.r.materias@outlook.com', 'fbfeletrica@hotmail.com', 'ferrazvitor76@gmail.com', 'gerlane_ysn@hotmail.com', 'jeretecnicopc@bol.com.br', 'katiaferreira26@hotmail.com', 'lclvalente@hotmail.com', 'marcelo_vilasoco@hotmail.com', 'm-denise@hotmail.com', 'nilzarosa_9@hotmail.com', 'obscarvalho@bol.com.br', 'proalge@gmail.com', 'reisallesjr@hotmail.com', 'rogeriosl.30@hotmail.com', 'selminha013@outlook.com.br', 'xuxamateriais@hotmail.com', 'z_lsilva@hotmail.com', 'diogonicoletti@yahoo.com.br', 'adm.nilson@bol.com.br', 'alextastico@hotmail.com', 'ampla_ctb@hotmail.com', 'anapaula451@terra.com.br', 'anapaulasantos.97@hotmail.com', 'anderson696969@hotmail.com', 'aninhamorais.gja@gmail.com', 'baixadamadeiras@hotmail.com', 'belcristina1967@outlook.com', 'biaguaruja@ig.com.br', 'brasilvarejos@hotmail.com', 'bredday204@gmail.com', 'ciron1982@hotmail.com', 'clovisferreiralima1980@hotmail.com', 'construirguaruja@hotmail.com', 'coperescritorium@uol.com.br', 'damiao-desouza@bol.com.br', 'daugival@hotmail.com', 'depositodopovo@uol.com.br', 'diego.diniz23@hotmail.com', 'fb.materiais@outlook.com', 'fenix.janaina@gmail.com', 'fernandafernandeslima6@gmail.com', 'fernando.miranda2017@hotmail.com', 'figlioliaguiar@hotmail.com', 'gi_gois2@hotmail.com', 'gilvan-marcenaria@hotmail.com', 'granadadistribuidora@hotmail.com', 'grandeza_construcao@hotmail.com', 'grasufrio@yahoo.com.br', 'gustavosanches@aguaviva.bio.br', 'henriqueleone@uol.com.br', 'irmaangelacardoso@gmail.com', 'irmaosfreire@yahoo.com.br', 'jaciane_39@hotmail.com', 'jazzteixeira@gmail.com', 'jfmedeiros@live.com', 'jlmaterialdeconstrucao965@outlook.com', 'joanita_jks@hotmail.com', 'jrsbrand@hotmail.com', 'karen.costa.stos@hotmail.com', 'kassiasanttos@gmail.com', 'katiamueller@zipmail.com.br', 'laerciosantos_fox@hotmail.com', 'laiana.laura2014@gmail.com', 'lancaconcreto@gmail.com', 'layne_gois2@hotmail.com', 'leandro_batista2013@hotmail.com', 'leandropaschoalin@gmail.com', 'leomateriais2017@outlook.com', 'lioliveiramartins85@gmail.com', 'lisboa.materiais@hotmail.com', 'litoralforrosedivisorias@hotmail.com', 'lojacaravelas@uol.com.br', 'lsamateriais@outlook.com', 'luciana_dantasfarias@hotmail.com', 'malzoninha@hotmail.com', 'marialuizabmfm06@gmail.com', 'marinalva.marreira@hotmail.com', 'masantos2000@hotmail.com', 'mcmateriaisparaconstrucao14@gmail.com', 'mcrguaruja781@gmail.com', 'monteiro_gilvan@yahoo.com.br', 'morumbi-madeiras@bol.com.br', 'msa@uol.com.br', 'mwykl@ig.com.br', 'nakazonemateriais@hotmail.com', 'nara2029campos@gmail.com', 'nascimento_guilherme@hotmail.com', 'netopolibrilho@hotmail.com', 'pimentelconstrucoes_gja@hotmail.com', 'rafael1298@gmail.com', 'renilson.santana@hotmail.com', 'ricardomm0709@hotmail.com', 'rodrigolopesdasilva@hotmail.com', 'rosane_irmao@hotmail.com', 'serjaoguaruja@gmail.com', 'silvinha_blanco@hotmail.com', 'silvoncleiton@hotmail.com', 'sususilvaesporte@outlook.com', 'svieira@iron.com.br', 'thalita0210@hotmail.com', 'ubaldom1@uol.com.br', 'vandammebandit@gmail.com', 'vanessamedinaconstrucoes@gmail.com', 'vitor_franca32@hotmail.com', 'walmirm40@gmail.com', 'wellingthon_fratelli@hotmail.com', 'william.miguelr@outlook.com', 'wilson.w77@hotmail.com', 'zzizza2@hotmail.com', 'atendimento.definity@gmail.com', 'casaamarelaloja1@gmail.com', 'fabianovegh@gmail.com', 'adaovendasexternas@bol.com.br', 'adm@rubao.com.br', 'afandrade@gmail.com', 'albertorepresentacoes@yahoo.com.br', 'alexandre@bechelli.com.br', 'alexandregoulart2015@gmail.com', 'almeida_a@live.com', 'auditor@casaraomc.com.br', 'barison.barison@hotmail.com', 'belartes@uol.com.br', 'beto.materiaisparaconstrucao@gmail.com', 'biareis_jesus@hotmail.com', 'borges_band@yahoo.com.br', 'bruna.munizz8138@gmail.com', 'c.nepomoceno@gmail.com', 'caiquecorradini@gmail.com', 'casadoconstrutorloja1@gmail.com', 'casasouza.ita@gmail.com', 'conitanhaem@uol.com.br', 'dbressan1999@gmail.com', 'dk_alves.paulino@hotmail.com', 'elianepisos@bol.com.br', 'emiliapiresjl@yahoo.com.br', 'ericomini@uol.com.br', 'escritoriosavoy@uol.com.br', 'fenixdistribuidora20@gmail.com', 'financeiro@msj.com.br', 'gabrielcondota@gmail.com', 'gaivotamateriais@hotmail.com', 'grochanke.leticia@gmail.com', 'guida_mribeiro@hotmail.com', 'carlosfernanda19@hotmail.com', 'itabarro01@gmail.com', 'jackson_belli@yahoo.com.br', 'jasa_gonzalez@hotmail.com', 'jeanmartinez@live.com', 'jhonyperuibe89@hotmail.com', 'jowalblocos@hotmail.com', 'jura.fera@hotmail.com', 'juridicobelartes@uol.com.br', 'kleber.tavares.lima@hotmail.com', 'leh.mionsk8@hotmail.com', 'lojasilcoroli@gmail.com', 'lucianogel@hotmail.com', 'luizflavioguerra@gmail.com', 'lupla@ig.com.br', 'marcelino36@gmail.com', 'marciocomercialgaivota@gmail.com', 'marimar_ita@hotmail.com', 'marinezdomingos@gmail.com', 'marymarconstruindoseular@gmail.com', 'mbcconstrucao@hotmail.com', 'mr.pimenta@yahoo.com.br', 'mtmaterial2011@hotmail.com', 'mundodaconstrucaofinanceiro@gmail.com', 'nadjane.matos@hotmail.com', 'nanda-couto@hotmail.com', 'pizzolboni@gmail.com', 'porpetadistribuidorasp@gmail.com', 'rcdasilvatransportes@gmail.com', 'reginaabidjan@gmail.com', 'ricardocoelhomarmores@hotmail.com', 'riluma@ig.com.br', 'rnpostepadrao@hotmail.com', 'rogeriomurad@ig.com.br', 'savisp@hotmail.com', 'singulardeptovendas@gmail.com', 'sotelha.ita@hotmail.com', 'thiagoricomini@gmail.com', 'tiago.prattes@hotmail.com', 'tudoparasuaconstrucao881@hotmail.com', 'val.valeriaribeiro@gmail.com', 'vieiraclaudiovieira@hotmail.com', 'vivi-a-chaves1976@hotmail.com', 'willianlimavieiradasilva@gmail.com', 'andersonvenancio77@hotmail.com', 'arna198@hotmail.com', 'c.betel@bol.com.br', 'carlosanged@gmail.com', 'caua.gs.96@outlook.com', 'claudiahgodoy@gmail.com', 'ctcnardi@uol.com.br', 'datavale@yahoo.com.br', 'depositonovaesperanca2019@gmail.com', 'digao.joga10@hotmail.com', 'eduardomennucci@uol.com.br', 'fakrotinasadm@hotmail.com', 'isisfailes@hotmail.com', 'jaquelineleitecampos@gmail.com', 'jefersonjesus1889@gmail.com', 'jjapadilha@hotmail.com', 'joaquimesteves@terra.com.br', 'ldinfo@uol.com.br', 'liderfiscal@live.com', 'lindanovais@gmail.com', 'portaldenegocios@uol.com.br', 'rsmateriaisparaconstrucao@gmail.com', 'santosemeira@gmail.com', 'selkisvitoria@gmail.com', 'sergio@comercialazevedo.com.br', 'w-aimports@hotmail.com', 'a.mariano@uol.com.br', 'adcmeyla@uol.com.br', 'aplwks@bol.com.br', 'casa_barao@outlook.com', 'casanovadeperuibe@gmail.com', 'chpcarioca@hotmail.com', 'construcasadeperuibe2@gmail.com', 'drica_rocha01@hotmail.com', 'eder_tety@hotmail.com', 'escritoriothais@gmail.com', 'franco.com.eletrica@hotmail.com', 'carol_turbina@hotmail.com', 'hkikuta@uol.com.br', 'horacio@lojasneon.com.br', 'jcbarreto@uol.com.br', 'jmaldonadobalthazar@yahoo.com.br', 'jnhobatista@hotmail.com', 'joaovictorpamplona@hotmail.com', 'jose.gomes.12@hotmail.com', 'josecarlos1951@bol.com.br', 'm.mestriner@terra.com.br', 'mapcom@uol.com.br', 'mccaraminguava@hotmail.com', 'mrloja@hotmail.com', 'neipbe@uol.com.br', 'orgatecperuibe@uol.com.br', 'peritaperuibe@uol.com.br', 'peruibe@igui.com', 'portaldenegocios@terra.com.br', 'rafaelblener@hotmail.com', 'rafaelmarrone@outlook.com', 'rcm.construcoes@hotmail.com', 'rioperuibe@gmail.com', 'rodolfoflorentinolima@yahoo.com.br', 'rogerios103@gmail.com', 'siac-oc@uol.com.br', 'simoneeelias@gmail.com', 'taj.pastilhas@hotmail.com', 'tiago.peruibe_18@hotmail.com', 'zfrancisco701@yahoo.com.br', 'dutraserralheriametalurgica@gmail.com', 'a.r.ssistemaeuropeu@hotmail.com', 'agendasgabrielm@gmail.com', 'ale.cros@gmail.com', 'alessandrax2011@hotmail.com', 'alexfsantosjesus@gmail.com', 'alinewecke@hotmail.com', 'anasantosconstrucao80@outlook.com', 'angelito.duarte@hotmail.com', 'antonioferreira6655@hotmail.com', 'azuppo@bol.com.br', 'bazardosparafusos@hotmail.com', 'beraguas.andre@gmail.com', 'carlos.pereira2011@outlook.com', 'carmenodoro@hotmail.com', 'casamar01@live.com', 'cdrickdias1@gmail.com', 'cesar24hstransportes@hotmail.com', 'chammasconstrutoira@hotmail.com', 'cicero.marmores@hotmail.com', 'cleucilara@uol.com.br', 'comendadorcesar@gmail.com', 'conceisouza@hotmail.com', 'cwassen@gmail.com', 'dani_t.l@hotmail.com', 'denusia42@gmail.com', 'depositogloriamar2010@hotmail.com', 'didi.2019.oliveira2019@gmail.com', 'diforgesso@bol.com.br', 'dino.r.cidade@gmail.com', 'dougfani_30@hotmail.com', 'douglasyuassaki@hotmail.com', 'elaine@ellicon.com.br', 'eletrica.seliga@hotmail.com', 'elianebelinha1973@gmail.com', 'endryw_tkd@hotmail.com', 'eriko_oa@hotmail.com', 'escalaralum@terra.com.br', 'escritoriopg@hotmail.com', 'fbatista1984@hotmail.com', 'fiscalizacao@escudoreal.com.br', 'franciscooliveiraporto@hotmail.com', 'fredesmendonca@gmail.com', 'giullianocucick@bol.com.br', 'gomessilva74@hotmail.com', 'gruporh@uol.com.br', 'gustavoamorim442@gmail.com', 'henrique_setembrino@hotmail.com', 'henriqueferreira0310@gmail.com', 'igor.d.ruggeri@gmail.com', 'jcarlosnto55@gmail.com', 'jmcomercial10@gmail.com', 'jos.oliveira2010@hotmail.com', 'jose10861@hotmail.com', 'josecarlos@ferropronto.com.br', 'jsantostransportes@hotmail.com', 'karolayne_scandinari@hotmail.com', 'kgefilhos@yahoo.com.br', 'leandrok9marinho@yahoo.com.br', 'leandrotdsjv@hotmail.com', 'luizi45@hotmail.com', 'marilana_78@hotmail.com', 'marissa_gaby@hotmail.com', 'meiramaciel@outlook.com', 'milmatos@uol.com.br', 'ml2rosario@hotmail.com', 'moreira.melo12@gmail.com', 'msimoveisltda@gmail.com', 'muller@iron.com.br', 'narcmic@hotmail.com', 'neucilara@uol.com.br', 'novohorizonte56@gmail.com', 'padethi@uol.com.br', 'paisefilhosserralheria@outlook.com', 'paulogiovani@yahoo.com.br', 'quadrosgomes69@uol.com.br', 'rainhadosparafusos@hotmail.com', 'renata.pini@gmail.com', 'rocchaneto@hotmail.com', 'rodriguesbrother@hotmail.com', 'rpwls@hotmail.com', 'rudivaniasantos29@gmail.com', 'samuelll44@hotmail.com', 'sandra.fernandes22@hotmail.com', 'sandy.cajaiba@hotmail.com', 'saojorgedeposito2018@gmail.com', 'sbaluminio@hotmail.com', 'selma21teixeira@gmail.com', 'sergio.fiorin@uol.com.br', 'shalom.ceramica@gmail.com', 'silas.cesar54@gmail.com', 'simone-leonardosilva@hotmail.com', 'solajesh8@bol.com.br', 'suati@tgn.com.br', 'tiago.honda1libra@hotmail.com', 'trindade-rp@bol.com.br', 'uniservc@hotmail.com', 'valpossidonio@gmail.com', 'vanderlei.bezerra@hotmail.com', 'vera5438@terra.com.br', 'vhbonilha@gmail.com', 'viniciusvhnbr@gmail.com', 'wencespraiagrande@gmail.com', 'wesley_costa2015@hotmail.com', 'willian_fuba@hotmail.com', 'accounty@uol.com.br', 'bolivar@hotmail.com', 'acconstrutor@hotmail.com', 'adm@constecpiscinas.com.br', 'admpositano@gmail.com', 'ailtongatao2009@hotmail.com', 'alex.materiaisparaconstrucao@hotmail.com', 'anaandrade3235@gmail.com', 'banluxevendas@gmail.com', 'bruninhomp10@hotmail.com', 'brunorafaelgarcia@hotmail.com', 'carlacris395@gmail.com', 'carmennathang@hotmail.com', 'carvalho86.ana@gmail.com', 'cassiarafaela@icloud.com', 'ccardoso@iron.com.br', 'claudio@meinbergepizarro.com.br', 'comercial.steinconstrutora@gmail.com', 'construfort.santos@gmail.com', 'ctabilio@terra.com.br', 'daniela_grigorio@hotmail.com', 'daniloquintalalves@hotmail.com', 'dennyaraujo@hotmail.com', 'denyhs@bol.com.br', 'drika-cvt@hotmail.com', 'dusantista85@gmail.com', 'edisonnobrega@hotmail.com', 'edu75@uol.com.br', 'eduardo.edsouza@gmail.com', 'evolucaosocietaria@uol.com.br', 'examesantos@uol.com.br', 'exata.santos@outlook.com', 'felipepratalli@gmail.com', 'fernando@atpbrasil.net', 'fernando2390@hotmail.com', 'financeiro@revestimentta.com.br', 'franco.reforma@gmail.com', 'gorgulh1@terra.com.br', 'gpalagi@uol.com.br', 'gusthenriquesantos@hotmail.com', 'hebinho.railma@gmail.com', 'henrique_nextel100@hotmail.com', 'hiltonfigueira@terra.com.br', 'hmbrazil@gmail.com', 'humberto@albasa.com.br', 'ibgme@hotmail.com', 'ilka2012@hotmail.com', 'jair_serra@hotmail.com', 'janaina-trabuco@live.com', 'jbmg@zipmail.com.br', 'joao.abitante@terra.com.br', 'jocelinovsf@terra.com.br', 'jonathanpulis1@gmail.com', 'joosy.santana@yahoo.com.br', 'keller.mazini@hotmail.com', 'lualves272@hotmail.com', 'luisnegrini@hotmail.com', 'luiz@ferro.com.br', 'majo002@gmail.com', 'marcela.silvia@uol.com.br', 'marcelo.a@mabrubombas.com.br', 'marcelogardenal@uol.com.br', 'marsol.santos@hotmail.com', 'mjm.materiais@bol.com.br', 'moreirajacy919@gmail.com', 'munic.martins@madeirasmj.com.br', 'murilo.souza3773@gmail.com', 'nivapego@hotmail.com.br', 'odenirfonseca@yahoo.com.br', 'okbelmeire@yahoo.com.br', 'osnidofutebol@hotmail.com', 'piovezancorretor@gmail.com', 'quasardrones@gmail.com', 'renatamrf@gmail.com', 'renato@redcasa.com.br', 'rongelioduquedesouza@gmail.com', 'santos@tintassaomiguel.com.br', 'santosconstrucoes1@hotmail.com', 'servsos2010@hotmail.com', 'setemarcomercial@gmail.com', 'simoesrepresentacoes@gmail.com', 'solucaoferragens@hotmail.com', 'solucoes@solucoescenter.com.br', 'stsmaterialconstrucaodiretoria@outlook.com', 'tadeugabrielsantos@hotmail.com', 'tomazearaujo7@gmail.com', 'toninhosimoes45@hotmail.com', 'tuliobezerra3296@gmail.com', 'viabrasilrh@uol.com.br', 'vini_cristhian@hotmail.com', 'vitalcom_repres@outlook.com.br', 'vivihbtomaz@hotmail.com', 'whelingtonalves@gmail.com', 'fabiano1976@bol.com.br', 'ademariodasilvaandrade@gmail.com', 'alessandraqueiroz573@gmail.com', 'alexsomoral@bol.com.br', 'amanda_rodrigues_18@hotmail.com', 'anderson_showdebola@hotmail.com', 'apiluna@hotmail.com', 'apolosv@litoral.com.br', 'astracon@gmail.com', 'bazarideal.sv@hotmail.com', 'centralpisossv@hotmail.com', 'chagas@iron.com.br', 'cinthia_luiz_geovanna@hotmail.com', 'comercial.at10@hotmail.com', 'coml.mohamed@hotmail.com', 'complaxgesso@hotmail.com', 'construmark.josefa@gmail.com', 'danielablocosme@hotmail.com', 'depositocrismar@hotmail.com', 'derek.seito@yahoo.com.br', 'duuandrade19@gmail.com', 'dvi.2020rocha@hotmail.com', 'edilma.03@gmail.com', 'fernandeseduarte@bol.com.br', 'flavil.minas@hotmail.com', 'franciscofilho1108@hotmail.com', 'g.representacoes13@gmail.com', 'dessa_cunha17@hotmail.com', 'haroldopentagono@hotmail.com', 'ignacio@iron.com.br', 'ines.bat@hotmail.com', 'jair-serrajucesp@hotmail.com', 'jbsaluminios@gmail.com', 'jglabareda@hotmail.com', 'jribeiroramos@uol.com.br', 'kilmer.araujo97@gmail.com', 'lan_housemania@hotmail.com', 'legalizacao@octexcel.com.br', 'leonorbertuso@hotmail.com', 'licorocha@live.com.pt', 'luiz.comercio.servicos@gmail.com', 'materismagnun.casa@outlook.com', 'matheus.santossouza@hotmail.com', 'mayza-gomes@hotmail.com', 'mestredaobra@hotmail.com', 'mkmateriais@hotmail.com', 'ndaaromualdo@hotmail.com', 'niedjasv.mary@hotmail.com', 'paula.cristina.marti@terra.com.br', 'pedrohenrique.1010@hotmail.com', 'petterpinheiro@hotmail.com', 'pioneiro@iron.com.br', 'polo.comercio.geral@gmail.com', 'postessantos013@gmail.com', 'ricardo.raj@hotmail.com', 'robson@francoacj.com.br', 'rosanacristinaschneider@gmail.com', 'rosanadecorar.com@gmail.com', 'rose_sanmarco@hotmail.com', 'rvsantos@hotmail.com', 'santossherla132@gmail.com', 'scinthia013@gmail.com', 'senatecc@gmail.com', 'shara_osala@yahoo.com.br', 'simoneejuca@ig.com.br', 'souza_melicianascimento@outlook.com', 'thiago.rezende26@hotmail.com', 'tiago-comex@ig.com.br', 'unilarc@ig.com.br', 'valmirpaniagua@gmail.com', 'vicotocoatasilveira@gmail.com', 'wcarlosribeiro@hotmail.com', 'weel@cmg.com.br', 'zebraomateriais@uol.com.br', 'zezefigueiredo@terra.com.br', 'contato@depositocianorte.com.br', 'monteiro.tony@hotmail.com', 'vendas@isabelblocos.com.br', 'kalipal@redeconstruviplitoral.com.br', 'vendas@depositopires.com.br', 'vendas@jpperuibe.com.br', 'bazarhodecasa@yahoo.com.br', 'bruno.guimaraes@guimaraesmateriais.com.br', 'contato@redcasa.com.br', 'vendas@asturiasmc.com.br', 'com.donamaria@bol.com.br', 'zebrinha.materiais@hotmail.com'
]
var envios = 1;

var transporter = nodemailer.createTransport(smtpTransport({
  host: 'email-smtp.us-east-1.amazonaws.com',
  port: '465',
  secure: true,
  auth: {
    user: 'AKIAS5AE4XHRZN7R3K5I',
    pass: 'BOY5Wu6YbUbfJpfXKBRYUtpw1dGiJPTO7L5iKkkxyPXJ'
  },
  tls: { rejectUnauthorized: false } 
}));

function send_next(){

  var mailOptions = {
      from: 'MateriaisON <comercial@materiaison.com.br>',
      to: emails[0],
      subject: 'Você está sendo convidado a fazer parte da inovação e da tecnologia !',
      html: `
      <!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="Content-type" content="text/html; charset=UTF-8"> 
	</head>
		
	<body style='width:100%; background-color:transparent; font-family:Tahoma, Sans-serif; margin:0px;'>
		<div style='max-width:675px; margin:0 auto; font-size:19px; border:1px solid #FFDBBF; color:#555555; background-color:#ffffff'>
			<div width='100%' height='220px' style='border-bottom: 1px solid #FF7000'>
				<div style='width:220px; height:220px; margin: auto;'>
					<img width='220px' height='220px' style='margin: auto;' src='https://materiaison-image.s3.amazonaws.com/public/logos/Logo-oficial.png'/>
				</div>
			</div>
			<div style='max-width:675px; padding:0 20px; font-size: 14pt; text-align:center; margin:5px auto;'>
				Chegou a hora!
			</div>
			<div style='max-width:675px; padding:0 20px; font-size: 14pt; text-align:center; margin:5px auto;'>
				Você foi convidado para fazer parte da inovação e da tecnologia.
			</div>
			<img width='100%' style='padding-bottom: 5px;' src='https://materiaison-email-marketing.s3.amazonaws.com/a.png' />
			<div style='max-width:675px; padding:10px 5px 10px 15px ; font-size: 14pt; text-align:center; margin:0px auto;'>
				Olá amigo fornecedor de materiais de construção. Tudo bem? 
			</div>
			<div style='max-width:520px; padding:15x; font-size: 12pt; text-align:center; margin:0px auto;'>
				Você sabia que nesse exato momento tem um cliente precisando comprar com você, mas, que não está te encontrando? 
			</div>
			<div style='max-width:520px; padding:15px; font-size: 12pt; text-align:center; margin:0px auto;'>
				Pensando nisso, criamos um aplicativo desenvolvido <span style='font-weight: bold; color:#FF7000'>PARA VOCÊ</span>.
			</div>
			<div style='width:100%; height:fit-content; padding:25px 0px; text-align:center;'>
				<img width='240px' src='https://materiaison-email-marketing.s3.amazonaws.com/qr_code.png'/>
			</div>
			<div style='max-width:520px; height:fit-content; padding:15px; font-size: 12pt; text-align:center; margin:0px auto;'>
				O nosso aplicativo reúne o melhor da construção civil em um só lugar. <br>
				Os consumidores dos insumos de materiais de construção vão achar você e contratar diversas prestações de serviço no conforto de suas casas. 
			</div>
			<div style='max-width:520px; height:fit-content; padding:15px 0 10px ; font-size: 12pt; text-align:center; margin:0px auto;'>
				Você pode ser visto por seus clientes e conhecido por novos clientes na hora 
				em que eles quiserem e no lugar em que eles estiverem, seja ele de outra cidade 
				ou até mesmo de outro estado. 
			</div>
			<div style='max-width:450px; height:fit-content; padding: 10px 0 15px; font-size: 12pt; text-align:center; margin:0px auto;'>
				Além disso. nossa plataforma tem um sistema de cálculo de frete integrado para facilitar sua vida e alavancar suas vendas. 
			</div>
			<div style='max-width:340px; height:fit-content; padding:25px; font-size: 14pt; text-align:center; margin:0px auto;'>
				Queremos <span style='color:black; font-weight:bold'>VENDER</span> por você
			</div>
			<div style='width:100%; padding:15px 0; background-color:#007BF7; text-align:center; background-image:url(https://materiaison-email-marketing.s3.amazonaws.com/mao4.png); background-position: bottom right; background-size:80px 65px; background-repeat:no-repeat;'>
				<div style='width:fit-content; height:fit-content; margin: auto; color:white'>Conectaremos você a construtoras, <br>fornecedores e sídicos de prédios.</div>
			</div>
			<div style='width:100%; height:fit-content; margin:30px 0; text-align:center;'>
				<a style='text-decoration: none;' href='https://parceiros.materiaison.com.br/cadastre-se'/>
					<img width='210px' style='margin:0 auto' src='https://materiaison-email-marketing.s3.amazonaws.com/saibamais1.png' />
				</a>
			</div>
			<div style='width:100%; max-width:675px ; margin-top:25px; border-top:1px solid #FFDBBF;'>
				<div style='margin:25px auto 0 auto;'>
					<div style='font-size:16px; color:#ff7000; font-weight:bold; text-align:center;'>
						Obrigado!
					</div>
					<div  style='margin:20px 0; font-size:14px; text-align:center; color:#555'>
						Siga nossas redes sociais:
					</div>
					<div style='width:73px; height:20px; margin:0 auto; display:flex'>
						<a href='https://api.whatsapp.com/send?phone=5511995107345' target="_blank" style='text-decoration:none; margin:0 auto;'>
							<img width='20px' height='20px' src='https://materiaison-email-marketing.s3.amazonaws.com/icon-whatsapp.png'>     
						</a>
						<a href='https://facebook.com/materiaison.online' target="_blank" style='text-decoration:none; margin:0 auto;'>
							<img width='20px' height='20px' src='https://materiaison-email-marketing.s3.amazonaws.com/zImcM.png'>  
						</a>
						<a href='https://instagram.com/materiaison_' target="_blank" style='text-decoration:none; margin:0 auto;'>
							<img width='20px' height='20px' src='https://materiaison-email-marketing.s3.amazonaws.com/PGTtN.png'> 
						</a>
					</div>
				</div>
				<a href='https://instagram.com/materiaison_' target="_blank" style='text-decoration:none; width:100%; height:50px;'> 
					<div style='width:100%; height:50px; margin-top:25px; line-height:50px; text-align:center; background-color:#FF7000; color:white'>
						<div style='width:100%; height:50px; text-align:center;  text-decoration:none; color:white'><span>construcao.</span><span>materiaison.</span><span>com.</span><span>br</span></div>
					</div>  
				</a>                  
			</div>
		</div>
	</body>
</html>

    `,
    attachments: [{path: 'C:/projects/node_email/Apresentação\ MateriaisON.pdf'}]};

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          console.log(error);
          console.log('Erro em:' + emails);
      } else {
          console.log('Email número '+ envios +' enviado: ' + emails[0]); 
          emails.shift();
          envios +=1 ;
          if (emails.length > 0) {setTimeout(send_next, 1)}
          else{
            console.log(envios + " emails enviados com sucesso");
          }                    
      }
  });
}
console.log(emails.length + " emails a serem enviados");
send_next();