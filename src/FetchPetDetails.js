export default async function FetchPetDetails({ queryKey }) {
  const id = queryKey[1];
  const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!res.ok) {
    throw new Error(`Details of ${id} not found or fetched`);
  }
  return res.json();
}
