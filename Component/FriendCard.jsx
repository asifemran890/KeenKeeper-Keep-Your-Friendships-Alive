const statusColors = {
  Overdue: "bg-red-500",
  "On-Track": "bg-green-700",
  "Almost Due": "bg-yellow-400 text-black",
};

export default function FriendCard({ friend }) {
  return (
    <div className="bg-white rounded-xl  shadow-md p-6 text-center hover:shadow-lg transition">
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-20 h-20 mx-auto rounded-full object-cover"
      />

      <h2 className="mt-4 font-semibold text-lg">{friend.name}</h2>
      <p className="text-gray-400 text-sm">{friend.days}</p>

      {/* Tags */}
      <div className="flex justify-center gap-2 mt-2 flex-wrap">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status */}
      <div className="mt-3">
        <span
          className={`text-white text-xs px-3 py-1 rounded-full ${statusColors[friend.status]}`}
        >
          {friend.status}
        </span>
      </div>
    </div>
  );
}
