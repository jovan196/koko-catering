import React from 'react'

const layout = ({ children } : { children : React.ReactNode }) => {
  return (
    <div>
        <p>DASHBOARD</p>
        {children}
    </div>
  )
}

export default layout