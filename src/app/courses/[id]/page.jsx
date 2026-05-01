import courses from '../../../../public/courses.json';
import { notFound, redirect } from 'next/navigation';
import { headers } from 'next/headers';
import CourseHero from '@/components/course/CourseHero';
import CourseContent from '@/components/course/CourseContent';
import CourseSidebar from '@/components/course/CourseSidebar';

export default async function CourseDetailsPage({ params }) {
  const headerData = await headers();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/auth/get-session`,
    {
      headers: { cookie: headerData.get('cookie') || '' },
    },
  );

  const session = await res.json();

  if (!session) {
    redirect('/login');
  }

  const resolvedParams = await params;
  const courseId = parseInt(resolvedParams.id);
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="bg-base-100 rounded-3xl shadow-lg overflow-hidden border border-base-200">
        <CourseHero course={course} />
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <CourseContent course={course} />
          <CourseSidebar course={course} />
        </div>
      </div>
    </div>
  );
}
