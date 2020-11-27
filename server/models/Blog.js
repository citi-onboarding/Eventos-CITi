const keystone = require('keystone');

const { Types } = keystone.Field;

const Post = new keystone.List('Blog');


Blog.register();