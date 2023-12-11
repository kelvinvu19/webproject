import Link from "next/link"
import StudentInfo from "./student-info"

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-yellow-500">CPRG 306: Web Development 2 - Assignments</h1><br />
      <StudentInfo />
      <div className="m-4 font-bold">
        <Link href="assigment">app</Link><br />
      </div>
    </main>
  )
}