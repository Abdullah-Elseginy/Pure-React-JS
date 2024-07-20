import { useEffect, useState } from 'react';
const localcache = {};

export default function useBreadList(animal) {
  const [breadList, setbreadList] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [Error, setError] = useState(null);
  useEffect(() => {
    if (!animal) {
      setbreadList([]);
    } else if (localcache[animal]) {
      setbreadList(localcache[animal]);
    } else {
      reqbread();
    }
  }, [animal]);

  async function reqbread() {
    try {
      setisloading(true);
      setError(null);
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
      );
      const json = await res.json();
      localcache[animal] = json.breeds || [];
      setbreadList(localcache[animal]);
    } catch (e) {
      setError(e);
    } finally {
      setisloading(false);
    }
  }

  return [breadList, isloading, Error];
}
