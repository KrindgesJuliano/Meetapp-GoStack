import * as Yup from 'yup';
import { Op } from 'sequelize';
import {
  startOfHour,
  parseISO,
  isBefore,
  subHours,
  startOfDay,
  endOfDay,
} from 'date-fns';
import Meetup from '../models/meetup';
import User from '../models/user';
import Files from '../models/files';

class MeetupController {
  async index(req, res) {
    const where = {};
    const page = req.query.page || 1;

    if (req.query.date) {
      const searchDate = parseISO(req.query.date);

      where.date = {
        [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
      };
    }
    const meetups = await Meetup.findAll({
      where,
      limit: 10,
      offset: 10 * page - 10,
      include: [
        {
          model: User,
          attributes: ['name', 'email'],
        },
        {
          model: Files,
          as: 'imagem',
          attributes: ['name', 'url'],
        },
      ],
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    /* Check for past dates */

    const { date, title, description, location, banner } = req.body;

    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past date are not permitted' });
    }

    const meetup = await Meetup.create({
      user_id: req.userId,
      banner,
      date,
      title,
      description,
      location,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    /* Check for past dates */

    const { date, title, description, location, banner } = req.body;

    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past date are not permitted' });
    }

    const meetups = await Meetup.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    if (meetups.user_id !== req.userId) {
      return res.status(401).json({
        error: "you don't have permission to cancel this appointment",
      });
    }

    await meetups.update({
      date,
      title,
      description,
      location,
      banner,
    });

    await meetups.save();

    return res.json(meetups);
  }

  async delete(req, res) {
    const meetups = await Meetup.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    if (meetups.user_id !== req.userId) {
      return res.status(401).json({
        error: "you don't have permission to cancel this appointment",
      });
    }

    const dateWithSub = subHours(meetups.date, 24);

    if (isBefore(dateWithSub, new Date())) {
      return res.status(401).json({
        error: 'You can only cancel appointments 24 hours in advance.',
      });
    }

    const deleteId = req.params.id;

    meetups.destroy({
      where: {
        id: deleteId,
      },
    });

    await meetups.save();

    return res.json(meetups);
  }
}

export default new MeetupController();
