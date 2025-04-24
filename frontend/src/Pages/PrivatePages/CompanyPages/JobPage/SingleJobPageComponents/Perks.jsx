import React from 'react'

const Perks = () => {
  return (
    <div className=" max-w-7xl mx-auto min-h-fit relative w-full md:p-6 p-4   dash-boxes mt-5 ">
    {/* perks  */}
    <h2 className="text-3xl font-bold mb-2">Perks & Benefits</h2>
    <p className="mb-6 text-gray-600">
      This job comes with several perks and benefits
    </p>

    <div className="flex flex-wrap gap-6">
      {[
        {
          title: "Full Healthcare",
          desc: "We believe in thriving communities and that starts with our team being happy and healthy.",
        },
        {
          title: "Unlimited Vacation",
          desc: "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
        },
        {
          title: "Skill Development",
          desc: "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
        },
        {
          title: "Team Summits",
          desc: "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.",
        },
        {
          title: "Remote Working",
          desc: "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.",
        },
        {
          title: "Commuter Benefits",
          desc: "We're grateful for all the time and energy each team member puts into getting to work every day.",
        },
        {
          title: "We give back.",
          desc: "We anonymously match any donation our employees make (up to $/£/€600) so they can support the organizations they care about most—times two.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex-1 min-w-[250px] max-w-sm p-4 border border-gray-200 rounded-lg shadow-sm bg-[#D9EDFF] "
        >
          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>


</div>

  )
}

export default Perks
