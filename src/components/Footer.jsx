import Link from 'next/link';
import { LuBookOpen } from 'react-icons/lu';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content mt-auto border-t border-base-300">
      <div className="footer max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 p-10 gap-8 place-items-center sm:place-items-start text-center sm:text-left">
        <aside className="lg:col-span-2">
          <div className="flex flex-col items-center sm:items-start gap-2 mb-2 w-full">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <LuBookOpen className="text-primary w-8 h-8" />
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
                SkillSphere
              </span>
            </div>
            <span className="text-sm text-base-content/50 mt-1">
              #SkillSphere #LearnWithSkillSphere
            </span>
          </div>
          <p className="max-w-xs mx-auto sm:mx-0">
            Providing reliable tech courses since 2026.
            <br />
            Empowering your learning journey.
          </p>
        </aside>

        <nav className="flex flex-col items-center sm:items-start">
          <h6 className="footer-title">Services</h6>
          <Link href="/courses" className="link link-hover">
            Courses
          </Link>
          <Link href="#" className="link link-hover">
            Mentorship
          </Link>
          <Link href="#" className="link link-hover">
            Careers
          </Link>
        </nav>

        <nav className="flex flex-col items-center sm:items-start">
          <h6 className="footer-title">Company</h6>
          <Link href="#" className="link link-hover">
            About us
          </Link>
          <Link href="#" className="link link-hover">
            Contact
          </Link>
          <Link href="#" className="link link-hover">
            Jobs
          </Link>
        </nav>

        <nav className="flex flex-col items-center sm:items-start">
          <h6 className="footer-title">Legal</h6>
          <Link href="#" className="link link-hover">
            Terms of use
          </Link>
          <Link href="#" className="link link-hover">
            Privacy policy
          </Link>
          <Link href="#" className="link link-hover">
            Cookie policy
          </Link>
        </nav>

        <nav className="flex flex-col items-center sm:items-start">
          <h6 className="footer-title">Social</h6>
          <div className="flex gap-4 justify-center sm:justify-start">
            <Link
              href="https://www.facebook.com/redwan.hossain.281607"
              target="_blank"
              className="hover:text-primary transition-all">
              <FaFacebookF size={24} />
            </Link>
            <Link
              href="https://github.com/Redwanhossain200"
              target="_blank"
              className="hover:text-primary transition-all">
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/redwan-hossain-dev/"
              target="_blank"
              className="hover:text-primary transition-all">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </nav>
      </div>

      <div className="py-6 border-t border-base-300 text-sm text-center text-base-content/50">
        <p>&copy; {new Date().getFullYear()} SkillSphere. All rights reserved.</p>
      </div>
    </footer>
  );
}
