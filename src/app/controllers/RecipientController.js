import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string()
        .required()
        .min(6),
      rua: Yup.string().required(),
      numero: Yup.string()
        .required()
        .min(1),
      complemento: Yup.string(),
      estado: Yup.string()
        .required()
        .min(2)
        .max(2),
      cidade: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if ((await schema.isValid(req.body)) === false) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipientExists = await Recipient.findOne({
      where: { nome: req.body.nome },
    });

    if (recipientExists) {
      return res
        .status(400)
        .json({ error: 'Recipient already exists for this name.' });
    }

    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async index(req, res) {
    const recipients = await Recipient.findAll();

    if (recipients) {
      return res.status(200).json(recipients);
    }

    return res.status(404).json({ error: 'No results found for this request' });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string()
        .required()
        .min(6),
      rua: Yup.string(),
      numero: Yup.string().min(1),
      complemento: Yup.string(),
      estado: Yup.string()
        .min(2)
        .max(2),
      cidade: Yup.string(),
      cep: Yup.string(),
    });

    if ((await schema.isValid(req.body)) === false) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, nome } = req.body;

    const recipient = await Recipient.findByPk(id);

    if (nome && nome !== recipient.nome) {
      const recipientExists = await Recipient.findOne({ where: { nome } });

      if (recipientExists) {
        return res
          .status(400)
          .json({ error: 'Recipient already exists for this name.' });
      }
    }

    const updatedRecipient = await recipient.update(req.body);

    return res.json(updatedRecipient);
  }

  async delete(req, res) {
    const { receiptId } = req.params;

    const rowsDeleted = await Recipient.destroy({ where: { id: receiptId } });
    console.log(`rowsDeleted${rowsDeleted}`);

    return res.json({ teste: 'deleted' });
  }
}

export default new RecipientController();
