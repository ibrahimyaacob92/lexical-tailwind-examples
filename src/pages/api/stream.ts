import { type NextApiRequest, type NextApiResponse } from "next";

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Content-Encoding", "none");

  const wordsToStream = `The mission to the moon has always been portrayed as a result of human ambition and exploration. While this perspective holds true to some extent, a closer examination reveals that the mission to the moon was primarily driven by the Cold War rivalry between the United States and the Soviet Union.`;

  const words = wordsToStream.split(" ");
  let currentIndex = 0;

  function pushWord() {
    if (currentIndex < words.length) {
      res.write(words[currentIndex] + " "); // Write a word with a space
      currentIndex++;
      setTimeout(pushWord, Math.floor(Math.random() * 100) + 1); // Delay for 1 second (1000 milliseconds)
    } else {
      res.end(); // Signal the end of the stream
    }
  }

  pushWord();
}
