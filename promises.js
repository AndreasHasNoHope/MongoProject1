async function init() {
    const myp = new Promise((resolve, reject) => {
        let a = 5;
        let b = 6;

        setTimeout(()=>{
            resolve(a + b);
        },5000);
    });
    const resolve = await myp;
    console.log("A: ", resolve);
}

init();

