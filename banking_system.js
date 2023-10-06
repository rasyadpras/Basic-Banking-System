class BankAccount {
    constructor() {
        this.saldo = 0;
    }

    async deposit(amount) {
        let balance = parseFloat(amount);
        if (isNaN(balance)) {
            alert('Input invalid. Mohon masukkan angka yang benar.');
        } else {
            if (balance < 1000) {
                throw Error('Nilai harus lebih dari 1000');
            } else {
                setTimeout(() => {
                    this.saldo += balance;
                    console.log(this.saldo);
                    document.getElementById("show").innerHTML = this.saldo;
                    alert(`Setoran diterima.\nSaldo anda saat ini : ${this.saldo}`);
                }, 1000);
            }
        }
    }

    async withdraw(amount) {
        let balance = parseFloat(amount);
        if (isNaN(balance)) {
            alert('Input invalid. Mohon masukkan angka yang benar.');
        } else {
            if (balance >= this.saldo) {
                throw Error('Penarikan gagal. Saldo kurang dari 0');
            } else {
                setTimeout(() => {
                    this.saldo -= balance;
                    console.log(this.saldo);
                    document.getElementById("show").innerHTML = this.saldo;
                    alert(`Penarikan berhasil.\nSaldo anda saat ini : ${this.saldo}`);
                }, 1000);
                
            }
        }
    }
};

// inheritance
class TransactionButton extends BankAccount {

    deposit() {
        let amount = prompt("Masukkan jumlah uang yang ingin anda tabung");
        super.deposit(amount);
    }

    withdraw() {
        let amount = prompt("Masukkan jumlah uang yang ingin anda tarik");
        super.withdraw(amount);
    }
}

const bankAccount = new BankAccount;
const button = new TransactionButton;
