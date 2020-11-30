const keystone = require('keystone');

const { Types } = keystone.Field;

const Banner = new keystone.List('Banner', {
    nocreate: true
});

Banner.add({
  title: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  caption: {
    type: Types.Text,
    required: true,
    initial: true,
  },
});

Banner.register();