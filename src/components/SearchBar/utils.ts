export const filterSearch = (text: string, values: Array<string>) => {
  console.log(
    'values.includes(text.toLowerCase())',
    values.includes(text.toLowerCase())
  );
  return values.includes(text.toLowerCase());
};

export const placeholderArray: Array<string> = [
  'cat',
  'california',
  'dog',
  'orange',
  'red',
  'hello',
  'hey',
  'hippo',
];
