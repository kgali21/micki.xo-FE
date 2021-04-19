

export const youtubeFetch = (id, apiKey) => {
  return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,player&id=${id}&key=${apiKey}`)
    .then(res => res.json());
};


