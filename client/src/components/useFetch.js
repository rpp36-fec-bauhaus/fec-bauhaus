import React, { useEffect, useState } from 'react';

var useFetch = (url) => {

  var [ data, setData ] = useState(null);
  var [ pending, setPending ] = useState(true);
  var [ error, setError ] = useState(null);

  useEffect(() => {
    setPending(true);
    setData(null);
    fetch(url)
      .then(res => {
      if (!res.ok) {
        throw 'Error fetching data'
      }
      return res.json();
    }).then(data => {
      // timeout to simulate network
      setData(data);
      setPending(false);
    }).catch(err => {
      setError(err.message);
      setPending(false);
    });

  }, [url]);

  return [
    data,
    pending,
    error
  ];
}

export default useFetch;