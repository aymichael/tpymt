import CourseTemplate from "../../components/CourseTemplate"; 

export default function Page2024() {
    const sessions2024 = [
        {
            title: "Session 1",
            dates: "July 15 - July 26, 2024",
            courses: [
                {
                    name: "Linear Algebra with Applications",
                    lecturer: "Dr. Pan Li"
                },
                {
                    name: "Real-world Application of Number Theory: Cryptography",
                    lecturer: "Dr. Liu Chun Lung"
                }
            ]
        },
        {
            title: "Session 2",
            dates: "August 5 - August 16, 2024",
            courses: [
                {
                    name: "Calculus and Differential Equations",
                    lecturer: "Dr. Xiao Jingjing"
                },
                {
                    name: "Introduction to Abstract Algebra",
                    lecturer: "Dr. Ng Ming Ho"
                }
            ]
        }
    ];

    return <CourseTemplate year="2024" sessions={sessions2024} />;
}
