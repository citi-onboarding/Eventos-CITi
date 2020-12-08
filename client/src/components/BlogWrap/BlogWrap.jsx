import React from 'react';
import './style.css' 
import BlogCard from '../BlogCard/BlogCard';
import '../BlogSlicker/BlogSlicker'

export default function BlogWrap () {
  return (
    <div className="blogWrap">
      <BlogCard
      />
      <BlogCard/>
    </div>
  );
}

