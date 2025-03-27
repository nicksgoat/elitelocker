
import { useState, useEffect } from "react";

interface TypewriterEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

export const TypewriterEffect = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1000,
  className = "",
}: TypewriterEffectProps) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [delta, setDelta] = useState(typingSpeed);

  useEffect(() => {
    let timer: number;

    const tick = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting;
      
      // If deleting, remove last character, otherwise add the next character
      setText((prev) => 
        shouldDelete 
          ? prev.substring(0, prev.length - 1) 
          : currentWord.substring(0, prev.length + 1)
      );

      // Set typing/deleting speed
      setDelta(isDeleting ? deletingSpeed : typingSpeed);

      // If word is complete
      if (!isDeleting && text === currentWord) {
        // Wait before deleting
        setDelta(delayBetweenWords);
        setIsDeleting(true);
      } 
      // If deletion is complete
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        // Move to next word (or loop back)
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    timer = window.setTimeout(tick, delta);
    return () => clearTimeout(timer);
  }, [words, wordIndex, isDeleting, text, delta, typingSpeed, deletingSpeed, delayBetweenWords]);

  return <span className={className}>{text}</span>;
};
