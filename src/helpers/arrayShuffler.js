function shuffleArray(array, newLength) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  array = array
    .slice(0, newLength)
    .sort((a, b) => a.numeroQuestao - b.numeroQuestao);
  return array;
}

export default shuffleArray;
