const servicoController = {
    serv:(req,res)=>{        
    res.render('servicos')
    },
    cadserv:(req,res)=>{        
        res.render('cadastroservico')
    }    
    }

module.exports = servicoController