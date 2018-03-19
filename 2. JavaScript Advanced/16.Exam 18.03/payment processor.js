class PaymentProcessor {
    constructor(object) {
        this.object=object;
        this.payments=[];
    }
    registerPayment(id, name, type, num) {
        if(id!=="" && name!=="" && typeof num==="number") {
            this.payments.push([id, name, type, Number(num)]);
        } else {
            throw new Error("Invalid inputs");
        }
    }
    get(id) {
        let output="";
        for (let obj of this.payments) {
            if(obj[0]===id) {
                output+=`Details about payment ID: ${id} \n`;
                output+=`- Name: ${obj[1]} \n`;
                output+=`- Type: ${obj[2]} \n`;
                output+=`- Value: ${obj[3].toFixed(2)}`;
                return output;
            } else{
                throw new TypeError("Invalid ID");
            }
        }
    }
    deletePayment(id) {
        for (let i = 0; i < this.payments.length; i++) {
            if(this.payments[i][0]===id) {
              //this.payments[i].pop();
                //let saf=this.payments.slice(i, i+1);
              delete this.payments[i];
            }}
        //throw new Error("Invalid ID");
    }
    toString() {
        let balance=0;
        for (let obj of this.payments) {
            if(obj[3]!==undefined) {
                balance+=obj[3];
            }

        }
        let output="Summary: \n"+`- Payments: ${this.payments.length} \n`+`- Balance: ${balance.toFixed(2)}`;
        return output;
    }
}

const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
generalPayments.deletePayment("0001");
console.log(generalPayments.toString());
