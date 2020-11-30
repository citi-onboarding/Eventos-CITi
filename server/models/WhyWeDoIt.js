const keystone = require('keystone');

const { Types } = keystone.Field;

const WhyWeDoIt = new keystone.List('WhyWeDoIt', {
    nocreate: true
});

WhyWeDoIt.add({
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

WhyWeDoIt.register();