import TimeTable from "../TimeTable"

const timetable_1 = [
  {
    date: "Jul 15",
    lecturer: "Dr Pan Li",
    events: [
      { time: "9:30-10:30", description: "Linear systems in linear algebra I" },
      { time: "10:30-11:30", description: "Linear systems in linear algebra I" },
      { time: "11:30-12:30", description: "Linear systems in linear algebra I Q&A" },
      { time: "14:00-15:00", description: "In-class exercises" },
      { time: "15:00-16:00", description: "Group work" },
      { time: "16:00-17:30", description: "Q&A" },
      { time: "18:30-20:00", description: "Orientation" }
    ]
  },
  {
    date: "Jul 16",
    lecturer: "Dr Liu Chun Lung",
    events: [
      { time: "9:30-10:30", description: "Basics in number theory" },
      { time: "10:30-11:30", description: "Basics in number theory" },
      { time: "11:30-12:30", description: "Basics in number theory Q&A" },
      { time: "14:00-15:00", description: "In-class exercises" },
      { time: "15:00-16:00", description: "In-class exercises" },
      { time: "16:00-17:30", description: "In-class exercises" },
      { time: "18:30-20:00", description: "Group Reading" }
    ]
  },
  {
    date: "Jul 17",
    lecturer: "Dr Pan Li",
    events: [
      { time: "9:30-10:30", description: "Linear systems in linear algebra II" },
      { time: "10:30-11:30", description: "Linear systems in linear algebra II" },
      { time: "11:30-12:30", description: "Linear systems in linear algebra II Q&A" },
      { time: "14:00-15:00", description: "In-class exercises" },
      { time: "15:00-16:00", description: "In-class exercises" },
      { time: "16:00-17:30", description: "Seminar: Application of algebra in coding theory. Guest Speaker from CUHK, Dr Kai Leung CHAN" },
      { time: "18:30-20:00", description: "Board Games" }
    ]
  },
  {
    date: "Jul 18",
    lecturer: "Dr Liu Chun Lung",
    events: [
      { time: "9:30-10:30", description: "Important results in number theory" },
      { time: "10:30-11:30", description: "Important results in number theory" },
      { time: "11:30-12:30", description: "Important results in number theory Q&A" },
      { time: "14:00-17:30", description: "Field Trip: Sensetime (Visit exhibition hall + lecture)" },
      { time: "18:30-20:00", description: "Activities" }
    ]
  },
  {
    date: "Jul 19",
    lecturer: "Dr Pan Li",
    events: [
      { time: "9:30-10:30", description: "Matrix algebra I" },
      { time: "10:30-11:30", description: "Matrix algebra I" },
      { time: "11:30-12:30", description: "Matrix algebra I Q&A" },
      { time: "14:00-15:00", description: "In-class exercises" },
      { time: "15:00-16:00", description: "Group work" },
      { time: "16:00-17:30", description: "Q&A" },
      { time: "18:30-20:00", description: "Cinema Night: The Imitation Game" }
    ]
  },
  {
    date: "Jul 20",
    lecturer: "Dr Liu Chun Lung",
    events: [
      { time: "9:30-10:30", description: "Basic cryptosystems" },
      { time: "10:30-11:30", description: "Basic cryptosystems" },
      { time: "11:30-12:30", description: "Basic cryptosystems Q&A" },
      { time: "14:00-15:00", description: "Programming workshop on encryption, decryption" },
      { time: "15:00-16:00", description: "Programming workshop on encryption, decryption" },
      { time: "16:00-17:30", description: "Programming workshop on encryption, decryption" },
      { time: "18:30-20:00", description: "Activities" }
    ]
  },
  {
    date: "Jul 21",
    lecturer: "Dr Pan Li",
    events: [
      { time: "9:30-10:30", description: "Matrix algebra II" },
      { time: "10:30-11:30", description: "Matrix algebra II" },
      { time: "11:30-12:30", description: "Matrix algebra II Q&A" },
      { time: "14:00-17:30", description: "Field Trip: CocoRobo (Hands-on workshop, complete a work)" },
      { time: "18:30-20:00", description: "Workshop: project presentation (Based on reading mathematical articles, learn how to give a speech)" }
    ]
  },
  {
    date: "Jul 22",
    lecturer: "Dr Liu Chun Lung",
    events: [
      { time: "9:30-10:30", description: "Attacks of cryptosystems" },
      { time: "10:30-11:30", description: "Attacks of cryptosystems" },
      { time: "11:30-12:30", description: "Attacks of cryptosystems Q&A" },
      { time: "14:00-15:00", description: "In-class exercises" },
      { time: "15:00-16:00", description: "In-class exercises" },
      { time: "16:00-17:30", description: "In-class exercises" },
      { time: "18:30-20:00", description: "Board Games" }
    ]
  },
  {
    date: "Jul 23",
    lecturer: "",
    events: [
      { time: "9:30-12:30", description: "Visit to CUHK: Lecture: A Taste of University Mathematics by Prof. Chan Kwok Wai; Admission Talk by Dr. Chan Tsz Lung; Visit to Math Lab" },
      { time: "14:00-17:30", description: "M+ Hong Kong's global museum of visual culture" }
    ]
  },
  {
    date: "Jul 24",
    lecturer: "Dr Pan Li",
    events: [
      { time: "9:30-10:30", description: "Determinant" },
      { time: "10:30-11:30", description: "Determinant" },
      { time: "11:30-12:30", description: "Determinant Q&A" },
      { time: "14:00-15:00", description: "In-class exercises" },
      { time: "15:00-16:00", description: "Revision/Q&A" },
      { time: "16:00-17:30", description: "1-hour Exam" },
      { time: "18:30-20:00", description: "Revision" }
    ]
  },
  {
    date: "Jul 25",
    lecturer: "Dr Liu Chun Lung",
    events: [
      { time: "9:30-10:30", description: "Digital signature" },
      { time: "10:30-11:30", description: "Digital signature" },
      { time: "11:30-12:30", description: "Digital signature Q&A" },
      { time: "14:00-15:00", description: "Programming workshop on attacks of cryptosystems" },
      { time: "15:00-16:00", description: "Programming workshop on attacks of cryptosystems" },
      { time: "16:00-17:30", description: "1-hour Exam" },
      { time: "18:30-20:00", description: "Workshop: Reading of mathematics articles with Q&A (Group report preparation competition)" }
    ]
  },
  {
    date: "Jul 26",
    lecturer: "",
    events: [
      { time: "9:30-12:30", description: "Fun Competition (Based on group reading on July 16, the project presentation workshop on July 21, and the Q&A session on July 25, teams will participate in a fun report competition. Winning team will receive rewards, though it won’t count toward grades)" },
      { time: "14:00-17:30", description: "Completion Ceremony and Group Photo" }
    ]
  }
];

const timetable_2 = [
  {
    date: "Aug 5",
    lecturer: "Dr Xiao Jingjing",
    events: [
      { time: "9:30-10:30", description: "Derivatives" },
      { time: "10:30-11:30", description: "Derivatives" },
      { time: "11:30-12:30", description: "Derivatives" },
      { time: "14:00-15:00", description: "In-class exercises" },
      { time: "15:00-16:00", description: "Group work" },
      { time: "16:00-17:30", description: "Q&A" },
      { time: "18:30-20:00", description: "Orientation" }
    ]
  },
  {
    date: "Aug 6",
    lecturer: "Dr Ng Ming Ho",
    events: [
      { time: "9:30-10:30", description: "Basics in set theory" },
      { time: "10:30-11:30", description: "Basics in set theory" },
      { time: "11:30-12:30", description: "Basics in set theory Q&A" },
      { time: "14:00-15:00", description: "In-class exercises" },
      { time: "15:00-16:00", description: "In-class exercises" },
      { time: "16:00-17:30", description: "ruler-and-compass construction exercises" },
      { time: "18:30-20:00", description: "Group Reading" }
    ]
  },
  {
    date: "Aug 7",
    lecturer: "Dr Xiao Jingjing",
    events: [
      { time: "9:30-10:30", description: "Indefinite Integrations" },
      { time: "10:30-11:30", description: "Indefinite Integrations" },
      { time: "11:30-12:30", description: "Indefinite Integrations" },
      { time: "14:00-15:00", description: "In-class exercises" },
      { time: "15:00-16:00", description: "In-class exercises" },
      { time: "16:00-17:30", description: "Q&A" },
      { time: "18:30-20:00", description: "Board Games" }
    ]
  },
  {
    date: "Aug 8",
    lecturer: "Dr Ng Ming Ho",
    events: [
      { time: "9:30-10:30", description: "Basics in matrix theory" },
      { time: "10:30-11:30", description: "Basics in matrix theory" },
      { time: "11:30-12:30", description: "Basics in matrix theory Q&A" },
      { time: "14:00-17:30", description: "Field Trip: Sensetime (Visit exhibition hall + lecture)" },
      { time: "18:30-20:00", description: "Activities" }
    ]
  },
  {
    date: "Aug 9",
    lecturer: "Dr Xiao Jingjing",
    events: [
      { time: "9:30-10:30", description: "First Order ODEs" },
      { time: "10:30-11:30", description: "First Order ODEs" },
      { time: "11:30-12:30", description: "First Order ODEs" },
      { time: "14:00-15:00", description: "In-class exercises" },
      { time: "15:00-16:00", description: "Group work" },
      { time: "16:00-17:30", description: "Seminar: An introduction to Symmetry in Mathematics by Prof Micheal Mcbreen" },
      { time: "18:30-20:00", description: "Cinema Night: A Beautiful Mind" }
    ]
  },
  {
    date: "Aug 10",
    lecturer: "Dr Ng Ming Ho",
    events: [
      { time: "9:30-10:30", description: "Basis in complex number" },
      { time: "10:30-11:30", description: "Basics in number theory" },
      { time: "11:30-12:30", description: "Bases in complex number and number theory Q&A" },
      { time: "14:00-15:00", description: "In-class exercises" },
      { time: "15:00-16:00", description: "In-class exercises" },
      { time: "16:00-17:30", description: "ruler-and-compass construction exercises" },
      { time: "18:30-20:00", description: "Activities" }
    ]
  },
  {
    date: "Aug 11",
    lecturer: "Dr Xiao Jingjing",
    events: [
      { time: "9:30-10:30", description: "Applications of First Order ODEs" },
      { time: "10:30-11:30", description: "Applications of First Order ODEs" },
      { time: "11:30-12:30", description: "Applications of First Order ODEs" },
      { time: "14:00-17:30", description: "Field Trip: CocoRobo (Hands-on workshop, complete a work)" },
      { time: "18:30-20:00", description: "Workshop: project presentation (Based on reading mathematical articles, learn how to give a speech)" }
    ]
  },
  {
    date: "Aug 12",
    lecturer: "Dr Ng Ming Ho",
    events: [
      { time: "9:30-10:30", description: "Fundamental theorem of algebra" },
      { time: "10:30-11:30", description: "Fundamental theorem of algebra" },
      { time: "11:30-12:30", description: "Fundamental theorem of algebra Q&A" },
      { time: "14:00-15:00", description: "In-class exercises" },
      { time: "15:00-16:00", description: "In-class exercises" },
      { time: "16:00-17:30", description: "ruler-and-compass construction exercises" },
      { time: "18:30-20:00", description: "Board Games" }
    ]
  },
  {
    date: "Aug 13",
    lecturer: "",
    events: [
      { time: "9:30-12:30", description: "Visit to CUHK: Lecture: An introduction to Symmetry in Mathematics by Prof. Jin Bangti; Admission Talk by Dr. Chan Kai Leung; Visit to Math Lab" },
      { time: "14:00-17:30", description: "M+ Hong Kong's global museum of visual culture" }
    ]
  },
  {
    date: "Aug 14",
    lecturer: "Dr Xiao Jingjing",
    events: [
      { time: "9:30-10:30", description: "Second Order ODEs" },
      { time: "10:30-11:30", description: "Second Order ODEs" },
      { time: "11:30-12:30", description: "Second Order ODEs" },
      { time: "14:00-15:00", description: "In-class exercises" },
      { time: "15:00-16:00", description: "Revision/Q&A" },
      { time: "16:00-17:30", description: "1-hour Exam" },
      { time: "18:30-20:00", description: "Revision" }
    ]
  },
  {
    date: "Aug 15",
    lecturer: "Dr Ng Ming Ho",
    events: [
      { time: "9:30-10:30", description: "Basics in group theory" },
      { time: "10:30-11:30", description: "Basics in group theory" },
      { time: "11:30-12:30", description: "Basics in group theory Q&A" },
      { time: "14:00-15:00", description: "In-class exercises" },
      { time: "15:00-16:00", description: "Revision/Q&A" },
      { time: "16:00-17:30", description: "1-hour Exam" },
      { time: "18:30-20:00", description: "Workshop: Reading of engaging mathematics articles with Q&A (Group report preparation competition)" }
    ]
  },
  {
    date: "Aug 16",
    lecturer: "",
    events: [
      { time: "9:30-12:30", description: "Fun Competition" },
      { time: "14:00-17:30", description: "Completion ceremony (Sharing learning insights, certificate awarding) and Group Photo" }
    ]
  }
];

export default function ClassTimetable() {
  return (
    <div>
      <h1 className="text-4xl/16 text-center font-bold mb-8">Training Programme</h1>
      <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4">Introduction</h2>
      <p className="text-base md:text-lg/8 indent-8 mb-8">
        Innovation drives development, and technology nurtures the future". The foundation of scientific and technological innovation lies in education, while talents are the keys to its achievement. To solidify GBA's status as a talent hub of the kind, the Department of Mathematics, Faculty of Science, CUHK has launched the "Training Programme for Young Mathematics Talents". Relying on CUHK's multi faceted resources and years of project experience, the programme aims at training mathematical-talented young students to acquire scientific literacy and innovation ability through the University's advanced mathematics concepts and methods, so as to lay a foundation for cultivating the next generation of innovation leaders for the Region, and even the Country.
      </p>
      <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4">Objective</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 mb-8">
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
      <div className="p-6 dark:bg-gray-600 shadow-md rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 ring-gray-900/5 dark:ring-white/10 ring-2 mb-8">
        <div>
          <div className="space-y-4">
            <div className="session">
              <h3 className="text-lg/8 md:text-xl/8 font-bold">Session 1</h3>
              <p className="text-gray-600 dark:text-gray-200">2024/07/15 - 2023/07/26</p>
            </div>
            <div className="session">
              <h3 className="text-lg/8 md:text-xl/8 font-bold">Session 2</h3>
              <p className="text-gray-600 dark:text-gray-200">2024/08/05 - 2023/08/16</p>
            </div>
          </div>
        </div>
        <div className=" bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
          <h3 className="text-lg/8 md:text-xl/8 font-bold">Fees</h3><p className="text-base md:text-lg/8 font-bold">3,980 CNY*</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">*Fees covered meals, accommodation, and activities (Personal expenses of any kind are excluded)</p>
        </div>
      </div>
      <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4">Programme Structure</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
      <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4">Session 1 TimeTable</h2>
      <TimeTable timetable={timetable_1} />
      <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4">Session 2 TimeTable</h2>
      <TimeTable timetable={timetable_2} />
    </div>
  )
}
