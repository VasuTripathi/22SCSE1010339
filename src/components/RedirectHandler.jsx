import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RedirectHandler = () => {
  const { shortcode } = useParams();
  const [found, setFound] = useState(false);
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("shortUrls");
    const urls = JSON.parse(data || "[]");
    const match = urls.find((entry) => entry.shortcode === shortcode);

    if (match && new Date(match.expiry) > new Date()) {
      setFound(true);
      window.location.href = match.longUrl; // ✅ Immediate redirect
    } else {
      setInvalid(true);
    }
  }, [shortcode]);

  if (invalid) {
    return <h2>Invalid or Expired URL</h2>;
  }

  if (!found) {
    return <h2>Redirecting...</h2>;
  }

  return null;
};

export default RedirectHandler;
