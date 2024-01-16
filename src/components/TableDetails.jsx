import StudentImage from "../assets/avatar.png";

const EveryStudentDetails = ({ data }) => {
  return (
    <tr className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">{data.id}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8"
            src={StudentImage}
            width="32"
            height="32"
            alt="John Smith"
          />
          <span className="whitespace-nowrap">{data.name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{data.grade}</td>
      <td className="p-5 text-sm md:text-xl text-center">{data.percentage}</td>
    </tr>
  );
};

export default function TableDetails({ data }) {
  const { whichClass, students } = data;
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-[#FFFFFF0D]">
          <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
            ID
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold text-left">
            Name
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
          <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
        </tr>
      </thead>
      <tbody>
        {/* <!-- class two --> */}
        <tr className="bg-white/5">
          <td className="p-5 text-sm md:text-xl" colSpan="4">
            {whichClass}
          </td>
        </tr>
        {students?.map((student) => (
          <EveryStudentDetails key={student.id} data={student} />
        ))}
      </tbody>
    </table>
  );
}
