const FundraiserFactoryContract = artifacts.require("FundraiserFactory");

contract("FundraiserFactory: deployment", () => {
  // デプロイテスト
  it("has been deployed", async () => {
    const fundraiserFactory = FundraiserFactoryContract.deployed();
    assert(fundraiserFactory, "fundraiser factory was not deployed");
  });
});
