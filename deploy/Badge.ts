// import { HardhatRuntimeEnvironment } from "hardhat/types"
// import { DeployFunction, DeployResult } from "hardhat-deploy/types"

// const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
//   // TODO: Add deploy script
//   const { deployments, getNamedAccounts } = hre
//   const { deployer } = await getNamedAccounts
  
//   const { deploy } = deployments

//   const NAME = "Name"
//   const SYMBOL = "Symbol"
//   const BADGE_NAME = "Chainlink workshop #1"
//   const BADGE_DESCRIPTION = "First event workshop from Chainlink"

//   const result: DeployResult = await deploy("Badge", {
//     contract: "Badge",
//     from: deployer,
//     args: [NAME, SYMBOL, BADGE_NAME, BADGE_DESCRIPTION],
//     log: true,
//     waitConfirmation: 6,
//   })

//   console.log("Result = ", result.address)

//   try{
//     await hre.run("verify:verify", {
//       address: result.address,
//       constructorArguments: [NAME, SYMBOL, BADGE_NAME, BADGE_DESCRIPTION],
//     })
//   } catch (e) {
//     console.log("Error verifying contract", e)
//   }
  
// }
// export default func
// func.tags = ["Badge"]

import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction, DeployResult } from "hardhat-deploy/types"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // TODO: Add deploy script
  const {deployments, getNamedAccounts, network} = hre;
  const { deployer } = await getNamedAccounts()

  const {deploy} = deployments

  const NAME = "Name"
  const SYMBOL = "Symbol"
  const BADGE_NAME = "Chainlink workshop #1"
  const BADGE_DESCRIPTION = "Too Fast Workshop"

  const result = await deploy("Badge", {
    contract: "Badge",
    from: deployer,
    args: [NAME, SYMBOL, BADGE_NAME, BADGE_DESCRIPTION],
    log: true,
    waitConfirmations: 6,
  })

  console.log("Resault = ", result.address);

  try{
    await hre.run('verify:verify',
    {
      address:result.address,
      constructorArguments: [NAME, SYMBOL, BADGE_NAME, BADGE_DESCRIPTION]
    })
  } catch(err){
    console.log("Error: ", err)
  }
}

export default func
func.tags = ["Badge"]