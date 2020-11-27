const keystone = require('keystone');

const { Types } = keystone.Field;

const Blog = new keystone.List('Blog');


Blog.add({
  name: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  image: {
    type: Types.CloudinaryImage,
    require: true,

  },
  date: {
    type: Types.Date,
  },

  description: {
    type: Types.Text,
  },

  link: {
    type: Types.Url,
  },
  
});

Blog.register();