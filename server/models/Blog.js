const keystone = require('keystone');

const { Types } = keystone.Field;

const Blog = new keystone.List('Blog');


Blog.add({
  title: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },

  image: {
    type: Types.CloudinaryImages,
    require: true,
  },

  date: {
    type: Types.Date,
    required: true,
    initial: true,
    index: true,
    },

  description: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  
  link: {
    type: Types.Url,
    initial: true,
    required: true,
    index: true,
  },
});

Blog.register();