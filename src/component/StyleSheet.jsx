import React from 'react'
import './myStylecss.css'

function StyleSheet({primary}) {
  let classname = primary ? 'primary' : '';
  return (
    <div>
      <h1 className={`${classname} font-xl`}>StyleSheets</h1>
    </div>
  )
}

export default StyleSheet
