module.exports = function loader(source) {
    const options = this.query;
    const result = source.replace('Moeder', options.name);
    return result
}