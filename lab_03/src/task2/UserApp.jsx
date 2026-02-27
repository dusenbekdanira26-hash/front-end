import { useState } from "react";
import UserProfile from "./UserProfile";

export default function UserApp() {
  const [userId, setUserId] = useState(1);

  return (
    <div>
      <h2>User Data</h2>
      <UserProfile userId={userId} />
      <div style={{ marginTop: "12px" }}>
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(3)}>User 3</button>
        <button onClick={() => setUserId(Math.floor(Math.random() * 10) + 1)}>
          Random User
        </button>
      </div>
    </div>
  );
}