import CourseTemplate from "../../components/CourseTemplate"; 

export default function Page2025() {
    const sessions2025 = [
        {
            title: "Session 1",
            dates: "July 14 - July 25, 2025",
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
            dates: "August 4 - August 15, 2025",
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

    return <CourseTemplate year="2025" sessions={sessions2025} />;
}
