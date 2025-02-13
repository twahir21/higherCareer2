import { useEffect } from "react";

const PrimaryJoinPage = () => {
    useEffect(() => {
        fetch("/primary-join")
          .then((response) => response.json())
          .then((data) => console.log(data)) // Handle data
          .catch((error) => console.error("Fetch error:", error));
      }, []);
  return (<></>)
}

export default PrimaryJoinPage