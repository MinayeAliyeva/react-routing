import React from 'react'
import { Outlet } from 'react-router'
const BlogLayout = () => {
  return (
    <div>
      Blog Sayfasi
      <Outlet/>
    </div>
  )
}

export default BlogLayout