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

  subscriptionDeadline:{
    type: Types.Date,
    required: true,
    initial: true,
  },

  eventDate: {
    type: Types.Date,
    required: true,
    initial: true,
  },

  local:{
    type: Types.Text,
    initial: true,
    required: true,
  },

  images: {
    type: Types.CloudinaryImages,
    required: true,
    initial: true,
  },

  description:{
      type: Types.Text,
      required: true,
      initial: true,
  },

  knowMoreLink: {
    type: Types.Url,
    required: true,
    initial: true,
 },

  subscriptionLink:{
    type: Types.Url,
  },

 subscriptionDescription:{
     type: Types.Text,
  },

});

Events.register();