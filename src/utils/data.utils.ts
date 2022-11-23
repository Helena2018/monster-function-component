export const getData = async <Type>(url: string): Promise<Type> => {
  const response = await fetch(url);
  return await response.json();
}