export const getLocation = () => {
  if (navigator.geolocation) {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  } else {
    return {
      lat: 32.0869,
      long: 34.80149,
    };
  }
};

export const optionCheck = (options, searchTerm) => {
  for (let option of options) {
    if (option.LocalizedName === searchTerm) {
      console.log(option)
      return option;
    }
  }
  return false;
};

export const dateConverter = (date) => {
  var options = { weekday: 'long'};
  date = new Date(date)
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const formatIconNumber = (num) => {
  if (num < 10) {
    num = '0' + num.toString();
  }
  return num;
};
