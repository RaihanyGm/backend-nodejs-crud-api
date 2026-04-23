exports.success = (res, status, mensagem, dados = null) => {
  return res.status(status).json({
    sucesso: true,
    mensagem,
    dados
  });
};

exports.error = (res, status, mensagem, erro = null) => {
  return res.status(status).json({
    sucesso: false,
    mensagem,
    erro
  });
};