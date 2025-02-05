const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const cadastrarPF = async (req, res) => {
    console.log('Funcionando')
}

module.exports = {
    cadastrarPF,
  };