export function mapObject(obj) {
    let _output = [];
    for(let i in obj) {

        _output.push({id: i, ...obj[i]})
    }

    return _output;
}