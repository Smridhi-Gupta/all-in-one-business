import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Resources() {
  return (
    <section className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Resources</h2>
        </div>

        {/* Right Grid with 6 links */}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center gap-2">
            <Image
              src="/ai-icon.png" // save your AI at ServiceNow icon here
              alt="AI at ServiceNow"
              width={40}
              height={40}
            />
            <Link href="#" className="font-medium text-sm hover:underline">
              AI at ServiceNow
            </Link>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center gap-2">
            <Image
              src="/locations-icon.png" // save Locations icon here
              alt="Locations"
              width={40}
              height={40}
            />
            <Link href="#" className="font-medium text-sm hover:underline">
              Locations
            </Link>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center gap-2">
            <Image
              src="/innovation-icon.png" // save Innovation Center icon here
              alt="Innovation Center"
              width={40}
              height={40}
            />
            <Link href="#" className="font-medium text-sm hover:underline">
              Innovation Center
            </Link>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center gap-2">
            <Image
              src="/ethics-icon.png" // save Code of Ethics icon here
              alt="Code of Ethics"
              width={40}
              height={40}
            />
            <Link href="#" className="font-medium text-sm hover:underline">
              Code of Ethics
            </Link>
          </div>

          {/* Item 5 */}
          <div className="flex flex-col items-center text-center gap-2">
            <Image
              src="/investor-icon.png" // save Investor Relations icon here
              alt="Investor Relations"
              width={40}
              height={40}
            />
            <Link href="#" className="font-medium text-sm hover:underline">
              Investor Relations
            </Link>
          </div>

          {/* Item 6 */}
          <div className="flex flex-col items-center text-center gap-2">
            <Image
              src="/workflow-icon.png" // save Workflow icon here
              alt="Workflow"
              width={40}
              height={40}
            />
            <Link href="#" className="font-medium text-sm hover:underline">
              Workflow
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}