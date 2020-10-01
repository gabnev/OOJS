function Person(name, dob){
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = () => {
    const dif = Date.now() - this.birthday.getTime();
    const age = new Date(dif);
    return Math.abs(age.getUTCFullYear() - 1970);
  }
}


const gabs = new Person('gabriel', '12-12-1984');
// const stella = new Person('stella', 30);

console.log(gabs.calculateAge());