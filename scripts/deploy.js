async function main() {
  const RealEstate = await ethers.getContractFactory("HospitalManagement");
  const realEstate = await RealEstate.deploy();
  await realEstate.deployed();
  console.log("HospitalManagement deployed to:", realEstate.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
