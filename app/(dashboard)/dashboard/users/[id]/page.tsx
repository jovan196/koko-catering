import React from 'react'

// mark as async and await `params` because Next.js may provide a thenable
const page = async ({ params } : { params : { id : string} }) => {
    const { id } = await params;
  return (
    <div>USER DETAIL: {id}</div>
  )
}

export default page