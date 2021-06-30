interface Dict {
  [key: string]: string;
}

export function searchStringToDict(str: string): Dict {
  const result: Dict = {};
  let searchStr = str.trim();

  if (searchStr.startsWith('?')) {
    searchStr = searchStr.slice(1);
  }

  const parts = searchStr.split('&');

  for (const part of parts) {
    const [key, value] = part.split('=');
    result[key] = value;
  }

  return result;
}
