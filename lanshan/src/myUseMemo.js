import { useState, useEffect } from "react";
function myUseMemo(callback, dependencies) {
  const [memorized, setMemorized] = useState(callback());
  useEffect(() => {
    setMemorized(callback());
  }, dependencies);
  return memorized;
}

export default myUseMemo
