
const express = require('express');
const app = express();

const users =[{
    name:"Vishal",
    Kidneys:[{
        healthy: false
    }],
}];

app.use(express.json());

app.get('/',(req,res)=>{
    const userName = users[0].name;
    const userKidneys = users[0].Kidneys;
    const numberOfKidneys = userKidneys.length;
    const healthyKidneys = userKidneys.filter(kidney => kidney.healthy);
    const unhealthyKidneys = userKidneys.filter(kidney => !kidney.healthy);
    let numberOfHealthyKidneys = healthyKidneys.length;
    let numberOfUnHealthyKidneys = unhealthyKidneys.length;

    resizeBy.json({
        username,
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
})

app.post('/',(req,res) => {
    const isHealthy = req.body.isHealthy;
    users[0].Kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done and healthy"
    })
})

app.put('/',(req,res) => {
    for(let i =0 ; i < users[0].kidney.length;i++){
        users[0].kidney[i].healthy = true;
    }
    res.json({
        msg: "now every kidney is healthy"
    })
})

app.delete('/',(req,res) => {
    const userKidneys = users[0].Kidneys;
    
    users[0].Kidneys = userKidneys.filter(kidney => kidney.healthy);

    if(users[0].Kidneys.length === userKidneys.length){
        res.status(411).json({
            msg:"you have no unhealthy kidneys"
        });

    }else{
        res.json({
            msg:"Unhealthy kidney(s0 deleted"
        });
    }
});

app.listen(3000);
