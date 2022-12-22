import React, { useState } from 'react';
//import {Box, Heading,Button }from "@chakra-ui/react"
import data from './data';
import List from './List';
const App=()=> {
  const[people,setPeople]=useState(data)
  return (
<main>
<section>
<h3>{people.length} birthdays today</h3>
<List people={people} />

<button onClick={()=> setPeople([])} >clear all</button>


</section>


</main>




  )
}

export default App;
