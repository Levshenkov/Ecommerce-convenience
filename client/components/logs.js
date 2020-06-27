import React from 'react'
import { useSelector } from 'react-redux'

const Logs = () => {
  const logs = useSelector((s) => s.products.logs)
  return (
    <div>
      {logs.map((log) => {
        return <div key={log.type}>{JSON.stringify(log)}</div>
      })}
    </div>
  )
}

Logs.propTypes = {}

export default React.memo(Logs)
