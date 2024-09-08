import { Chance } from "chance";

const chance = Chance();

const fakeUserData = () => {
  try {
    let name = chance.name();
    let city = chance.city();
    return {name, city};
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default fakeUserData;
