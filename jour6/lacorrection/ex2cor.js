function calculateAge(birthDay) {
    var date = new Date(birthDay);
    var age = new Date(new Date() - date);
    return age.getFullYear() - 1970;
  }
  
  console.log(calculateAge("1988-11-17"));