    let ad;
    let cliente;
    let datainic;
    let datafinal;
    let investimento;
    let idcadastro;
    let anuncios = [];

    
    const visualizacao = 0.03;
    const click = 0.28; 
    const compartilhamento = 6.6 * click;



    function cadastrar () {

        ad = document.getElementById('ad').value;
        cliente = document.getElementById('client').value;
        datainic = document.getElementById('startdate').value;
        datafinal = document.getElementById('finishdate').value;
        investimento = document.getElementById('money').value;
        
        

        console.log(ad);
        console.log(cliente);
        console.log(datainic);
        console.log(datafinal);
        console.log(investimento);

        registrar(ad, cliente, datainic, datafinal, investimento);



    };
    
     
    function registrar(ad, cliente, datainic, datafinal, investimento) {

        
        let register =
            {
            
            id: anuncios.length,
            anuncio : ad,
            nomecliente : cliente,
            datainicial : datainic,
            datafin : datafinal,
            valorinv : investimento,
            visualizacoes: [calcular()]

            }
        
        anuncios.push(register);

        let storeid = register.id;

        window.alert("Seu anuncio foi cadastrado com sucesso. O id do seu anuncio:", storeid);

        

        console.log(anuncios);
            
        

    };

    function calcular () {

        let visualizacaoTotal = investimento / visualizacao;

        let clickTotal = visualizacaoTotal * 0.12;
        
        let compartilhaTotal = clickTotal / 6.6;

        let compartilhaAdicional = compartilhaTotal * 40;

        let visualizacaoFinal = visualizacaoTotal + compartilhaAdicional;


        console.log('Calculo:', visualizacaoFinal);

        return visualizacaoFinal;


    }

    function consultar (value) {

        idcadastro = document.getElementById('consult');

        anuncios.forEach( valorAtual => {

            console.log(valorAtual.id);

            let test = valorAtual.id;

            if (test == idcadastro) {
                console.log(valorAtual);
            }
        })

        


    }