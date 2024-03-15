class customer {
    constructor(CustomerName,Phone,Email,Address) {
        this.CustomerName = CustomerName;
        this.Phone = Phone;
        this.Email = Email;
        this.Address = Address;
    }

    getCustomerName() {
        return this.CustomerName;
    }

    setCustomerName(CustomerName) {
        this.CustomerName = CustomerName;
    }

    getPhone() {
        return this.Phone;
    }

    setPhone(Phone) {
        this.Phone = Phone;
    }


    getEmail() {
        return this.Email;
    }

    setEmail(Email) {
        this.Email = Email;
    }


    getAddress() {
        return this.Address;
    }

    setAddress(Address) {
        this.Address = Address;
    }
}