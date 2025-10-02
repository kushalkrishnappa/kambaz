"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export default function CourseNavigation() {
  const pathname = usePathname();
  const { cid } = useParams();

  const links = [
    { label: "Home", path: `/Courses/${cid}/Home` },
    { label: "Modules", path: `/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Courses/${cid}/Quizzes` },
    { label: "People", path: `/Courses/${cid}/People/Table` },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          id={`wd-course-${link.label.toLowerCase()}-link`}
          className={`list-group-item border-0 ${
            pathname.includes(link.path) ? "active" : "text-danger"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
