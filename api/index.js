module.exports = (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { data } = req.body;

  if (typeof data !== "string") {
    return res.status(400).json({ error: "Invalid input. 'data' must be a string." });
  }

  const sortedChars = data.split("").sort();
  return res.json({ word: sortedChars });
};
