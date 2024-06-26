import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./User_Home.css";

export default function User_Home() {
  //const nameBubbles = ["team1", 'team2', 'team3']; //replace w database info
  const [friendGroups, setFriendGroups] = useState([]);

  useEffect(() => {
    const fetchFriendGroups = async () => {
      const userId = localStorage.getItem("userId");
      const url = `http://localhost:5002/api/friend-groups/${userId}`;

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();
          setFriendGroups(result);
          console.log("Successfully got friend groups", result);
        } else {
          throw new Error("Failed to get friend groups");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchFriendGroups();
  }, []);

  const propogateBubbles = friendGroups.map((friendGroup, index) => (
    <div key={index}>
      <Link to={`/bubbles/${friendGroup._id}`} className="bubble-link">
        <button className="bubble-button">
          {friendGroup.name}
          <span className="bubble-name">{friendGroup.members.length}</span>
          <hr />
        </button>
      </Link>
    </div>
  ));

  return (
    <>
      <div className="user_home_title">
        <h1>🫧Friend Bubbles🫧</h1>
      </div>
      <div className="buttons">
        <Link to="/join-bubble">
          <button className="join_button" style={{ marginRight: "30px" }}>
            Join Bubble
          </button>
        </Link>
        <Link to="/create-bubble">
          <button className="create_button">Create Bubble</button>
        </Link>
      </div>
      <br />
      <div className="friend-group-section">
        <h2 className="small"><u>Current Friend Bubbles</u></h2>
        <div className="bubbles">{propogateBubbles}</div>
      </div>
    </>
  );
}
