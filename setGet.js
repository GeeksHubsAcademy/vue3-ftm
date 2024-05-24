const myRef = {
    _value: 0,
    get value() {
        console.log('get value');
        return this._value
    },
    set value(newValue) {
        console.log('set value', newValue);
        this._value = newValue
    }
}



myRef.value
myRef.value = 33
