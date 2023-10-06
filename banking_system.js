class BankAccount {
    constructor() {
        this.saldo = 0;
        this.show = document.getElementById("show").textContent;
    }

    deposit(amount) {
        let amount = prompt("Masukkan Nilai");
        let balance = parseFloat(amount);
        if (isNaN(balance)) {
            throw Error('Input invalid. Mohon masukkan angka yang benar.');
        } else {
            if (balance < 0) {
                throw Error('Nilai harus lebih dari 0');
            } else {
                setTimeout(() => this.saldo += balance, 1000); //bikin class sendiri
                console.log(`Setoran diterima.\nSaldo anda saat ini : ${this.saldo}`);
            }
        }
    }

    withdraw(amount) {
        let amount = prompt("Masukkan Nilai");
        let balance = parseFloat(amount);
        if (isNaN(balance)) {
            throw Error('Input invalid. Mohon masukkan angka yang benar.');
        } else {
            if (balance < 0) {
                throw Error('Nilai harus lebih dari 0');
            } else {
                setTimeout(() => this.saldo -= balance, 1000);
                if (this.saldo < 0) {
                    throw Error('Penarikan gagal. Saldo kurang dari 0');
                } else {
                    console.log(`Penarikan berhasil.\nSaldo anda saat ini : ${this.saldo}`);
                }
            }
        }
    }


};

const bankAccount = new BankAccount;
