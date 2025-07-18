import Link from "next/link";
import { year } from "@/app/data";

export default function CourseList() {
    const years = Array.from({ length: year - 2023 + 1 }, (_, i) => year - i);
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Academic Years</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {years.map((y) => (
                    <Link
                        key={y}
                        href={`/courses/${y}`}
                        className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center ring-2 ring-gray-900/5 dark:ring-white/10"
                    >
                        <div className="text-lg font-bold dark:text-white">{y} - {y + 1}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}