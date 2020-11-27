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
    require: false,
    initial: false,
  },

  images: {
    type: Types.CloudinaryImages,
    require: true,
  },

  description:{
      type: Types.Text,
  },

    link: {
      type: Types.Url,
 },

 simpledescription:{
     type: Types.Text,
 },

});

Events.register();