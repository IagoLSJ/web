const EstudanteModel = require("../model/EstudanteModel");

class EstudanteService {
  static register(req, res) {
    EstudanteModel.create(req.body)
      .then((estudante) => {
        res.status(201).json(estudante);
      })
      .catch((e) => {
        res.status(500).json(e);
      });
  }

  static list(req, res) {
    EstudanteModel.find()
      .then((estudantes) => {
        res.status(201).json(estudantes);
      })
      .catch((e) => {
        res.status(500).json(e);
      });
  }
  //retorna um user atualizado
  static update(req, res) {
    EstudanteModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).then((estudante) => {
      res.status(201).json(estudante);
    });
  }
  //retorna o user deletado
  static delete(req, res) {
    EstudanteModel.findByIdAndRemove(req.params.id).then((estudante) => {
      res.status(201).json(estudante);
    });
  }
  //retorna um user
  static retrieve(req, res) {
    EstudanteModel.findById(req.params.id).then((estudante) => {
      res.status(201).json(estudante);
    });
  }
  
}

module.exports = EstudanteService;
