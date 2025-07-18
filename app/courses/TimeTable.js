export default function TimeTable({timetable}){
    return (
    <div className="container mx-auto p-4">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 overflow-x-auto">
          {days.map((day) => (
            <Tab
              key={day.date}
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
                ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2
                ${selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'}`
              }
            >
              {day.date}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {days.map((day) => (
            <Tab.Panel key={day.date} className="rounded-xl bg-white p-3">
              <h2 className="text-lg font-semibold">{day.date}</h2>
              <p className="text-sm text-gray-500">Lecturer: {day.lecturer}</p>
              <table className="min-w-full divide-y divide-gray-200 mt-4">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {day.events.map((event, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.time}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{event.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
)
}