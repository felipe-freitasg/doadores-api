'use strict'
const mongoose = require('mongoose');
const Doador = mongoose.model('Doador');
const jwt = require('jsonwebtoken')

exports.post = (req, res, next) => {

    const authorization = req.headers['authorization']

    if(!authorization){
        return res.status(401)
    }

    const token = authorization;

    try{
        jwt.verify(token, SECRET)

        var doador = new Doador(req.body);
        doador
        .save()
        .then(x =>{
            res.status(201).send({ 
                message: 'Doador cadastrado'
            });
        }).catch(e => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar',
                data: e

            });
        });
        //res.send('EXECUTADO')
    }catch(err){
        console.log('token invalido, MOTIVO: ', err.message)
        send.status(401)
    }




    /*var doador = new Doador(req.body);
    doador
        .save()
        .then(x =>{
            res.status(201).send({ 
                message: 'Doador cadastrado'
            });
        }).catch(e => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar',
                data: e

            });
        });*/

};


exports.get = (req, res, next) =>{

    //testando jwt
   const authorization = req.headers['authorization']

    if(!authorization){
        return res.status(401)
    }

    const token = authorization;

    try{
        jwt.verify(token, SECRET)

        Doador
        .find({})
        .then(d =>{
            res.status(201).send(d);
        }).catch(e => {
            res.status(400).send(e);
        });
        //res.send('EXECUTADO')
    }catch(err){
        console.log('token invalido, MOTIVO: ', err.message)
        send.status(401)
    }
    
    /*Doador
        .find({})
        .then(d =>{
            res.status(201).send(d);
        }).catch(e => {
            res.status(400).send(e);
        });*/
}

exports.getById = (req, res, next) =>{

    const authorization = req.headers['authorization']

    if(!authorization){
        return res.status(401)
    }

    const token = authorization;

    try{
        jwt.verify(token, SECRET)

        Doador
        .findById(req.params.id)
        .then(d =>{
            res.status(201).send(d);
        }).catch(e => {
            res.status(400).send(e);
        });
        //res.send('EXECUTADO')
    }catch(err){
        console.log('token invalido, MOTIVO: ', err.message)
        send.status(401)
    }


  /*  Doador
        .findById(req.params.id)
        .then(d =>{
            res.status(201).send(d);
        }).catch(e => {
            res.status(400).send(e);
        });*/
}






exports.put = (req, res, next) => {

    const authorization = req.headers['authorization']

    if(!authorization){
        return res.status(401)
    }

    const token = authorization;

    try{
        jwt.verify(token, SECRET)

        Doador
        .findByIdAndUpdate(req.params.id, {
            $set: {
                nome: req.body.nome,
                cnpj: req.body.cnpj,
                telefone: req.body.telefone,
                endereco: req.body.endereco,
                numero: req.body.numero,
                complemento: req.body.complemento,
                cidade: req.body.cidade,
                estado: req.body.estado,
                email: req.body.email

            }

        }).then(x =>{
            res.status(201).send({
                message: 'Doador Atualizado'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar',
                data: e

            });

        });

       
        //res.send('EXECUTADO')
    }catch(err){
        console.log('token invalido, MOTIVO: ', err.message)
        send.status(401)
    }

    




  /*  Doador
        .findByIdAndUpdate(req.params.id, {
            $set: {
                nome: req.body.nome,
                cnpj: req.body.cnpj,
                telefone: req.body.telefone,
                endereco: req.body.endereco,
                numero: req.body.numero,
                complemento: req.body.complemento,
                cidade: req.body.cidade,
                estado: req.body.estado,
                email: req.body.email

            }

        }).then(x =>{
            res.status(201).send({
                message: 'Doador Atualizado'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar',
                data: e

            });

        });*/
};



exports.delete =(req, res, next) => {

    const authorization = req.headers['authorization']

    if(!authorization){
        return res.status(401)
    }

    const token = authorization;

    try{
        jwt.verify(token, SECRET)

        Doador
        .findOneAndRemove(req.body.id)
        .then(x =>{
            res.status(201).send({
                message: 'Doador Removido'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover doador',
                data: e

            });

        });
        //res.send('EXECUTADO')
    }catch(err){
        console.log('token invalido, MOTIVO: ', err.message)
        send.status(401)
    }








    /*Doador
        .findOneAndRemove(req.body.id)
        .then(x =>{
            res.status(201).send({
                message: 'Doador Removido'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover doador',
                data: e

            });

        });*/
};

//JWT

const SECRET = 'apidoadores';

exports.postLogin = (req, res, next) => {

    if(req.body.email === 'tarley.lana@gmail.com' && req.body.senha === '123456') {

        const token = jwt.sign({userId: 1888}, SECRET, {expiresIn: 60});

        res.json({token})

    }else{
        res.sendStatus(401).end();
    }

};

//função verifica token
/*
function verificaJWT(req, res, next){

    const token = req.headers['x-acess-token'];

    

    //outra função

   /* const authorization = req.headers['authorization']

   
    if(!authorization){
        return res.status(401)
    }

    const token = authorization;

    try{
        jwt.verify(token, SECRET)
        res.send('EXECUTADO')
    }catch(err){
        console.log('token invalido, MOTIVO: ', err.message)
        send.status(401)
    }

}*/