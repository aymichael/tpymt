import CourseTemplate from "../../components/CourseTemplate"; 

export default function Page2026() {
    const sessions2026 = [
        {
            title: "Session 1",
            dates: "July 13 - July 21, 2026",
            courses: [
                {
                    name: "Linear Algebra with Applications",
                    lecturer: "Dr. Pan Li"
                },
                {
                    name: "Set Theory and Logic",
                    lecturer: "Dr. Liu Chun Lung"
                }
            ]
        },
        {
            title: "Session 2",
            dates: "August 3 - August 11, 2026",
            courses: [
                {
                    name: "Set Theory and Logic",
                    lecturer: "Dr. Xiao Jingjing"
                },
                {
                    name: "Introduction to Abstract Algebra",
                    lecturer: "Dr. Ng Ming Ho"
                }
            ]
        }
    ];

    return <CourseTemplate year="2026" sessions={sessions2026} />;
}