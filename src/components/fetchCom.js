export default function ajax( url ) {
    return fetch(url).then( response => response.json() )
  }