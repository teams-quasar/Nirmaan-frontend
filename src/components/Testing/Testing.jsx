import React from 'react'
import data from '../../Json/TableData.json'
function Testing() {
  return (
    <>
    
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Question Count
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Duration
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Attempts
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.questionCount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.duration}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.attempts}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  )
}

export default Testing