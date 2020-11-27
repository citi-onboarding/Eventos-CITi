const keystone = require('keystone');

const { Types } = keystone.Field;

const Events = new keystone.List('Events');

Events.add({
  name: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },

  date: {
    type: Types.Date,
    required: true,
    initial: false,
  },

  images: {
    type: Types.CloudinaryImages,
    required: true,
  },

  description:{
      type: Types.Text,
  },

    link: {
      type: Types.Url,
      required: true,
 },

 simpleDescription:{
     type: Types.Text,
     requiered: true,
 },

});

Events.register();