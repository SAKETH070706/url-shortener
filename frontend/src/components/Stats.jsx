import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Stats() {
  const { code } = useParams();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/stats/${code}`);
        setStats(res.data);
      } catch (err) {
        alert("Stats not found");
      }
    };
    fetchStats();
  }, [code]);

  return (
    <div>
      <h2>Stats for {code}</h2>
      {stats ? (
        <ul>
          <li>Long URL: {stats.longUrl}</li>
          <li>Clicks: {stats.clicks}</li>
          <li>Created At: {new Date(stats.createdAt).toLocaleString()}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Stats;
