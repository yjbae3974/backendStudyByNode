setTimeout(()=>{
    const value = Math.random()
    console.log('value1',value)
    setTimeout(()=>{
        const value = Math.random()
        console.log('value2',value)
        setTimeout(()=>{
            const value = Math.random()
            console.log('value3',value)
            setTimeout(()=>{
                const value = Math.random()
                console.log('value4',value)
                setTimeout(()=>{
                    const value = Math.random()
                    console.log('value5',value)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)