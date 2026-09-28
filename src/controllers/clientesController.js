const { Cliente } = require("../models");

//get all clientes
exports.getAll = async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
}

//Post new cliente
exports.create = async (req, res) => {
    const { cpf, nome, idade, endereco, bairro, contato } = req.body;
    const cliente = await Cliente.create({ cpf, nome, idade, endereco, bairro, contato })
    res.json({Cliente:cliente,token:"1234"});
}

//delete cliente by id
exports.delete = async (req, res) => {
    const { id } = req.params;

    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
        return res.status(404).json({ message: "Cliente não encontrado" })
    }

    await cliente.destroy();
    res.json({ message: "Cliente deletado com sucesso" });
}