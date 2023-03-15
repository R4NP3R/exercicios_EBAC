const Computador = function (processor, ram, storage) {
    this.processor = processor;
    this.ram = ram;
    this.storage = storage;
}

const Notebook = function(processor, ram, storage, battery, monitorSize) {
    this.battery = battery;
    this.monitorSize = monitorSize;
    Computador.call(this, processor, ram, storage);
    
}

const Desktop = function(processor, ram, storage,consumption, monitorSize) {
    this.consumption = consumption;
    this.monitorSize = monitorSize;
    Computador.call(this, processor, ram, storage);
}

const notebookDoZe = new Notebook ("i5 3740u","8gb ram","500gb","8 horas de duração", "22'");
const computadorDoManoel = new Desktop("Ryzen 5600x","16gb ram","2TB","650w","27'");
const notebookDaLeticia = new Notebook("i3 7020U","4gb ram","320gb","12 horas de duração","20'");


console.log(notebookDoZe);
console.log(computadorDoManoel);
console.log(notebookDaLeticia);
