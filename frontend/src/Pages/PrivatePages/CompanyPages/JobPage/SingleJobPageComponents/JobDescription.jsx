import React from "react";

const JobDescription = () => {
  return (
    <div className="md:col-span-2 space-y-6">
      <div className="min-h-fit relative w-full md:p-6 p-4  dash-boxes">
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="text-gray-500">
        Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.
        </p>
      </div>
      <div className="min-h-fit relative w-full md:p-6 p-4  dash-boxes">
        <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>
            Community engagement to ensure that is supported and actively
            represented online
          </li>
          <li>Focus on social media content development and publication</li>
          <li>Marketing and strategy support</li>
          <li>
            Stay on top of trends on social media platforms, and suggest content
            ideas to the team
          </li>
          <li>Engage with online communities</li>
        </ul>
      </div>

      <div className="min-h-fit relative w-full md:p-6 p-4  dash-boxes">
        <h3 className="text-xl font-semibold mb-2">Nice-To-Haves</h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Fluent in English</li>
          <li>Project management skills</li>
          <li>Copy editing skills</li>
        </ul>
      </div>
    </div>
  );
};

export default JobDescription;
