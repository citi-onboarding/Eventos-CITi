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
  Description: {
    type: Types.Text,
    require: true,
    initial: true,
  },
});

Mission.register();