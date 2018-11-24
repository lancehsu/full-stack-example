const getItem = async ()=> {
    const res = await fetch('http://localhost:3005/dishes');
    const j = await res.json();
    console.log(j);
}
getItem();
