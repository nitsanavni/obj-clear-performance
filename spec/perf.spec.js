describe('test object clearing performance', () => {

    it('new obj each time', () => {
        let before = new Date();
        for (let j = 0; j < 1000; j++) {
            let obj = {};
            for (let i = 0; i < 100000; i++) {
                obj[i] = i;
            }
        }

        console.log('new obj took', new Date() - before)
    });

    it('same obj each time', () => {
        let before = new Date();
        let obj = {};
        for (let j = 0; j < 1000; j++) {
            for (let i = 0; i < 100000; i++) {
                obj[i] = i;
            }
        }
        console.log('same obj took', new Date() - before)
    });

    it('pre-allocate', () => {

        let arr = new Array(100000);

        let before = new Date();
        for (let j = 0; j < 1000; j++) {
            for (let i = 0; i < 100000; i++) {
                arr[i] = i;
            }
        }

        console.log('pre-allocate took', new Date() - before)
    });


});