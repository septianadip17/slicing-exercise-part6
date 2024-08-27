import React from "react";
import MemberCard from "../components/MemberCard";

const members = [
  {
    total_members: 4,
    job: "UI Designer",
  },
  {
    total_members: 8,
    job: "Frontend Developer",
  },
  {
    total_members: 3,
    job: "Backend Developer",
  },
  {
    total_members: 6,
    job: "Mobile App Developer",
  },
];
const Members = () => {
  return (
    <div>
      {" "}
      <div className="border-2 border-yellow-500">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-semibold">Members</h1>
          <p className="text-sm underline text-indigo-600">See all</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {members &&
            members.map((member) => (
              <MemberCard member={member} key={member.job} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
