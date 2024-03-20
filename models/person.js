class person {
    constructor(name,age,gender,address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }
}