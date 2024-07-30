const Event = require('../models/Event');

exports.addEvent = async (req, res) => {
  try {
    const { eventName, speaker, description, link } = req.body;

    const newEvent = new Event({
      eventName,
      speaker,
      description,
      link
    });

    await newEvent.save();

    res.status(201).json({ message: 'Event added successfully', event: newEvent });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};