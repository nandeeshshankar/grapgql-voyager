import React from "react";
import { Voyager } from 'graphql-voyager';
import fetch from 'isomorphic-fetch';


function QLEditor(){

    function introspectionProvider (query) {
        //console.log(query, "URL", window.location.origin);
        return fetch('https://countries.trevorblades.com/graphql', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({query: query}),
        }).then(response => response.json());
      }

    return(
        <>
        <Voyager introspection={introspectionProvider} workerURI={process.env.PUBLIC_URL + '/voyager.worker.js'} />
        </>
    )
}

export default QLEditor;