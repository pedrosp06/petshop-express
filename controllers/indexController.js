let listaServicos = [{nome:"banho",valor:50},
{nome:'tosa',valor:100},
{nome:'vacina', valor:150}
]

const indexController = {
    home:(req,res)=>{
        
    res.render('index',{servicos:listaServicos})
    },
    cadastro:(req,res)=>{ 
    let novoServico = Object.assign({}, req.body)

    listaServicos.push(novoServico)
    return res.send(listaServicos)
    }
}

module.exports = indexController