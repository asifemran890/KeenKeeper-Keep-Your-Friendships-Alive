"use client";
import { useEffect, useState } from "react";
import FriendCard from "./FriendCard";

export default function FriendsPage() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen ">
      <h1 className="text-xl font-semibold mb-6 max-w-5xl mx-auto ">Your Friends</h1>

      <div className="grid grid-cols-1 max-w-6xl mx-auto  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}