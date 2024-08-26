const { Endereco } = require('../models');
const axios = require('axios');

const createEndereco = async (req, res) => {
  try {
    const endereco = await Endereco.create(req.body);
    return res.status(201).json(endereco);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllEnderecos = async (req, res) => {
  try {
    const enderecos = await Endereco.findAll();
    return res.status(200).json(enderecos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getEnderecoById = async (req, res) => {
  try {
    const { id } = req.params;
    const endereco = await Endereco.findOne({
      where: { Id: id }
    });
    if (endereco) {
      return res.status(200).json(endereco);
    }
    return res.status(404).json({ message: 'Endereço não encontrado' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateEndereco = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipioIBGE } = req.body;
    const endereco = await Endereco.findByPk(Id);
    if (!endereco) {
      return res.status(404).json({ error: 'Endereço não encontrado' });
    }
    endereco.Cep = Cep;
    endereco.Logradouro = Logradouro;
    endereco.Numero = Numero;
    endereco.Complemento = Complemento;
    endereco.Bairro = Bairro;
    endereco.Cidade = Cidade;
    endereco.Estado = Estado;
    endereco.IBGE = IBGE;
    await endereco.save();
    return res.status(200).json(endereco);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar endereço', details: error.message });
  }
};

const deleteEndereco = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Endereco.destroy({
      where: { Id: id }
    });
    if (deleted) {
      return res.status(204).send();
    }
    return res.status(404).json({ message: 'Endereço não encontrado' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createEnderecoFromCep = async (req, res) => {
    try {
      const { cep } = req.params;
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { logradouro, complemento, bairro, localidade, uf, ibge } = response.data;
  
      const endereco = await Endereco.create({
        Cep: cep,
        Logradouro: logradouro,
        Numero: 0,
        Complemento: complemento,
        Bairro: bairro,
        Cidade: localidade,
        Estado: uf,
        IBGE: ibge
      });
  
      return res.status(201).json(endereco);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar CEP ou salvar endereço', details: error.message });
    }
};    

module.exports = {
  createEndereco,
  getAllEnderecos,
  getEnderecoById,
  updateEndereco,
  deleteEndereco,
  createEnderecoFromCep
};