exports.formulario = (req, res) => {
  res.render('index', { resultado: null });
};

exports.calcular = (req, res) => {
  const { figura, base, altura, lado, diagonal1, diagonal2, apotema } = req.body;
  let resultado = {};

  switch (figura) {
    case 'trapecio':
      resultado.area = ((parseFloat(base) + parseFloat(lado)) / 2) * parseFloat(altura);
      resultado.perimetro = parseFloat(base) + parseFloat(lado) * 2;
      break;
    case 'rombo':
      resultado.area = (parseFloat(diagonal1) * parseFloat(diagonal2)) / 2;
      resultado.perimetro = 4 * parseFloat(lado);
      break;
    case 'pentagono':
      resultado.area = (5 * parseFloat(lado) * parseFloat(apotema)) / 2;
      resultado.perimetro = 5 * parseFloat(lado);
      break;
    default:
      resultado.error = 'Figura no válida';
  }

  res.render('index', { resultado });
};