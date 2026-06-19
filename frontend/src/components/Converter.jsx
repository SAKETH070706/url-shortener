import { useState } from "react";
import axios from "axios";

function Converter() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/shorten", { longUrl });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      alert(err.response?.data?.message || "Error creating short URL");
    }
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter long URL"
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <p>
          Short URL: <a href={`http://${shortUrl}`} target="_blank" rel="noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
  );
}

export default Converter;
 