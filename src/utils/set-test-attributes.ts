export const setTestAttributes = (val: string): { [key: string]: string } => {
  return process.env.NODE_ENV === 'production' ? {} : { 'data-test': val };
};
