"use client"

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/react'

export default function TimeTable({ timetable }) {
  return (
    <div>
      <TabGroup>
        <TabList className="flex space-x-2 rounded-xl bg-blue-500 p-2 overflow-x-auto select-none">
          {timetable.map((day) => (
            <Tab
              key={day.date}
              className={({ selected }) =>
                `rounded-xl py-2 leading-5 whitespace-nowrap
                 ring-white ring-offset-2 focus:ring-offset-blue-700 focus:outline-none focus:ring-2 px-3
                 ${selected ? 'bg-white shadow text-blue-700' : 'text-blue-100 hover:bg-white/10 hover:text-white'}`
              }
            >
              {day.date}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="pt-2 border rounded-b-xl border-t-0 border-gray-100">
          {timetable.map((day) => (
            <TabPanel 
              key={day.date} 
              className="rounded-xl p-3 shadow-sm"
            >
              <div className="mb-2 px-2">
                <h2 className="text-xl/8 md:text-2xl/8 font-bold">{day.date}</h2>
                {day.lecturer != "" && <h3 className="text-xl text-gray-600">Lecturer: {day.lecturer}</h3>}
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="text-base md:text-lg/8 text-left text-gray-500 uppercase tracking-wider">
                      <th className="px-4 py-3">
                        Time
                      </th>
                      <th className="px-4 py-3">
                        Event
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {day.events.map((event, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base">
                          {event.time}
                        </td>
                        <td className="px-4 py-3 text-sm md:text-base">
                          {/* Handle both array and string descriptions */}
                          {Array.isArray(event.description) ? (
                            <ul className="space-y-1">
                              {event.description.map((line, i) => (
                                <li key={i}>{line}</li>
                              ))}
                            </ul>
                          ) : (
                            event.description
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  )
}