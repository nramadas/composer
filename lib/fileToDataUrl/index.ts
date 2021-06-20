export function fileToDataUrl(file: File) {
  const reader = new FileReader();

  return new Promise<string>((res, rej) => {
    reader.addEventListener('load', () => {
      if (typeof reader.result === 'string') {
        res(reader.result);
      }
    });

    reader.addEventListener('error', e => {
      rej(e);
    });

    reader.readAsDataURL(file);
  });
}
