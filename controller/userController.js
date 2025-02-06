const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const cadastrarPF = async (req, res) => {
    try {
      const { nomeCompleto, cpf, email, telefone, endereco, observacoes, dataNascimento } = req.body;
  
      if (!nomeCompleto || !cpf || !email || !telefone || !endereco || !dataNascimento) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios!" });
      }

      const dataFormatada = new Date(dataNascimento)

      const cpfExistente = await prisma.pessoaFisica.findUnique({
        where: { cpf }
      });
  
      if (cpfExistente) {
        return res.status(400).json({ erro: "CPF já cadastrado!" });
      }

      const novoCadastro = await prisma.pessoaFisica.create({
        data: {
        nomeCompleto,
          cpf,
          email,
          telefone,
          endereco,
          dataNascimento: dataFormatada,
          observacoes,
        },
      });
  
      return res.status(201).json({
        mensagem: "Cadastro realizado com sucesso!",
        usuario: novoCadastro,
      });
  
    } catch (erro) {
      console.error("Erro ao cadastrar PF:", erro);
      return res.status(500).json({ erro: "Erro interno no servidor!" });
    }
  };

  const cadastrarPJ = async (req, res) => {
    try {
        console.log(req.body)
      const { 
        razaoSocial, 
        nomeFantasia, 
        cnpj, 
        inscricaoEstadual, 
        nomeResponsavel, 
        cargoResponsavel, 
        telefoneEmpresa, 
        emailEmpresa, 
        endereco, 
        observacoes, 
        cep, 
        rua, 
        numero, 
        bairro, 
        cidade, 
        estado,
      } = req.body;
  
      if (
        !razaoSocial || !nomeFantasia || !cnpj || !inscricaoEstadual || 
        !nomeResponsavel || !cargoResponsavel || !telefoneEmpresa || !emailEmpresa || 
        !endereco || !cep || !rua || !numero || !bairro || !cidade || !estado
      ) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios!" });
      }
  
    
      const novoCadastro = await prisma.pessoaJuridica.create({
        data: {
          razaoSocial,
          nomeFantasia,
          cnpj,
          inscricaoEstadual,
          nomeResponsavel,
          cargoResponsavel,
          telefoneEmpresa,
          emailEmpresa,
          endereco,
          observacoes,
          cep,
          rua,
          numero,
          bairro,
          cidade,
          estado
        },
      });
  
      return res.status(201).json({
        mensagem: "Cadastro realizado com sucesso!",
        usuario: novoCadastro,
      });
  
    } catch (erro) {
      console.error("Erro ao cadastrar PJ:", erro);
      return res.status(400).json({ erro: "Erro interno no servidor!" });
    }
  };

  const listarPessoasFisicas = async (req, res) => {
    try {
      const pessoasFisicas = await prisma.pessoaFisica.findMany(); 
      return res.status(200).json(pessoasFisicas);
    } catch (erro) {
      console.error("Erro ao listar pessoas físicas:", erro);
      return res.status(500).json({ erro: "Erro ao listar pessoas físicas!" });
    }
  };
  
 
  const listarPessoasJuridicas = async (req, res) => {
    try {
      const pessoasJuridicas = await prisma.pessoaJuridica.findMany(); 
      return res.status(200).json(pessoasJuridicas);
    } catch (erro) {
      console.error("Erro ao listar pessoas jurídicas:", erro);
      return res.status(500).json({ erro: "Erro ao listar pessoas jurídicas!" });
    }
  };

  const deletarUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      console.log('ID recebido:', id);
      
      const usuarioExistente = await prisma.usuario.findUnique({
        where: { id: Number(id) },
      });
  
      if (!usuarioExistente) {
        console.log('Usuário não encontrado');
        return res.status(404).json({ erro: 'Usuário não encontrado' });
      }
  
      const usuario = await prisma.usuario.delete({
        where: { id: Number(id) },
      });
  
      console.log('Usuário deletado:', usuario);
      return res.status(200).json({ mensagem: "Usuário deletado com sucesso!" });
    } catch (erro) {
      console.error("Erro ao deletar usuário:", erro);
      return res.status(500).json({ erro: "Erro ao deletar usuário!" });
    }
  };
  


const login = async (req, res) => {
    console.log('Funcionando')
}

module.exports = {
    cadastrarPF,
    cadastrarPJ,
    login,
    listarPessoasFisicas,
    listarPessoasJuridicas,
    deletarUsuario
  };