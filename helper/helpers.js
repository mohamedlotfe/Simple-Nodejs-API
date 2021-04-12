module.exports.validateCustomer = function (customer) {
    if(!customer || !customer.name || !customer.city) return undefined;
    return customer;
} 
module.exports.validateCompany = function (company) {
    if(!company || !company.name || !company.status) return undefined;
    return company;
} 
module.exports.validateProduct = function (product) {
    if(!product || !product.name || !product.price) return undefined;
    return product;
} 
