// pages/class-timetable.js
import Head from 'next/head'

export default function ClassTimetable() {
  return (
    <div>
      <h1 className="text-4xl/8 text-center font-bold mb-6">Training Programme</h1>
      <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4">Introduction</h2>
      <p className="text-base md:text-lg/8 indent-8 mb-6">
        Innovation drives development, and technology nurtures the future". The foundation of scientific and technological innovation lies in education, while talents are the keys to its achievement. To solidify GBA's status as a talent hub of the kind, the Department of Mathematics, Faculty of Science, CUHK has launched the "Training Programme for Young Mathematics Talents". Relying on CUHK's multi faceted resources and years of project experience, the programme aims at training mathematical-talented young students to acquire scientific literacy and innovation ability through the University's advanced mathematics concepts and methods, so as to lay a foundation for cultivating the next generation of innovation leaders for the Region, and even the Country.
      </p>
      <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4">Objective</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 mb-6">
        <div className="bg-gradient-to-tl from-yellow-100 to-green-100 dark:from-gray-800 dark:to-green-800 rounded-lg p-4 text-center">
          <p className="text-base md:text-lg/8 text-black dark:text-white">
            Accelerating students' interest in basic mathematics or STEM and raising their awareness, cognition, and understanding in the field.
          </p>
        </div>
        <div className="bg-gradient-to-tl from-yellow-100 to-green-100 dark:from-gray-800 dark:to-green-800 rounded-lg p-4 text-center">
          <p className="text-base md:text-lg/8 text-black dark:text-white">
            Cultivating mathematics talented students and establishing their connection with CUHK.
          </p>
        </div>
        <div className="bg-gradient-to-tl from-yellow-100 to-green-100 dark:from-gray-800 dark:to-green-800 rounded-lg p-4 text-center">
          <p className="text-base md:text-lg/8 text-black dark:text-white">
            Motivating students to enroll in mathematics or STEM-related subjects at university and cultivating future technological and innovative leaders.
          </p>
        </div>
      </div>
      <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4">Programme Schedule and Fees</h2>
      <div className="p-6 bg-white shadow-md rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 ring-gray-900/5 dark:ring-white/10 ring-2 mb-6">
        <div>
          <div className="space-y-4">
            <div className="session">
              <h3 className="text-lg/8 md:text-xl/8 font-bold">Session 1</h3>
              <p className="text-gray-600">2023/07/14 - 2023/07/25</p>
            </div>
            <div className="session">
              <h3 className="text-lg/8 md:text-xl/8 font-bold">Session 2</h3>
              <p className="text-gray-600">2023/08/04 - 2023/08/15</p>
            </div>
          </div>
        </div>
        <div className=" bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg/8 md:text-xl/8 font-bold">Fees</h3><p className="text-base md:text-lg/8 font-bold">3,980 CNY*</p>
          <p className="text-sm text-gray-600 mt-2">*Fees covered meals, accommodation, and activities (Personal expenses of any kind are excluded)</p>
        </div>
      </div>
      <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4">Programme Structure</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-lime-300 dark:bg-lime-700 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg/8 md:text-xl/8 font-bold mb-2">Classes</h3>
            <p className="text-base md:text-lg/8">Basic principles and fundamentals theories</p>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg/8 md:text-xl/8 font-bold mb-2">Workshops</h3>
            <p className="text-base md:text-lg/8">Training in mathematical thinking</p>
          </div>
          <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg/8 md:text-xl/8 font-bold mb-2">Activities</h3>
            <ul className="text-base md:text-lg/8 text-left">
              <li>Technology Company Visit</li>
              <li>CUHK Campus Visit</li>
              <li>Seminars/Interactive Activities</li>
            </ul>
          </div>
      </div>
    </div>
  )
}
