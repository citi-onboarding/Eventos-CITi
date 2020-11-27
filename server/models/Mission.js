const keystone = require('keystone');

const { Types } = keystone.Field;

const Mission = new keystone.List('Mission', {
    nocreate: true
});

Mission.add({
  title: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  description: {
    type: Types.Text,
    required: true,
    initial: true,
  },
});

Mission.register();