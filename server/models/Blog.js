const keystone = require('keystone');

const { Types } = keystone.Field;

const BlogPost = new keystone.List('BlogPost');


BlogPost.add({
  name: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  image: {
    type: Types.CloudinaryImage,
    required: true,
    initial: true,

  },
  date: {
    type: Types.Date,
    required: true,
    initial: true,
  },

  description: {
    type: Types.Text,
    required: true,
    initial: true,
  },

  link: {
    type: Types.Url,
    required: true,
    initial: true,
  },
  
});

BlogPost.register();