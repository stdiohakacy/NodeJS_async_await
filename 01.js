const promise01 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Promise 01');
        }, 1000);
    });
};

const promise02 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Promise 02');
        }, 2000);
    });
};


const promise03 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Promise 03');
        }, 1000);
    });
};


const doSth = async () => {
    const data1 = await promise01();
    const data2 = await promise02();
    const data3 = await promise03();

    console.log(data1);
    console.log(data2);
    console.log(data3);
};

async function doSth2() {
    const [a, b, c] = await Promise.all([promise01(), promise02(), promise03()]);

    console.log(`${a} ${b} ${c}`);
}

doSth();
doSth2();
