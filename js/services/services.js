const postData = async (url, data) => {
   const res = await fetch(url, { //куда
      method: 'POST', //каким образом
      headers: {
         'Content-type': 'application/json'
      },
      body: data //что именно
   });

   return await res.json();
};

async function getResource(url) {
   let res = await fetch(url);

   if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
   }
   // console.log(res);
   return await res.json();
};

export {postData};
export {getResource};