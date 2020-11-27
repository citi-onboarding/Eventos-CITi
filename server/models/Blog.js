const keystone = require('keystone');

const { Types } = keystone.Field;

const Post = new keystone.List('Blog');


Blog.register();

Post.add({
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
    type: Types.date,
    required: true,
    initial: true,
    index: true,
    },
});