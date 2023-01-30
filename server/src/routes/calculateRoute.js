const CalculateModel = require("../models/calculateModel")

const Returns = async(req,res) =>{

    const {annualInstalment,annualInterest,years} = req.body;
    
    try {
        let r1 = (1+annualInterest) ** years
        let r2 = r1-1
        let r3 = r2/annualInterest
        let maturity  = annualInstalment*r3

        let totalInvestmentAmount = annualInstalment * years

        let totalGained =maturity - totalInvestmentAmount 
        // console.log(Math.floor(totalGained));
        res.send({"message":Math.floor(totalGained)})
       
    } catch (error) {
            res.send("Something went wrong").status(401)
    }
}
module.exports ={
     Returns
}